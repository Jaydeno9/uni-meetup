"use client";

import Image from "next/image";

const trusts = [
  {
    img: "/trust-1.png",
    title: ".edu.my verification only",
    desc: "Every user is tied to a real Malaysian university email. No outsiders, no exceptions.",
  },
  {
    img: "/trust-2.png",
    title: "Campus-only network",
    desc: "No spam, no fake accounts. Every profile carries a real campus identity.",
  },
  {
    img: "/trust-3.png",
    title: "Transit-accessible locations only",
    desc: "Meetups are pinned to well-known, transit-reachable public spots — never private addresses.",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-[760px] text-center mx-auto">
          <span className="text-[13px] uppercase tracking-[0.12em] font-semibold text-[#7BAEFF]">
            Safety first
          </span>

          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-black">
            Built for real student safety in KL.
          </h2>

          <p className="mt-5 text-[1.05rem] leading-[1.8] text-black/65">
            Designed for real-world interactions, not anonymous chaos.
          </p>
        </div>

        {/* Trust Items */}
        <div className="mt-16 grid grid-cols-3 gap-12">
          {trusts.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              {/* Illustration */}
              <div className="relative  rounded-full overflow-hidden w-[130px] h-[130px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="mt-5 text-[1.1rem] font-semibold leading-[1.3] text-black">
                {item.title}
              </h3>

              <p className="mt-3 text-[0.95rem] leading-[1.7] text-black/65 max-w-[260px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
