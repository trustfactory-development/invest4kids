import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Download } from "lucide-react"
import { getPostBySlug, getPostsByCategorySlug, posts, type ContentBlock } from "@/lib/blogData"
import BlogPostCard from "@/components/BlogPostCard"
import MapVimeoSection from "@/components/sections/MapVimeoSection"
import { parseGermanDate, siteConfig } from "@/lib/site"

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className={`font-['Outfit',sans-serif] text-[16px] leading-[21px] md:text-[18px] md:leading-[24.5px] ${block.bold ? "font-[600] text-[#1E293B]" : "font-[400] text-[#4B5563]"}`}>
          {block.text}
        </p>
      )

    case "heading":
      return (
        <h2 key={index} className="pt-[8px] font-['Poppins',sans-serif] text-[16px] font-[700] leading-[1] text-[#2C3E50] md:text-[18px]">
          {block.text}
        </h2>
      )

    case "image":
      return (
        <div key={index} className="flex flex-col items-center">
          <Image src={block.src} alt={block.alt ?? ""} className={`h-auto w-full rounded-[10px] ${block.width ?? "max-w-[640px]"} object-contain`} width={1000} height={1000} draggable={false} />
          {block.caption ? <p className="mt-[10px] text-center text-[15px] italic leading-[1.5] text-[#6C757E]">{block.caption}</p> : null}
        </div>
      )

    case "list":
      return (
        <ul key={index} className="list-disc space-y-[10px] pl-[26px] font-['Outfit',sans-serif] text-[16px] leading-[21px] text-[#4B5563] md:text-[18px] md:leading-[24.5px]">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    default:
      return null
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
      description: "Der gesuchte Artikel konnte nicht gefunden werden.",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const title = `${post.title} | Invest4Kids Blog`
  const description = post.excerpt
  const publishedDate = parseGermanDate(post.publishedAt)

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/${post.slug}`,
      type: "article",
      locale: siteConfig.locale,
      images: [{ url: post.image, alt: post.title }],
      publishedTime: publishedDate?.toISOString(),
      authors: [post.author.name],
      section: post.category.name,
      tags: [post.category.name, "Invest4Kids Blog"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = getPostsByCategorySlug(post.category.slug)
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)
  const recommendedPosts =
    relatedPosts.length < 3
      ? relatedPosts
      : [...relatedPosts, ...posts.filter((item) => item.slug !== post.slug && !relatedPosts.some((related) => related.slug === item.slug))].slice(0, 3)
  const publishedDate = parseGermanDate(post.publishedAt)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: publishedDate?.toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    image: [`${siteConfig.url}${post.image}`],
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
    },
  }

  return (
    <main className="min-h-screen bg-[#EFFAFD] px-[20px] py-[26px] sm:px-[20px] md:px-[30px] md:py-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-[1100px]">
        <section className="mb-[22px] rounded-[10px] bg-white px-[22px] py-[18px] md:px-[34px] md:py-[34px]">
          <div className="flex flex-wrap items-center gap-x-[30px] gap-y-[14px] text-[#1E293B] font-outfit mb-[24px]">
            <div className="flex items-center gap-[10px] font-outfit">
              <Image src={post.author.image} alt={post.author.name} className="h-[42px] w-[42px] md:h-[50px] md:w-[50px] rounded-full object-cover" width={1000} height={1000} draggable={false} />
              <div className="text-[16px] md:text-[18px] leading-[1.25] text-[#4B5563]">
                <p className="text-text-dark pb-1">Author:</p>
                <p className="text-[#4B5563]">{post.author.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="inline-flex h-[42px] md:h-[50px] aspect-square items-center justify-center rounded-full bg-[#D8ECF5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923Z" fill="#1E293B" /></svg>
              </span>
              <div className="text-[16px] md:text-[18px] leading-[1.25] text-[#4B5563]">
                <p className="text-text-dark pb-1">Datum der Veröffentlichung:</p>
                <p>{post.publishedAt}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-[10px]">
              <span className="inline-flex md:h-[50px] aspect-square items-center justify-center rounded-full bg-[#D8ECF5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.003033 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9977 5.64413 13.2598 3.86489 11.9474 2.55256C10.6351 1.24022 8.85587 0.502282 7 0.5ZM7 13.3571C5.84156 13.3571 4.70911 13.0139 3.74561 12.3709C2.78211 11.728 2.02926 10.8141 1.58068 9.7427C1.1321 8.67129 1.00766 7.49351 1.22267 6.35601C1.43768 5.2185 1.98268 4.17332 2.80157 3.35443C3.62046 2.53554 4.66564 1.99053 5.80315 1.77552C6.94065 1.56052 8.11843 1.68496 9.18984 2.13354C10.2613 2.58211 11.1751 3.33497 11.8181 4.29847C12.461 5.26197 12.8043 6.39442 12.8043 7.55286C12.8025 9.09115 12.1909 10.5659 11.1027 11.6541C10.0145 12.7423 8.53829 13.3539 7 13.3557V13.3571ZM10.3294 5.249C10.3836 5.30539 10.4267 5.37234 10.4561 5.44614C10.4854 5.51995 10.5005 5.59883 10.5005 5.67857C10.5005 5.75832 10.4854 5.8372 10.4561 5.91101C10.4267 5.98481 10.3836 6.05175 10.3294 6.10814L7.41271 9.14371C7.35851 9.20005 7.29416 9.24501 7.22322 9.27577C7.15228 9.30654 7.07624 9.32253 6.99956 9.32253C6.92288 9.32253 6.84684 9.30654 6.7759 9.27577C6.70496 9.24501 6.64061 9.20005 6.58642 9.14371C6.53222 9.08738 6.4893 9.02044 6.46 8.94663C6.43071 8.87283 6.4165 8.79395 6.4165 8.71421C6.4165 8.63446 6.43071 8.55558 6.46 8.48178C6.4893 8.40797 6.53222 8.34103 6.58642 8.28471L9.50309 5.249C9.55727 5.19264 9.62162 5.14766 9.69257 5.1169C9.76352 5.08613 9.83958 5.07013 9.91629 5.07013C9.993 5.07013 10.069 5.08613 10.14 5.1169C10.211 5.14766 10.2753 5.19264 10.3294 5.249ZM4.66667 0.107143C4.66667 -0.0535714 4.72812 -0.207483 4.83759 -0.321683C4.94705 -0.435883 5.09402 -0.5 5.24762 -0.5H8.75238C8.90598 -0.5 9.05295 -0.435883 9.16241 -0.321683C9.27188 -0.207483 9.33333 -0.0535714 9.33333 0.107143C9.33333 0.267857 9.27188 0.421768 9.16241 0.535968C9.05295 0.650168 8.90598 0.714286 8.75238 0.714286H5.24762C5.09402 0.714286 4.94705 0.650168 4.83759 0.535968C4.72812 0.421768 4.66667 0.267857 4.66667 0.107143Z" fill="#1E293B" /></svg>
              </span>
              <div className="text-[16px] md:text-[18px] leading-[1.25] text-[#4B5563]">
                <p className="text-text-dark pb-1">Lesezeit:</p>
                <p>{post.readingTime}</p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#E4E4E7]" />

          <div className="mt-[24px] hidden md:flex flex-wrap items-center justify-between gap-[14px]">
            <Link
              href={`/category/${post.category.slug}`}
              className="inline-flex items-center rounded-full border border-[#84B7CA] bg-[#D8ECF5] px-[18px] py-[6px] text-[12px] font-[500] uppercase leading-none text-[#1E293B] transition-colors duration-300 hover:bg-[#84B7CA]"
            >
              {post.category.name}
            </Link>
            <div className="flex items-center gap-[16px]">
              <span className="text-[18px] font-outfit text-[#1E293B]">Teile den Artikel über:</span>
              <div className="flex items-center gap-[6px]">
                <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 320 512" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V142.5c0-27.2 7.5-45.8 46.8-45.8H304V0h-86.3C142 0 100 49 100 127.8v73.7H32v97.8h68z" /></svg>
                </div>
                <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 93.97 0 111.3 61.9 111.3 142.3V448z" /></svg>
                </div>
                <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 496 512" fill="currentColor"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                </div>
                <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-[28px] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-[32px]">
          <article className="rounded-[10px] bg-white px-[22px] py-[22px] md:px-[34px] md:py-[34px] border border-[#D4DADF] overflow-hidden">
            <div className="flex md:flex-wrap items-center gap-[6px] text-[10px] md:text-[12px] font-outfit text-[#1E293B]">
              <Link href="/" className="transition-colors hover:text-[#133A7D]  line-clamp-1 truncate">
                Startseite
              </Link>
              <span>&gt;</span>
              <Link href={`/category/${post.category.slug}`} className=" line-clamp-1 truncate transition-colors hover:text-[#133A7D]">
                {post.category.name}
              </Link>
              <span>&gt;</span>
              <p className="text-[#6C757E] truncate">{post.title}</p>
            </div>

            <div className="mt-[18px] border-b border-[#E4E4E7]" />

            <h1 className="mt-[16px] font-[600] leading-[1.2] text-[22px] tracking-[-0.02em] text-text-medium sm:text-[28px]">{post.title}</h1>

            <div className="mt-[28px] space-y-[15px] md:space-y-[25px]">
              {(post.content ?? []).map((block, index) => renderBlock(block, index))}
              
              <div className="pt-[8px]">
                <a
                  href={'/download'}
                  download
                  className="inline-flex h-[40px] md:h-[52px] items-center justify-center gap-[8px] rounded-full bg-[#133A7D] px-[22px] text-[16px] font-medium md:font-[600] text-white transition-all duration-300 hover:bg-[#0E2C5E] hover:shadow-[0_12px_24px_rgba(19,58,125,0.22)]"
                >
                  <Download size={18} strokeWidth={2.5} />
                  PDF herunterladen
                </a>
              </div>  
            </div>

            <div className="hidden md:block mt-[36px] border-t border-[#E4E4E7] pt-[24px]">
              <h3 className="text-[18px] font-[600] text-[#1E293B]">Teile den Artikel über:</h3>
              <div className="mt-[14px] flex items-center gap-[10px]">
                <div className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border border-[#E4E4E7] bg-white transition-colors hover:border-[#84B7CA]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 320 512" fill="#1E293B"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V142.5c0-27.2 7.5-45.8 46.8-45.8H304V0h-86.3C142 0 100 49 100 127.8v73.7H32v97.8h68z" /></svg>
                </div>
                <div className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border border-[#E4E4E7] bg-white transition-colors hover:border-[#84B7CA]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="#1E293B"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 93.97 0 111.3 61.9 111.3 142.3V448z" /></svg>
                </div>
                <div className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border border-[#E4E4E7] bg-white transition-colors hover:border-[#84B7CA]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 496 512" fill="#1E293B"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                </div>
                <div className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border border-[#E4E4E7] bg-white transition-colors hover:border-[#84B7CA]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="#1E293B"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                </div>
              </div>
            </div>
          </article>

          <aside>
            <div className="rounded-[10px] bg-white px-[24px] py-[24px] lg:sticky lg:top-[150px]  border border-[#D4DADF]">
              <h3 className="text-[20px] font-[600] leading-none text-[#1E293B]">Other:</h3>

              <div className="my-[18px] h-px w-full bg-[#E4E4E7]" />

              <ul className="space-y-[16px]">
                {relatedPosts.map((item) => (
                  <li key={item.slug} className="flex items-start gap-[12px]">
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#4B5563]" />
                    <Link href={`/blog/${item.slug}`} className="text-[18px] font-outfit leading-[1.45] text-[#4B5563] underline decoration-[#1E293B]/30 underline-offset-[3px] transition-colors duration-300 hover:decoration-[#133A7D]/50">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="md:hidden mb-[22px] rounded-[10px] bg-white px-[22px] py-[18px] md:px-[34px] md:py-[34px]">
            <div className="flex flex-wrap items-center gap-x-[30px] gap-y-[14px] text-[#1E293B] font-outfit mb-[24px]">
              <div className="flex items-center gap-[10px] font-outfit">
                <Image src={post.author.image} alt={post.author.name} className="h-[42px] w-[42px] md:h-[50px] md:w-[50px] rounded-full object-cover" width={1000} height={1000} draggable={false} />
                <div className="text-[16px] md:text-[18px] leading-[1.25] text-[#4B5563]">
                  <p className="text-text-dark pb-1">Author:</p>
                  <p className="text-[#6C757E]">{post.author.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <span className="inline-flex h-[42px] md:h-[50px] aspect-square items-center justify-center rounded-full bg-[#D8ECF5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923Z" fill="#1E293B" /></svg>
                </span>
                <div className="text-[16px] md:text-[18px] leading-[1.25] text-[#6C757E]">
                  <p className="text-text-dark pb-1">Datum der Veröffentlichung:</p>
                  <p>{post.publishedAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <span className="inline-flex h-[42px] aspect-square items-center justify-center rounded-full bg-[#D8ECF5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.003033 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9977 5.64413 13.2598 3.86489 11.9474 2.55256C10.6351 1.24022 8.85587 0.502282 7 0.5ZM7 13.3571C5.84156 13.3571 4.70911 13.0139 3.74561 12.3709C2.78211 11.728 2.02926 10.8141 1.58068 9.7427C1.1321 8.67129 1.00766 7.49351 1.22267 6.35601C1.43768 5.2185 1.98268 4.17332 2.80157 3.35443C3.62046 2.53554 4.66564 1.99053 5.80315 1.77552C6.94065 1.56052 8.11843 1.68496 9.18984 2.13354C10.2613 2.58211 11.1751 3.33497 11.8181 4.29847C12.461 5.26197 12.8043 6.39442 12.8043 7.55286C12.8025 9.09115 12.1909 10.5659 11.1027 11.6541C10.0145 12.7423 8.53829 13.3539 7 13.3557V13.3571ZM10.3294 5.249C10.3836 5.30539 10.4267 5.37234 10.4561 5.44614C10.4854 5.51995 10.5005 5.59883 10.5005 5.67857C10.5005 5.75832 10.4854 5.8372 10.4561 5.91101C10.4267 5.98481 10.3836 6.05175 10.3294 6.10814L7.41271 9.14371C7.35851 9.20005 7.29416 9.24501 7.22322 9.27577C7.15228 9.30654 7.07624 9.32253 6.99956 9.32253C6.92288 9.32253 6.84684 9.30654 6.7759 9.27577C6.70496 9.24501 6.64061 9.20005 6.58642 9.14371C6.53222 9.08738 6.4893 9.02044 6.46 8.94663C6.43071 8.87283 6.4165 8.79395 6.4165 8.71421C6.4165 8.63446 6.43071 8.55558 6.46 8.48178C6.4893 8.40797 6.53222 8.34103 6.58642 8.28471L9.50309 5.249C9.55727 5.19264 9.62162 5.14766 9.69257 5.1169C9.76352 5.08613 9.83958 5.07013 9.91629 5.07013C9.993 5.07013 10.069 5.08613 10.14 5.1169C10.211 5.14766 10.2753 5.19264 10.3294 5.249ZM4.66667 0.107143C4.66667 -0.0535714 4.72812 -0.207483 4.83759 -0.321683C4.94705 -0.435883 5.09402 -0.5 5.24762 -0.5H8.75238C8.90598 -0.5 9.05295 -0.435883 9.16241 -0.321683C9.27188 -0.207483 9.33333 -0.0535714 9.33333 0.107143C9.33333 0.267857 9.27188 0.421768 9.16241 0.535968C9.05295 0.650168 8.90598 0.714286 8.75238 0.714286H5.24762C5.09402 0.714286 4.94705 0.650168 4.83759 0.535968C4.72812 0.421768 4.66667 0.267857 4.66667 0.107143Z" fill="#1E293B" /></svg>
                </span>
                <div className="text-[16px] md:text-[18px] leading-[1.25] text-[#6C757E]">
                  <p className="text-text-dark pb-1">Lesezeit:</p>
                  <p>{post.readingTime}</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-[#E4E4E7]" />

            <div className="mt-[24px] flex flex-col gap-[14px]">
              <Link
                href={`/category/${post.category.slug}`}
                className=" text-center w-fit rounded-full border border-[#84B7CA] bg-[#D8ECF5] px-[18px] py-[6px] text-[10px] md:text-[12px] font-[500] uppercase leading-none text-[#1E293B] transition-colors duration-300 hover:bg-[#84B7CA]"
              >
                {post.category.name}
              </Link>
              <div className="flex gap-[16px] flex-col">
                <span className="text-[16px] md:text-[18px] font-outfit text-[#1E293B]">Teile den Artikel über:</span>
                <div className="flex items-center gap-[6px]">
                  <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 320 512" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V142.5c0-27.2 7.5-45.8 46.8-45.8H304V0h-86.3C142 0 100 49 100 127.8v73.7H32v97.8h68z" /></svg>
                  </div>
                  <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 93.97 0 111.3 61.9 111.3 142.3V448z" /></svg>
                  </div>
                  <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 496 512" fill="currentColor"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                  </div>
                  <div className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#1E293B]/10 bg-white text-[#4B5563] transition-colors hover:border-[#84B7CA] hover:bg-[#84B7CA] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
      <section className="mt-[34px] -mx-[16px] bg-[#FFFAEE] px-[20px] py-[50px] sm:-mx-[20px] sm:px-[20px] md:-mx-[30px] md:px-[30px] md:py-[100px]">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-center px-5 md:px-0 text-[28px] font-[600] leading-[1.2] text-text-medium md:text-[44px]">Das könnte für dich auch interessant sein</h2>

          <div className="mt-[20px] grid gap-[24px] md:grid-cols-3">
            {recommendedPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} showExcerpt />
            ))}
          </div>
        </div>
      </section>

      <MapVimeoSection />
    </main>
  )
}
