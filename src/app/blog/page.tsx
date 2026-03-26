"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import { posts } from "@/lib/blogData"
import BlogPostCard from "@/components/BlogPostCard"
import MapVimeoSection from "@/components/sections/MapVimeoSection"

export default function BlogPage() {
  const [query, setQuery] = useState("")

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return posts

    return posts.filter((post) =>
      [post.title, post.excerpt, post.category.name, post.author.name].join(" ").toLowerCase().includes(normalized)
    )
  }, [query])

  const featuredPost = filteredPosts[0]
  const secondaryPosts = filteredPosts.slice(1, 4)
  const strategyPosts = filteredPosts.filter((post) => post.category.slug === "investment-strategien")
  const newsPosts = filteredPosts.filter((post) => post.category.slug === "neuigkeiten")

  return (
    <main className="min-h-screen bg-[#EAF5FA]">
      <section className="px-[16px] pt-[50px] md:pt-[100px]">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-[1100px] rounded-[10px] bg-white/40">
            <div className="inline-flex items-center gap-[8px] rounded-full border border-[#E2B448] bg-bg-cream px-[16px] py-[6px] text-[10px] md:text-[12px] leading-none text-[#4B5563]">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M10.7653 2.73468L9.26531 1.23468C9.23049 1.19981 9.18913 1.17215 9.1436 1.15328C9.09808 1.13441 9.04928 1.12469 9 1.12469C8.95072 1.12469 8.90192 1.13441 8.8564 1.15328C8.81087 1.17215 8.76951 1.19981 8.73469 1.23468L4.23469 5.73468C4.19987 5.76953 4.17227 5.8109 4.15345 5.85642C4.13463 5.90194 4.12496 5.95073 4.125 5.99999V7.49999C4.125 7.59945 4.16451 7.69483 4.23484 7.76515C4.30516 7.83548 4.40054 7.87499 4.5 7.87499H6C6.04926 7.87503 6.09805 7.86536 6.14357 7.84654C6.18909 7.82772 6.23046 7.80012 6.26531 7.7653L10.7653 3.2653C10.8002 3.23048 10.8278 3.18912 10.8467 3.14359C10.8656 3.09807 10.8753 3.04927 10.8753 2.99999C10.8753 2.95071 10.8656 2.90191 10.8467 2.85639C10.8278 2.81086 10.8002 2.7695 10.7653 2.73468ZM5.84484 7.12499H4.875V6.15515L7.875 3.15515L8.84484 4.12499L5.84484 7.12499ZM9.375 3.59483L8.40516 2.62499L9 2.03015L9.96984 2.99999L9.375 3.59483ZM10.5 5.99999V9.74999C10.5 9.9489 10.421 10.1397 10.2803 10.2803C10.1397 10.421 9.94891 10.5 9.75 10.5H2.25C2.05109 10.5 1.86032 10.421 1.71967 10.2803C1.57902 10.1397 1.5 9.9489 1.5 9.74999V2.24999C1.5 2.05108 1.57902 1.86031 1.71967 1.71966C1.86032 1.57901 2.05109 1.49999 2.25 1.49999H6C6.09946 1.49999 6.19484 1.5395 6.26517 1.60982C6.33549 1.68015 6.375 1.77553 6.375 1.87499C6.375 1.97445 6.33549 2.06983 6.26517 2.14015C6.19484 2.21048 6.09946 2.24999 6 2.24999H2.25V9.74999H9.75V5.99999C9.75 5.90053 9.78951 5.80515 9.85983 5.73483C9.93016 5.6645 10.0255 5.62499 10.125 5.62499C10.2245 5.62499 10.3198 5.6645 10.3902 5.73483C10.4605 5.80515 10.5 5.90053 10.5 5.99999Z"
                  fill="#4B5563"
                />
              </svg>
              <span>Invest4Kids Blog</span>
            </div>

            <h1 className="mt-[16px] md:mt-[12px] w-full px-1 text-[28px] font-[600] leading-[1.25] tracking-[-0.01em] text-[#2E4259] sm:text-[28px] md:text-[34px]">
              Deutschlands führender Investment-Blog für Eltern, die die finanzielle Zukunft ihrer Kinder selbst in die Hand nehmen wollen.
            </h1>

            <p className="mt-[16px] w-full font-outfit font-light px-1 text-[16px] leading-[1.3] text-[#4B5563] md:text-[18px]">
              <strong className="font-semibold">Die finanzielle Zukunft deines Kindes</strong> ist kein Thema, das man auf später verschieben sollte. Im Invest4Kids Blog erfährst du, wie du mit
              cleveren Strategien, flexiblen Sparplänen und dem richtigen Wissen langfristig vorsorgst – von Geldanlage und ETFs über Schenkungen bis
              zu staatlichen Förderungen wie Kinderzuschlag & Co. Hier findest du alle passenden Antworten.
            </p>

            <div className="mt-[18px]">
              <label className="relative block">
                <span className="pointer-events-none absolute left-[18px] top-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0">
                    <path
                      d="M21.7523 20.5563L16.4622 15.2672C17.9955 13.4264 18.76 11.0653 18.5969 8.67513C18.4337 6.28495 17.3553 4.0497 15.586 2.43436C13.8168 0.819025 11.4928 -0.0520274 9.09772 0.00240578C6.7026 0.0568389 4.42066 1.03257 2.72661 2.72661C1.03257 4.42066 0.0568389 6.7026 0.00240578 9.09772C-0.0520274 11.4928 0.819025 13.8168 2.43436 15.586C4.0497 17.3553 6.28495 18.4337 8.67513 18.5969C11.0653 18.76 13.4264 17.9955 15.2672 16.4622L20.5563 21.7523C20.6348 21.8308 20.728 21.8931 20.8307 21.9356C20.9333 21.9781 21.0432 22 21.1543 22C21.2654 22 21.3753 21.9781 21.4779 21.9356C21.5805 21.8931 21.6738 21.8308 21.7523 21.7523C21.8308 21.6738 21.8931 21.5805 21.9356 21.4779C21.9781 21.3753 22 21.2654 22 21.1543C22 21.0432 21.9781 20.9333 21.9356 20.8307C21.8931 20.728 21.8308 20.6348 21.7523 20.5563ZM1.71383 9.32097C1.71383 7.81642 2.15998 6.34565 2.99586 5.09467C3.83174 3.84368 5.01982 2.86865 6.40984 2.29289C7.79986 1.71712 9.3294 1.56647 10.805 1.86C12.2807 2.15352 13.6361 2.87803 14.7 3.94191C15.7639 5.00578 16.4884 6.36125 16.7819 7.83689C17.0755 9.31253 16.9248 10.8421 16.349 12.2321C15.7733 13.6221 14.7983 14.8102 13.5473 15.6461C12.2963 16.482 10.8255 16.9281 9.32097 16.9281C7.30411 16.9259 5.37051 16.1237 3.94438 14.6976C2.51825 13.2714 1.71607 11.3378 1.71383 9.32097Z"
                      fill="#4B5563"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Artikel suchen..."
                  className="w-full rounded-full border border-[#D5DBE0] bg-white px-[60px] md:px-[80px] py-[15px] text-[16px] text-[#2E4259] outline-none transition-colors placeholder:text-[#6B7280] focus:border-[#84B7CA] md:text-lg"
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      {featuredPost ? (
        <>
          <section className="px-[16px] pb-[32px] sm:px-[20px] md:px-[28px] md:pb-[40px] pt-[34px]">
            <div className="mx-auto grid max-w-[1100px] gap-[16px] md:gap-[25px] md:grid-cols-[1fr_1fr]">
              <div className="overflow-hidden rounded-[10px] border border-[#D4DADF] bg-[#FDFDFD]">
                <Link href={`/blog/${featuredPost.slug}`} className="block">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full object-cover" draggable={false} />
                </Link>

                <div className="bg-[#F8F9FA] p-[16px] md:p-[34px]">
                  <h2 className="text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-[#2E4259] md:text-[18px]">
                    <Link href={`/blog/${featuredPost.slug}`} className="transition-colors duration-300 font-bold hover:text-[#173F88] line-clamp-1 truncate">
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="mt-[8px] line-clamp-2 text-[16px] leading-[1.5] text-[#4B5563] md:text-[18px]">{featuredPost.excerpt}</p>

                  <div className="mt-[12px] font-outfit flex flex-wrap gap-x-[6px] gap-y-[8px] border-b border-[#D7DDE1] pb-[12px]">
                    <Link
                      href={`/author/${featuredPost.author.slug}`}
                      className="inline-flex items-center rounded-full border border-[#84B7CA] bg-[#D8ECF5] px-[18px] py-1.5 text-[12px] font-[500] uppercase leading-none text-[#2E4259] transition-colors duration-300 hover:bg-[#c7e4f1]"
                    >
                      AUTOR: {featuredPost.author.name}
                    </Link>
                    <Link
                      href={`/category/${featuredPost.category.slug}`}
                      className="inline-flex items-center rounded-full border border-[#84B7CA] bg-[#D8ECF5] px-[18px] py-1.5 text-[12px] font-[500] uppercase leading-none text-[#2E4259] transition-colors duration-300 hover:bg-[#c7e4f1]"
                    >
                      {featuredPost.category.name}
                    </Link>
                  </div>

                  <div className="flex flex-wrap font-outfit items-end gap-x-[10px] gap-y-[5px] pt-[10px] md:flex-nowrap">
                    <div className="flex items-center gap-[8px] text-[16px] leading-none text-[#6C757E] md:text-[18px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none" className="shrink-0">
                        <path d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923Z" fill="#6C757E" />
                      </svg>
                      <span>Veröffentlicht {featuredPost.publishedAt}</span>
                    </div>
                    <div className="hidden min-h-[20px] w-px bg-[#D8DDE3] md:block" />
                    <div className="w-full md:w-auto flex justify-between items-center">
                      <div className="flex items-center gap-[8px] text-[16px] leading-none text-[#6C757E] md:flex-1 md:text-[18px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                          <path d="M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.003033 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9977 5.64413 13.2598 3.86489 11.9474 2.55256C10.6351 1.24022 8.85587 0.502282 7 0.5ZM7 13.3571C5.84156 13.3571 4.70911 13.0139 3.74561 12.3709C2.78211 11.728 2.02926 10.8141 1.58068 9.7427C1.1321 8.67129 1.00766 7.49351 1.22267 6.35601C1.43768 5.2185 1.98268 4.17332 2.80157 3.35443C3.62046 2.53554 4.66564 1.99053 5.80315 1.77552C6.94065 1.56052 8.11843 1.68496 9.18984 2.13354C10.2613 2.58211 11.1751 3.33497 11.8181 4.29847C12.461 5.26197 12.8043 6.39442 12.8043 7.55286C12.8025 9.09115 12.1909 10.5659 11.1027 11.6541C10.0145 12.7423 8.53829 13.3539 7 13.3557V13.3571ZM10.3294 5.249C10.3836 5.30539 10.4267 5.37234 10.4561 5.44614C10.4854 5.51995 10.5005 5.59883 10.5005 5.67857C10.5005 5.75832 10.4854 5.8372 10.4561 5.91101C10.4267 5.98481 10.3836 6.05175 10.3294 6.10814L7.41271 9.14371C7.35851 9.20005 7.29416 9.24501 7.22322 9.27577C7.15228 9.30654 7.07624 9.32253 6.99956 9.32253C6.92288 9.32253 6.84684 9.30654 6.7759 9.27577C6.70496 9.24501 6.64061 9.20005 6.58642 9.14371C6.53222 9.08738 6.4893 9.02044 6.46 8.94663C6.43071 8.87283 6.4165 8.79395 6.4165 8.71421C6.4165 8.63446 6.43071 8.55558 6.46 8.48178C6.4893 8.40797 6.53222 8.34103 6.58642 8.28471L9.50309 5.249C9.55727 5.19264 9.62162 5.14766 9.69257 5.1169C9.76352 5.08613 9.83958 5.07013 9.91629 5.07013C9.993 5.07013 10.069 5.08613 10.14 5.1169C10.211 5.14766 10.2753 5.19264 10.3294 5.249Z" fill="#6C757E" />
                        </svg>
                        <span>{featuredPost.readingTime}</span>
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="group ml-auto inline-flex items-center text-[15px] font-[600] text-[#6C757E] transition-colors duration-300 hover:text-[#173F88]"
                      >
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-[4px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="20" viewBox="0 0 51 20" fill="none"><path d="M0 9.81689H49.3751" stroke="#6C757E" strokeWidth="1.25"></path><path d="M40 0.441894L49.375 9.81691L40 19.1919" stroke="#6C757E" strokeWidth="1.25"></path></svg>
                          </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid content-start gap-[12px]">
                {secondaryPosts.map((post) => (
                  <div key={post.slug} className="rounded-[10px] border border-[#D4DADF] bg-[#F8F9FA] p-[14px] md:p-[34px]">
                    <div>
                      <h3 className="text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-[#2E4259] md:text-[17px]">
                        <Link href={`/blog/${post.slug}`} className="transition-colors duration-300 hover:text-[#173F88]">
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap font-outfit gap-x-[6px] gap-y-[8px] border-b border-[#D7DDE1] pb-[10px] md:pt-[21px] md:pb-[16px]">
                        <Link
                          href={`/author/${post.author.slug}`}
                          className="inline-flex h-[31px] items-center rounded-full border border-[#84B7CA] bg-[#D8ECF5] px-[18px] text-[12px] font-[500] uppercase leading-none text-[#2E4259] transition-colors duration-300 hover:bg-[#c7e4f1]"
                        >
                          AUTOR: {post.author.name}
                        </Link>
                        <Link
                          href={`/category/${post.category.slug}`}
                          className="inline-flex h-[31px] items-center rounded-full border border-[#84B7CA] bg-[#D8ECF5] px-[18px] text-[12px] font-[500] uppercase leading-none text-[#2E4259] transition-colors duration-300 hover:bg-[#c7e4f1]"
                        >
                          {post.category.name}
                        </Link>
                      </div>

                      <div className="flex flex-wrap items-end gap-x-[10px] gap-y-[5px] pt-[10px] md:pt-[16px] md:flex-nowrap font-outfit ">
                        <div className="flex items-center gap-[8px] text-[16px] leading-none text-[#6C757E] md:text-[18px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none" className="shrink-0">
                            <path d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923Z" fill="#6C757E" />
                          </svg>
                          <span>Veröffentlicht {post.publishedAt}</span>
                        </div>
                        <div className="hidden min-h-[20px] w-px bg-[#D8DDE3] md:block" />
                        <div className="w-full md:w-auto flex justify-between items-center">
                          <div className="flex items-center gap-[8px] text-[16px] leading-none text-[#6C757E] md:flex-1 md:text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                              <path d="M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.003033 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9977 5.64413 13.2598 3.86489 11.9474 2.55256C10.6351 1.24022 8.85587 0.502282 7 0.5ZM7 13.3571C5.84156 13.3571 4.70911 13.0139 3.74561 12.3709C2.78211 11.728 2.02926 10.8141 1.58068 9.7427C1.1321 8.67129 1.00766 7.49351 1.22267 6.35601C1.43768 5.2185 1.98268 4.17332 2.80157 3.35443C3.62046 2.53554 4.66564 1.99053 5.80315 1.77552C6.94065 1.56052 8.11843 1.68496 9.18984 2.13354C10.2613 2.58211 11.1751 3.33497 11.8181 4.29847C12.461 5.26197 12.8043 6.39442 12.8043 7.55286C12.8025 9.09115 12.1909 10.5659 11.1027 11.6541C10.0145 12.7423 8.53829 13.3539 7 13.3557V13.3571ZM10.3294 5.249C10.3836 5.30539 10.4267 5.37234 10.4561 5.44614C10.4854 5.51995 10.5005 5.59883 10.5005 5.67857C10.5005 5.75832 10.4854 5.8372 10.4561 5.91101C10.4267 5.98481 10.3836 6.05175 10.3294 6.10814L7.41271 9.14371C7.35851 9.20005 7.29416 9.24501 7.22322 9.27577C7.15228 9.30654 7.07624 9.32253 6.99956 9.32253C6.92288 9.32253 6.84684 9.30654 6.7759 9.27577C6.70496 9.24501 6.64061 9.20005 6.58642 9.14371C6.53222 9.08738 6.4893 9.02044 6.46 8.94663C6.43071 8.87283 6.4165 8.79395 6.4165 8.71421C6.4165 8.63446 6.43071 8.55558 6.46 8.48178C6.4893 8.40797 6.53222 8.34103 6.58642 8.28471L9.50309 5.249C9.55727 5.19264 9.62162 5.14766 9.69257 5.1169C9.76352 5.08613 9.83958 5.07013 9.91629 5.07013C9.993 5.07013 10.069 5.08613 10.14 5.1169C10.211 5.14766 10.2753 5.19264 10.3294 5.249Z" fill="#6C757E" />
                            </svg>
                            <span>{post.readingTime}</span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="group ml-auto inline-flex items-center text-[15px] font-[600] text-[#6C757E] transition-colors duration-300 hover:text-[#173F88]"
                          >
                              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="20" viewBox="0 0 51 20" fill="none"><path d="M0 9.81689H49.3751" stroke="#6C757E" strokeWidth="1.25"></path><path d="M40 0.441894L49.375 9.81691L40 19.1919" stroke="#6C757E" strokeWidth="1.25"></path></svg>
                              </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-[16px] pb-[34px] sm:px-[20px] md:px-[28px] md:pb-[46px] pt-[100px]">
            <div className="mx-auto max-w-[1120px]">
              <h2 className="mb-[18px] text-center text-[28px] font-[600] leading-[1.2] tracking-[-0.02em] text-[#2E4259] md:mb-[50px] md:text-[34px]">Investment-Strategien</h2>

              {strategyPosts.length > 0 ? (
                <div className="grid gap-[24px] md:grid-cols-3 justify-center">
                  {strategyPosts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="rounded-[10px] border border-[#D4DADF] bg-white px-[24px] py-[26px] text-center text-[17px] text-[#5E6B7A]">
                  Keine Artikel in dieser Kategorie gefunden.
                </div>
              )}
            </div>
          </section>

          <section className="px-[16px] pb-[44px] sm:px-[20px] md:px-[28px] md:pb-[56px]">
            <div className="mx-auto max-w-[1120px]">
              <h2 className="mb-[18px] text-center text-[28px] font-[600] leading-[1.2] tracking-[-0.02em] text-[#2E4259] md:mb-[22px] md:text-[30px]">Neuigkeiten:</h2>

              {newsPosts.length > 0 ? (
                <div className="grid gap-[24px] md:grid-cols-3">
                  {newsPosts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="rounded-[10px] border border-[#D4DADF] bg-white px-[24px] py-[26px] text-center text-[17px] text-[#5E6B7A]">
                  Keine Artikel in dieser Kategorie gefunden.
                </div>
              )}
            </div>
          </section>
        </>
      ) : (
        <section className="px-[16px] pb-[44px] sm:px-[20px] md:px-[28px] md:pb-[56px]">
          <div className="mx-auto max-w-[1120px] rounded-[10px] border border-[#D4DADF] bg-white px-[24px] py-[34px] text-center">
            <h2 className="text-[24px] font-[600] leading-[1.2] text-[#2E4259]">Keine Artikel gefunden</h2>
            <p className="mt-[10px] text-[14px] leading-[1.5] text-[#5E6B7A]">Versuche einen anderen Suchbegriff für Titel, Auszug, Kategorie oder Autor.</p>
          </div>
        </section>
      )}

      <MapVimeoSection />
    </main>
  )
}
