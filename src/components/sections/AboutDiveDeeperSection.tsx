import { Headphones } from "lucide-react";

export function AboutDiveDeeperSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(103deg,#F2FAFA_-2%,#FFFAEE_100%)] px-5 py-12.5 md:px-7.5 lg:py-37.5">
      <div className="mx-auto w-full max-w-275">
        <header className="text-center">
          <h2 className="font-poppins text-[27px] leading-normal font-extrabold text-text-medium md:text-[34px] md:leading-tight">
            Dive even deeper?
          </h2>
          <p className="mx-auto mt-4 max-w-170 font-poppins text-[18px] leading-normal font-medium text-[#4B5563] md:text-[20px]">
            In this podcast episode, you will learn more about our mission.
          </p>
        </header>

        <div className="mt-8.5 rounded-[20px] bg-[#FFFFFFB8] p-6 shadow-[2px_8px_20px_rgba(0,0,0,0.04)] md:p-8.5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5.75">
            <div className="flex w-full flex-col gap-4 lg:w-135 lg:gap-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9.25 w-9.25 shrink-0 items-center justify-center rounded-[10px] bg-[#84B7CA4D] lg:h-10.25 lg:w-10.25">
                  <Headphones
                    className="h-4.75 w-4.75 text-primary"
                    strokeWidth={1.9}
                  />
                </div>
                <div>
                  <p className="font-outfit text-[16px] leading-none font-medium text-text-medium lg:text-[18px]">
                    KINDERleicht Investing
                  </p>
                  <p className="mt-2 font-outfit text-[12px] leading-none font-normal text-[#4B5563]">
                    Podcast
                  </p>
                </div>
              </div>

              <h3 className="text-left font-poppins text-[16px] leading-normal font-bold text-text-medium lg:text-[18px] lg:leading-[1.4]">
                Episode 58: &quot;Our mission at Invest4Kids: Financial security
                for your child&quot;
              </h3>

              <div className="hidden max-w-134 font-outfit text-[18px] leading-5.75 font-light text-[#4B5563] lg:block">
                <p>
                  Why did we establish Invest4Kids? And why is it more important
                  than ever for parents to take responsibility for their
                  children&apos;s financial future?
                </p>
                <p className="mt-6">
                  In this special episode, Laila and Bogdan talk openly about
                  the story behind Invest4Kids and why we launched a specialized
                  consulting service that finally gives parents real guidance.
                </p>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-[20px] lg:w-[450px]">
              <div className="aspect-video overflow-hidden rounded-[17px]">
                <iframe
                  src="https://www.youtube.com/embed/JIjQb4xj0bg" 
                  nitro-lazy-src="data:text/html;base64,PGJvZHkgc3R5bGU9J3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JhY2tncm91bmQ6dXJsKGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpL0pJalFiNHhqMGJnLzAuanBnKSBjZW50ZXIvMTAwJSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjsnPjxzdHlsZT5ib2R5ey0tYnRuQmFja2dyb3VuZDpyZ2JhKDAsMCwwLC42NSk7fWJvZHk6aG92ZXJ7LS1idG5CYWNrZ3JvdW5kOnJnYmEoMCwwLDApO2N1cnNvcjpwb2ludGVyO31idXR0b24jcGxheUJ0bntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y2xlYXI6Ym90aDt3aWR0aDoxMDBweDtoZWlnaHQ6NzBweDtmb250LXNpemU6NDVweDtiYWNrZ3JvdW5kOnZhcigtLWJ0bkJhY2tncm91bmQpO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoxOHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi01MHB4O21hcmdpbi10b3A6LTM1cHg7Ym9yZGVyOm5vbmU7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO291dGxpbmU6bm9uZTt9YnV0dG9uI3BsYXlCdG46Zm9jdXN7b3V0bGluZToycHggc29saWQgIzAwN2JmZjtvdXRsaW5lLW9mZnNldDoycHg7fSNwbGF5QXJyb3d7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItdG9wOjE1cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxNXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjI1cHggc29saWQgI2ZmZjt9PC9zdHlsZT48YnV0dG9uIGlkPSdwbGF5QnRuJz48ZGl2IGlkPSdwbGF5QXJyb3cnPjwvZGl2PjwvYnV0dG9uPjxzY3JpcHQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7d2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7YWN0aW9uOiAncGxheUJ0bkNsaWNrZWQnfSwgJyonKTt9KTs8L3NjcmlwdD48L2JvZHk+"                  title="Episode 58: Our mission at Invest4Kids"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <div className="w-full font-outfit text-[16px] leading-5.25 font-light text-[#4B5563] lg:hidden">
              <p>
                Why did we establish Invest4Kids? And why is it more important
                than ever for parents to take responsibility for their
                children&apos;s financial future?
              </p>
              <p className="mt-5">
                In this special episode, Laila and Bogdan talk openly about the
                story behind Invest4Kids and why we launched a specialized
                consulting service that finally gives parents real guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
