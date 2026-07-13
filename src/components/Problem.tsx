"use client";

import { useState } from "react";
import Image from "next/image";

const problems = [
  {
    num: "01",
    title: "Trapped in campus bubbles",
    desc: "Students socialise almost entirely within their own campus — cross-university friendships are rare despite physical proximity.",
    gradient: "linear-gradient(135deg, #ffffff, #f5f7fa)",
    img: "/problem-01.png",
  },
  {
    num: "02",
    title: "Transit-blind social platforms",
    desc: "Existing meetup apps ignore how KL students actually navigate the city — by LRT and MRT, not by map radius.",
    gradient: "linear-gradient(135deg, #ffffff, #f5f7fa)",
    img: "/problem-02.png",
  },
  {
    num: "03",
    title: "No verified student-only space",
    desc: "Generic platforms mix students with everyone else — no campus identity layer, no safety signal, no shared context.",
    gradient: "linear-gradient(135deg, #ffffff, #f5f7fa)",
    img: "/problem-03.png",
  },
];

export default function ProblemSection() {
  // First card active by default
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="bg-white py-[80px]">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="max-w-[720px] mx-auto mb-12">
          <span className="inline-block text-[13px] font-semibold tracking-[0.12em] uppercase text-[#8dbafe] mb-4">
            The problem
          </span>

          <h2 className="text-[clamp(1.8rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.1]">
            KL students are close — but socially disconnected.
          </h2>

          <p className="mt-5 text-black/70 leading-7">
            Distance isn&apos;t the barrier. Transit fragmentation and campus
            isolation are. UM, Taylor&apos;s, Sunway and APU sit along the same
            transit network — yet rarely interact.
          </p>
        </div>

        {/* Cards */}
        <div className="bg-[#dfe9ff] rounded-[32px] p-3">
          <div className="flex gap-4 h-[330px] max-md:flex-col max-md:h-auto">
            {problems.map((p, index) => {
              const isActive = index === activeCard;

              return (
                <article
                  key={p.num}
                  onMouseEnter={() => setActiveCard(index)}
                  style={{
                    background: p.gradient,
                    flex: isActive ? 2.5 : 1,
                  }}
                  className="
                  rounded-[24px]
                  overflow-hidden
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  cursor-pointer
                "
                >
                  <div className="flex h-full">
                    {/* LEFT TEXT */}
                    <div
                      className={`
                      p-6
                      flex
                      flex-col
                      justify-center
                      text-left
                      text-black
                      transition-all
                      duration-700
                      ${isActive ? "w-1/2" : "w-full"}
                    `}
                    >
                      <span className="text-sm font-semibold tracking-widest text-black/40/50">
                        {p.num}
                      </span>

                      <div>
                        <h3
                          className="
                        text-xl
                        font-semibold
                        leading-tight
                        mb-3
                      "
                        >
                          {p.title}
                        </h3>

                        <p
                          className="
                        text-sm
                        leading-6
                        text-black/65
                      "
                        >
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                      className={`
                      relative
                      overflow-hidden
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${isActive ? "w-1/2 opacity-100" : "w-0 opacity-0"}
                    `}
                    >
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
