"use client";
export default function CTASection() {
  return (
    <section className="bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {" "}
        <div className=" relative overflow-hidden rounded-[42px] min-h-[560px] flex items-center ">
          {" "}
          {/* Background Image */}{" "}
          <div
            className="absolute inset-0 bg-cover bg-center py-[80px]"
            style={{ backgroundImage: "url('/cta-bg-1.png')" }}
          />{" "}
          {/* Dark Overlay */}{" "}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071120]/70 via-[#071120]/30 to-transparent" />{" "}
          {/* Content */}{" "}
          <div className="relative z-10 px-16 py-20 max-w-[800px]">
            {" "}
            <p className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[#8DBAFF]">
              {" "}
              Join the movement{" "}
            </p>{" "}
            <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-white">
              {" "}
              Break out of your campus bubble.{" "}
              <span className="text-white">
                {" "}
                Meet the people who make KL feel like home.{" "}
              </span>{" "}
            </h2>{" "}
            <p className="mt-5 text-[1rem] leading-[1.75] text-white/65 max-w-[480px]">
              {" "}
              Join KL Uni Meetup and discover study groups, late-night mamak
              sessions, weekend adventures, and friendships beyond your own
              campus.{" "}
            </p>{" "}
            <button className="mt-8 px-7 py-3.5 rounded-full bg-[#3B84F2] text-white font-semibold text-[15px] hover:bg-[#2E73DA] transition">
              {" "}
              Join early access →{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
