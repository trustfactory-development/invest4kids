const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium, devices } = require("playwright");

const PAGES = [
  { slug: "01-home", url: "https://invest4kids.de/en/" },
  { slug: "02-consulting", url: "https://invest4kids.de/en/beratung/" },
  { slug: "03-concept", url: "https://invest4kids.de/en/invest4kids-konzept/" },
  { slug: "04-reviews", url: "https://invest4kids.de/en/erfahrungen/" },
  { slug: "05-calculator", url: "https://invest4kids.de/en/vorteilsrechner/" },
  { slug: "06-about", url: "https://invest4kids.de/en/ueber-uns/" },
  { slug: "07-team", url: "https://invest4kids.de/en/team/" },
  { slug: "08-blog", url: "https://invest4kids.de/en/blog/" },
  { slug: "09-podcast", url: "https://invest4kids.de/en/podcast/" },
  { slug: "10-press", url: "https://invest4kids.de/en/presse/" },
  { slug: "11-imprint", url: "https://invest4kids.de/en/impressum/" },
  { slug: "12-data-protection", url: "https://invest4kids.de/en/datenschutz/" },
  { slug: "13-transparency", url: "https://invest4kids.de/en/transparenz/" },
  { slug: "14-our-approach", url: "https://invest4kids.de/en/invest4kids-serioes/" },
  { slug: "15-study", url: "https://invest4kids.de/en/studie/" },
  { slug: "16-whatsapp-ai", url: "https://invest4kids.de/en/whatsapp-ai-web/" },
  {
    slug: "17-blog-post-template",
    url: "https://invest4kids.de/blog/fruehstart-rente-warum-eltern-zweifel-an-wirkung-und-fairness-haben/",
  },
];

const OUTPUT_DIR = path.join(process.cwd(), "output");

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function dismissOverlays(page) {
  const selectors = [
    ".cookie-accept",
    "#accept-cookies",
    '[aria-label*="accept" i]',
    '[aria-label*="close" i]',
    ".modal-close",
    ".close-button",
    'button[class*="close"]',
    'button[class*="accept"]',
    'button[class*="dismiss"]',
  ];
  for (const selector of selectors) {
    try {
      const el = await page.$(selector);
      if (el) await el.click();
    } catch (_) {}
  }
}

async function resolveBrowserLaunchOptions() {
  const bundledExecutable = chromium.executablePath();
  const fallbackExecutables = [
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];

  try {
    await fs.access(bundledExecutable);
    return { headless: true };
  } catch {
    for (const executablePath of fallbackExecutables) {
      try {
        await fs.access(executablePath);
        return { headless: true, executablePath };
      } catch {
        // Try the next candidate.
      }
    }
  }

  return { headless: true };
}

async function captureViewport(browser, { url, slug, viewport, contextOptions, screenshotName, saveHtml }) {
  const context = await browser.newContext({ viewport, ...contextOptions });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
    await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(2000);
    await autoScroll(page);
    await dismissOverlays(page);

    const slugDir = path.join(OUTPUT_DIR, slug);
    await page.screenshot({
      path: path.join(slugDir, `screenshot-${screenshotName}.png`),
      fullPage: true,
    });

    if (saveHtml) {
      const html = await page.content();
      await fs.writeFile(path.join(slugDir, "index.html"), html, "utf8");
    }
  } finally {
    await context.close();
  }
}

async function main() {
  const browser = await chromium.launch(await resolveBrowserLaunchOptions());
  const failedPages = [];
  const total = PAGES.length;

  try {
    for (let i = 0; i < total; i++) {
      const { slug, url } = PAGES[i];
      const num = String(i + 1).padStart(2, "0");
      console.log(`🔄 [${num}/${total}] Capturing: ${slug} — ${url}`);

      const slugDir = path.join(OUTPUT_DIR, slug);
      await fs.mkdir(slugDir, { recursive: true });

      try {
        // Desktop (1920×1080) — also saves HTML
        await captureViewport(browser, {
          url,
          slug,
          viewport: { width: 1920, height: 1080 },
          contextOptions: {},
          screenshotName: "desktop",
          saveHtml: true,
        });

        // Tablet (768×1024)
        await captureViewport(browser, {
          url,
          slug,
          viewport: { width: 768, height: 1024 },
          contextOptions: {},
          screenshotName: "tablet",
          saveHtml: false,
        });

        // Mobile (375×812)
        await captureViewport(browser, {
          url,
          slug,
          viewport: { width: 375, height: 812 },
          contextOptions: { isMobile: true, hasTouch: true },
          screenshotName: "mobile",
          saveHtml: false,
        });

        console.log(`✅ [${num}/${total}] Done: ${slug}`);
      } catch (error) {
        console.error(`❌ [${num}/${total}] Failed: ${slug} — ${error.message}`);
        failedPages.push(slug);
      }
    }
  } finally {
    await browser.close();
  }

  // Final summary
  console.log("");
  if (failedPages.length === 0) {
    console.log(`✅ All ${total} pages captured successfully.`);
  } else {
    console.log(`✅ ${total - failedPages.length}/${total} pages captured.`);
    console.log(`⚠️  ${failedPages.length} pages failed: ${failedPages.join(", ")}`);
  }
  console.log(`📁 Output written to: output/`);
}

main().catch((error) => {
  console.error("Capture failed:", error);
  process.exitCode = 1;
});
