"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-[760px] text-center mx-auto">
          <span className="text-[13px] uppercase tracking-[0.12em] font-semibold text-[#7BAEFF]">
            How it works
          </span>

          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-black">
            A campus social system built on identity + transit
          </h2>

          <p className="mt-5 text-[1.05rem] leading-[1.8] text-black/65">
            Not just a meetup list — a structured social layer for KL student
            life.
          </p>
        </div>

        {/* First Container */}
        <div
          className="
          mt-16
          bg-[#F5F8FF]
          rounded-[36px]
          p-10
          flex
          items-center
          gap-12
        "
        >
          {/* Left Image */}
          <div className="w-[45%] relative h-[520px]">
            <Image
              src="/hiw-img-1.png"
              alt="Identity and discovery UI"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Text */}
          <div className="w-[55%] space-y-12">
            <div>
              <p className="text-[#7BAEFF] font-semibold text-lg">01</p>

              <h3 className="mt-2 text-[2rem] font-semibold">Identity</h3>

              <p className="mt-3 text-black/65 leading-8 text-lg">
                Verified via .edu.my university email. Instant access — no
                manual review.
              </p>
            </div>

            <div>
              <p className="text-[#7BAEFF] font-semibold text-lg">02</p>

              <h3 className="mt-2 text-[2rem] font-semibold">Discovery</h3>

              <p className="mt-3 text-black/65 leading-8 text-lg">
                Browse by campus, LRT/MRT zone, or vibe. See what’s live near
                your line.
              </p>
            </div>
          </div>
        </div>

        {/* Second Container */}
        <div
          className="
          mt-8
          bg-[#F5F8FF]
          rounded-[36px]
          p-10
          flex
          items-center
          gap-12
        "
        >
          {/* Left Text */}
          <div className="w-[55%] space-y-12">
            <div>
              <p className="text-[#7BAEFF] font-semibold text-lg">03</p>

              <h3 className="mt-2 text-[2rem] font-semibold">RSVP</h3>

              <p className="mt-3 text-black/65 leading-8 text-lg">
                One tap. No group chats — the host gets notified, and you’re
                confirmed instantly.
              </p>
            </div>

            <div>
              <p className="text-[#7BAEFF] font-semibold text-lg">04</p>

              <h3 className="mt-2 text-[2rem] font-semibold">Transit</h3>

              <p className="mt-3 text-black/65 leading-8 text-lg">
                Every event tagged to a real LRT/MRT station. Know exactly how
                to show up.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[45%] relative h-[520px]">
            <Image
              src="/hiw-img-2.png"
              alt="RSVP and transit UI"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
