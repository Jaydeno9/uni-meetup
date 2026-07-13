"use client";

import Image from "next/image";

const campuses = [
  {
    name: "Taylor's University",
    location: "Subang Jaya",
    image: "/taylors.png",
  },
  {
    name: "Sunway University",
    location: "Bandar Sunway",
    image: "/sunway.png",
  },
  {
    name: "Monash University Malaysia",
    location: "Bandar Sunway",
    image: "/monash.png",
  },
  {
    name: "Universiti Malaya",
    location: "Petaling Jaya",
    image: "/um.png",
  },
];

export default function CampusNetwork() {
  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[13px] uppercase tracking-[0.12em] font-semibold text-[#7BAEFF]">
            Campus Network
          </p>

          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-black">
            Connecting universities across KL
          </h2>

          <p className="mt-5 text-[1.05rem] leading-[1.8] text-black/65">
            Starting with KL's most active student communities — Taylor&apos;s,
            Sunway, Monash and UM. More universities will join as we expand the
            network across Greater Kuala Lumpur.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 gap-8">
          {campuses.map((campus) => (
            <div
              key={campus.name}
              className="
                overflow-hidden
                rounded-[36px]
              "
            >
              {/* Image */}
              <div className="relative h-[280px] w-full">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Text area */}
              <div
                className="
                  bg-[#F5F8FF]
                  py-10
                  px-8
                  text-center
                "
              >
                <h3 className="text-[1.75rem] font-semibold text-black">
                  {campus.name}
                </h3>

                <p className="mt-2 text-black/60 text-[1rem]">
                  {campus.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Future expansion */}
        <div className="mt-12 text-center">
          <p className="text-black/45 text-[0.95rem]">
            + More universities across Kuala Lumpur coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
