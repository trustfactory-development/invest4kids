import Link from "next/link"
import type { BlogPost } from "@/lib/blogData"

export default function BlogPostCard({ post, showExcerpt = false }: { post: BlogPost; showExcerpt?: boolean }) {
  return (
    <div className="flex w-full sm:max-w-[348px] h-full flex-col overflow-hidden rounded-[10px] border border-[#D4DADF] bg-[#FDFDFD]">
      <Link href={`/blog/${post.slug}`} className="block">
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover md:h-[220px]"
          draggable={false}
        />
      </Link>

      <div className="flex flex-1 flex-col bg-[#F8F9FA] p-[24px] md:p-[34px]">
        <h3 className="line-clamp-2 text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-text-medium md:text-[18px]">
          <Link href={`/blog/${post.slug}`} className="transition-colors duration-300 line-clamp-1 text-ellipsis">
            {post.title}
          </Link>
        </h3>

        {showExcerpt && (
          <p className="mt-[10px] line-clamp-2 font-outfit text-[16px] leading-[1.5] text-[#4B5563] md:text-[18px]">
            {post.excerpt}
          </p>
        )}

        <div className="flex flex-wrap gap-[6px] pt-[21px] pb-[16px] border-b border-[#E4E4E7]">
          <Link
            href={`/author/${post.author.slug}`}
            className="inline-flex items-center rounded-full border border-primary-light bg-[#D8ECF5] py-[6px] px-[18px] text-[12px] font-medium uppercase leading-none text-[#2E4259] transition-colors duration-300 hover:bg-[#c7e4f1]"
          >
            AUTOR: {post.author.name}
          </Link>
          <Link
            href={`/category/${post.category.slug}`}
            className="inline-flex items-center rounded-full border border-primary-light bg-[#D8ECF5] py-[6px] px-[18px] text-[12px] font-medium uppercase leading-none text-[#2E4259] transition-colors duration-300 hover:bg-[#c7e4f1]"
          >
            {post.category.name}
          </Link>
        </div>

        <div className="mt-auto pt-[16px] pr-[8px]">
          <div className="flex items-end w-full justify-between gap-[10px]">
            <div className="space-y-[8px] w-full">
              <div className="flex items-center gap-[8px] text-[18px] font-outfit leading-none text-[#6C757E]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none" className="shrink-0">
                  <path d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923Z" fill="#6C757E" />
                </svg>
                <span>Veröffentlicht {post.publishedAt}</span>
              </div>
              <div className="flex items-center justify-between gap-[8px] text-[18px] font-outfit leading-none text-[#6C757E]">
                <div className="flex items-center gap-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.003033 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9977 5.64413 13.2598 3.86489 11.9474 2.55256C10.6351 1.24022 8.85587 0.502282 7 0.5ZM7 13.3571C5.84156 13.3571 4.70911 13.0139 3.74561 12.3709C2.78211 11.728 2.02926 10.8141 1.58068 9.7427C1.1321 8.67129 1.00766 7.49351 1.22267 6.35601C1.43768 5.2185 1.98268 4.17332 2.80157 3.35443C3.62046 2.53554 4.66564 1.99053 5.80315 1.77552C6.94065 1.56052 8.11843 1.68496 9.18984 2.13354C10.2613 2.58211 11.1751 3.33497 11.8181 4.29847C12.461 5.26197 12.8043 6.39442 12.8043 7.55286C12.8025 9.09115 12.1909 10.5659 11.1027 11.6541C10.0145 12.7423 8.53829 13.3539 7 13.3557V13.3571ZM10.3294 5.249C10.3836 5.30539 10.4267 5.37234 10.4561 5.44614C10.4854 5.51995 10.5005 5.59883 10.5005 5.67857C10.5005 5.75832 10.4854 5.8372 10.4561 5.91101C10.4267 5.98481 10.3836 6.05175 10.3294 6.10814L7.41271 9.14371C7.35851 9.20005 7.29416 9.24501 7.22322 9.27577C7.15228 9.30654 7.07624 9.32253 6.99956 9.32253C6.92288 9.32253 6.84684 9.30654 6.7759 9.27577C6.70496 9.24501 6.64061 9.20005 6.58642 9.14371C6.53222 9.08738 6.4893 9.02044 6.46 8.94663C6.43071 8.87283 6.4165 8.79395 6.4165 8.71421C6.4165 8.63446 6.43071 8.55558 6.46 8.48178C6.4893 8.40797 6.53222 8.34103 6.58642 8.28471L9.50309 5.249C9.55727 5.19264 9.62162 5.14766 9.69257 5.1169C9.76352 5.08613 9.83958 5.07013 9.91629 5.07013C9.993 5.07013 10.069 5.08613 10.14 5.1169C10.211 5.14766 10.2753 5.19264 10.3294 5.249Z" fill="#6C757E" />
                  </svg>
                  <span>{post.readingTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group mb-[2px] shrink-0 text-[#6C757E] transition-colors duration-300 hover:text-[#173F88]"
                  aria-label={`${post.title} lesen`}
                >
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="20" viewBox="0 0 51 20" fill="none"><path d="M0 9.81689H49.3751" stroke="#6C757E" strokeWidth="1.25"></path><path d="M40 0.441894L49.375 9.81691L40 19.1919" stroke="#6C757E" strokeWidth="1.25"></path></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
