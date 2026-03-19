import {
  YouTubeLogo,
  SpotifyLogo,
  ApplePodcastsLogo,
  AmazonMusicLogo,
  RTLPlusLogo,
  DeezerLogo,
} from "./PlatformLogos";

const PLATFORMS = [
  { name: "YouTube", href: "https://www.youtube.com/@invest4kids_official/featured", ariaLabel: "YouTube Kanal öffnen", Logo: YouTubeLogo },
  { name: "Spotify", href: "https://open.spotify.com/show/1250D6GILRDlZFw7mYwcvt?si=b6cbfe99f68c489d", ariaLabel: "Spotify öffnen", Logo: SpotifyLogo },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/de/podcast/kinderleicht-investieren/id1801991286", ariaLabel: "Apple Podcasts öffnen", Logo: ApplePodcastsLogo },
  { name: "Amazon Music", href: "https://music.amazon.de/podcasts/10d28682-5564-4a23-ab67-f0887d171cc7/kinderleicht-investieren", ariaLabel: "Amazon Music öffnen", Logo: AmazonMusicLogo },
  { name: "RTL+", href: "https://plus.rtl.de/podcast/kinderleicht-investieren-pfwl06ndea2w9", ariaLabel: "RTL Plus öffnen", Logo: RTLPlusLogo },
  { name: "Deezer", href: "https://link.deezer.com/s/31kbpa926DsRJnP8orc6d", ariaLabel: "Deezer öffnen", Logo: DeezerLogo },
];

export default function PodcastPlatformsSection() {
  return (
    <section className="pc-section pc-platforms">
      <div className="pc-section-inner">
        <div className="pc-platforms-grid-outer">
          <div className="pc-platforms-text">
            <h2>Hör KINDERleicht Investieren auf deiner Lieblingsplattform</h2>
            <p>Abonniere den Podcast auf deiner Lieblingsplattform, um keine Folge mehr zu verpassen.</p>
          </div>
          <div className="pc-platforms-links">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-platform-btn"
                aria-label={p.ariaLabel}
              >
                <p.Logo />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
