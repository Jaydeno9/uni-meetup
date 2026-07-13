"use client";

import { useState } from "react";

const events = [
  {
    img: "/event-1.jpeg",
    category: "Study",
    title: "Finals Week Survival: UM Library Takeover",
    time: "Today • 2:00 PM",
    host: "UM Computer Science Students",
  },
  {
    img: "/event-2.jpeg",
    category: "Food / Lepak",
    title: "Post-midterm Teh Tarik & Roti Canai Session",
    time: "Tonight • 9:30 PM",
    host: "Taylor's × Sunway Students",
  },
  {
    img: "/event-3.jpeg",
    category: "Social",
    title: "Pasar Seni Hidden Café Trail & Photo Walk",
    time: "Saturday • 3:00 PM",
    host: "Cross-campus Meetup",
  },
  {
    img: "/event-4.jpeg",
    category: "Outdoor",
    title: "KLCC Sunset Picnic & Jog Session",
    time: "Sunday • 6:00 PM",
    host: "Open to all KL students",
  },
  {
    img: "/event-5.jpeg",
    category: "Tech",
    title: "LeetCode Sprint & Tech Networking Night",
    time: "Friday • 7:30 PM",
    host: "APU × UM × Taylor's",
  },
  {
    img: "https://picsum.photos/seed/fun6/400/400",
    category: "Fun",
    title: "Board Games & Mamak Hangout",
    time: "Friday • 8:00 PM",
    host: "Students near SS15",
  },
  {
    img: "https://picsum.photos/seed/music7/400/400",
    category: "Arts",
    title: "Open Mic Night at The Bee Publika",
    time: "Saturday • 8:00 PM",
    host: "UM × IIUM Arts Collective",
  },
  {
    img: "https://picsum.photos/seed/sport8/400/400",
    category: "Sports",
    title: "Futsal Charity Cup — Student Edition",
    time: "Sunday • 10:00 AM",
    host: "Monash × Sunway × Taylor's",
  },
  {
    img: "https://picsum.photos/seed/career9/400/400",
    category: "Career",
    title: "CV Roast & LinkedIn Glow-Up Workshop",
    time: "Thursday • 6:00 PM",
    host: "KL Student Career Network",
  },
];

export default function LiveEvents() {
  const [showAll, setShowAll] = useState(false);

  const visibleEvents = showAll ? events : events.slice(0, 4);

  return (
    <section className="py-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-[760px]">
          <span className="text-[13px] uppercase tracking-[0.12em] font-semibold text-black/70">
            Live campus network
          </span>

          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-black">
            Find your next campus experience
          </h2>

          <p className="mt-5 text-[1.05rem] leading-[1.8] text-black/70">
            All events hosted by verified .edu.my students across KL.
          </p>
        </div>

        {/* Categories + Toggle */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-3 flex-wrap">
            {["All", "Study", "Food", "Social", "Outdoor"].map((item) => (
              <button
                key={item}
                className={`
          px-5 py-2 rounded-full text-sm font-medium transition
          ${
            item === "All"
              ? "bg-[#3b84f2] text-white"
              : "bg-[#F5F8FF] text-black/70 hover:bg-[#E7EEFF]"
          }
        `}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue text-sm font-semibold hover:opacity-70 transition whitespace-nowrap"
          >
            {showAll ? "Show less ↑" : "More →"}
          </button>
        </div>

        {/* Events Grid — 4 per row, square cards */}
        <div className="mt-10 grid grid-cols-4 gap-5">
          {visibleEvents.map((event) => (
            <article
              key={event.title}
              className="
                relative
                rounded-[22px]
                overflow-hidden
                aspect-square
                cursor-pointer
                hover:-translate-y-2
                transition duration-300
              "
            >
              {/* Full bleed image */}
              <img
                src={event.img}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Black gradient — bottom up */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                }}
              />

              {/* Text content over gradient */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {/* <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60 mb-1">
                  {event.category}
                </p>

                <p className="text-[0.82rem] text-white/70">{event.time}</p>
                <p className="text-[0.78rem] text-white/50 mt-0.5 mb-3">
                  {event.host}
                </p> */}

                <h3 className="text-[1rem] font-semibold leading-[1.3] text-white">
                  {event.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
