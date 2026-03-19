"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const fillRef = useRef<HTMLDivElement | null>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current || !fillRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(fillRef.current, { height: 0 });

            stepRefs.current.forEach((step) => {
                if (!step) return;

                gsap.set(step, {
                    backgroundColor: "#ffffff",
                    borderColor: "#173F88",
                    color: "#173F88",
                });
            });

            gsap.to(fillRef.current, {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 32%",
                    end: "bottom 82%",
                    scrub: true,
                },
            });

            triggerRefs.current.forEach((trigger, index) => {
                const step = stepRefs.current[index];
                if (!trigger || !step) return;

                ScrollTrigger.create({
                    trigger,
                    start: "top 58%",
                    onEnter: () => fillStep(step),
                    onEnterBack: () => fillStep(step),
                    onLeaveBack: () => resetStep(step),
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const fillStep = (step: HTMLDivElement) => {
        gsap.to(step, {
            backgroundColor: "#173F88",
            borderColor: "#173F88",
            color: "#ffffff",
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const resetStep = (step: HTMLDivElement) => {
        gsap.to(step, {
            backgroundColor: "#ffffff",
            borderColor: "#173F88",
            color: "#173F88",
            duration: 0.25,
            ease: "power2.out",
        });
    };

    return (
        <section
            ref={sectionRef}
            className="bg-[#F7F7F8] py-25"
        >
            <div className="mx-auto max-w-280 px-[20px] md:px-0">
                <h2 className="text-center text-[26px] leading-[1.08] font-bold tracking-[-0.03em] text-[#2E4259] md:text-[34px]">
                    Wie sieht eine Zusammenarbeit mit uns aus?
                </h2>

                <p className="mx-auto mt-[12px] max-w-[860px] text-center text-[16px] leading-[1.4] text-[#556274] sm:text-[18px] md:mt-[16px] md:text-[20px]">
                    So läuft deine kostenlose Investmentberatung mit Invest4Kids ab:
                </p>

                <div className="relative mt-[28px] sm:mt-[34px] md:mt-[56px] pt-12">
                    {/* base line */}
                    <div className="absolute top-0 bottom-0 left-[24px] w-[2px] bg-[#D8DDE3] md:left-1/2 md:-translate-x-1/2" />

                    {/* animated fill */}
                    <div
                        ref={fillRef}
                        className="absolute top-0 left-[24px] w-[3px] bg-[#173F88] md:left-1/2 md:-translate-x-1/2"
                    />

                    <div className="space-y-[22px] sm:space-y-[26px]">
                        {/* STEP 1 */}
                        <div
                            ref={(el) => {
                                triggerRefs.current[0] = el;
                            }}
                            className="relative pl-[72px] md:grid md:grid-cols-[468px_88px_468px] gap-x-8 md:items-center justify-center md:pl-0"
                        >
                            <div className="absolute left-0 top-[14px] md:static md:-translate-y-17 md:order-2 md:col-start-2 md:col-end-3 md:flex md:justify-center">
                                <div
                                    ref={(el) => {
                                        stepRefs.current[0] = el;
                                    }}
                                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#173F88] bg-white text-[16px] font-medium text-[#173F88]"
                                >
                                    01
                                </div>
                            </div>

                            <div className="hidden md:block md:col-start-3 md:col-end-4" />

                            <div className="rounded-[16px] bg-white px-[14px] py-[14px] shadow-[0_8px_20px_rgba(34,49,73,0.08)] md:col-start-1 md:col-end-2 md:rounded-[20px] md:p-8.5">
                                <div className="md:flex md:items-start md:gap-8">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src="https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2025/05/schritt1.jpg.webp"
                                        alt="Telefonisches Kennenlernen"
                                        className="max-w-[277px] h-[199px] w-full rounded-[10px] object-cover md:max-w-none md:h-[196px] md:w-[140px] md:shrink-0"
                                    />

                                    <div className="mt-[14px] sm:mt-[16px] md:mt-0">
                                        <h3 className="text-[18px] leading-[1.22] font-medium tracking-[-0.02em] text-[#2E4259] sm:text-[20px]">
                                            Telefonisches Kennenlernen
                                        </h3>

                                        <p className="mt-[10px] text-[16px] leading-[1.45] text-[#556274] sm:text-[18px] font-outfit md:mt-[14px]">
                                            Innerhalb der nächsten 48 Stunden ruft dich ein
                                            Mitarbeiter unseres Team an und klärt vorab die
                                            wichtigsten Fragen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div
                            ref={(el) => {
                                triggerRefs.current[1] = el;
                            }}
                            className="relative pl-[72px] md:grid md:grid-cols-[468px_88px_468px] gap-x-8 md:items-center justify-center md:pl-0"
                        >
                            <div className="absolute left-0 top-[14px] md:static md:-translate-y-[250px] md:order-2 md:col-start-2 md:col-end-3 md:flex md:justify-center">
                                <div
                                    ref={(el) => {
                                        stepRefs.current[1] = el;
                                    }}
                                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#173F88] bg-white text-[16px] font-medium text-[#173F88]"
                                >
                                    02
                                </div>
                            </div>

                            <div className="hidden md:block md:col-start-1 md:col-end-2" />

                            <div className="rounded-[16px] bg-white px-[14px] py-[14px] shadow-[0_8px_20px_rgba(34,49,73,0.08)] sm:px-[16px] sm:py-[16px] md:col-start-3 md:col-end-4 md:rounded-[20px] md:p-8.5">
                                <div className="md:flex md:items-start md:gap-8">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src="https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2025/11/39f75824eb1596920c7efd85ee608ac85cf3c2f3.png.webp"
                                        alt="Beratungsgespräch"
                                        className="max-w-[277px] h-[199px] w-full rounded-[10px] object-cover md:max-w-none md:h-[200px] md:w-[140px] md:shrink-0"
                                    />

                                    <div className="mt-[14px] sm:mt-[16px] md:mt-0">
                                        <h3 className="text-[18px] leading-[1.22] font-medium tracking-[-0.02em] text-[#2E4259] sm:text-[20px]">
                                            Dein Beratungsgespräch
                                        </h3>

                                        <p className="mt-[10px] text-[16px] leading-[1.45] text-[#556274] sm:text-[18px] font-outfit md:mt-[14px]">
                                            In der 30-minütigen Beratung stellt dein persönlicher
                                            Berater eine auf dich und dein Kind angepasste Strategie
                                            zusammen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div
                            ref={(el) => {
                                triggerRefs.current[2] = el;
                            }}
                            className="relative pl-[72px] md:grid md:grid-cols-[468px_88px_468px] gap-x-8 md:items-center justify-center md:pl-0"
                        >
                            <div className="absolute left-0 top-[14px] md:static md:-translate-y-[100px] md:order-2 md:col-start-2 md:col-end-3 md:flex md:justify-center">
                                <div
                                    ref={(el) => {
                                        stepRefs.current[2] = el;
                                    }}
                                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#173F88] bg-white text-[16px] font-medium text-[#173F88]"
                                >
                                    03
                                </div>
                            </div>

                            <div className="rounded-[16px] bg-white px-[14px] py-[14px] shadow-[0_8px_20px_rgba(34,49,73,0.08)] md:order-1 md:col-start-1 md:col-end-2 md:rounded-[20px] md:p-8.5">
                                <div className="md:flex md:items-start md:gap-8">
                                    <Image
                                        width={1000}
                                        height={1000}                                        draggable={false}

                                        src="https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2025/11/1a9339cf4c2930497bc3e8c7f92ad45a43648574.png.webp"
                                        alt="Umsetzung"
                                        className="max-w-[277px] h-[199px] w-full rounded-[10px] object-cover md:max-w-none md:h-[196px] md:w-[140px] md:shrink-0"
                                    />

                                    <div className="mt-[14px] sm:mt-[16px] md:mt-0">
                                        <h3 className="text-[18px] leading-[1.22] font-medium tracking-[-0.02em] text-[#2E4259] sm:text-[20px]">
                                            Lehn dich zurück!
                                        </h3>

                                        <p className="mt-[10px] text-[16px] leading-[1.45] text-[#556274] sm:text-[18px] font-outfit md:mt-[14px]">
                                            Deine Arbeit ist getan! Von der Umsetzung bis hin zur
                                            Überwachung und Optimierung, wir kümmern uns um alles! -
                                            einfach, unverbindlich und Schritt für Schritt begleitet.
                                        </p>

                                        <button className="mt-[14px] hidden md:inline-flex h-[40px] min-w-[132px] items-center justify-center rounded-full border border-[#8EB8D1] bg-transparent px-[18px] text-[13px] font-semibold text-[#2E4259] transition-all duration-300 hover:border-[#173F88] hover:bg-[#173F88] hover:text-white sm:h-[42px] sm:min-w-[142px] sm:text-[14px] md:mt-[16px] md:h-[42px] md:min-w-[148px] md:px-[20px] md:text-[14px]">
                                            Weitere Infos →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block md:col-start-3 md:col-end-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
