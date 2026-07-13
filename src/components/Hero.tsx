"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      stat: "4+",
      label: "Universities connected",
      t: "translateZ(60px) rotateY(-9deg) rotateX(5deg)",
      delay: "0s",
      dur: "6s",
    },
    {
      stat: ".edu.my",
      label: "Verified access only",
      t: "translateZ(18px) rotateY(7deg) rotateX(-3deg)",
      delay: "-2s",
      dur: "7s",
    },
    {
      stat: "3 LRT lines",
      label: "Transit-tagged events",
      t: "translateZ(44px) rotateY(-5deg) rotateX(6deg)",
      delay: "-1s",
      dur: "6.5s",
    },
    {
      stat: "< RM 15",
      label: "Average meetup cost",
      t: "translateZ(8px) rotateY(9deg) rotateX(-2deg)",
      delay: "-3s",
      dur: "7.5s",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const MAX = 8; // max tilt in degrees
    let targetRX = 0,
      targetRY = 0,
      curRX = 0,
      curRY = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      targetRY = px * MAX * 2;
      targetRX = -py * MAX * 2;
    };
    const onLeave = () => {
      targetRX = 0;
      targetRY = 0;
    };

    const tick = () => {
      curRX += (targetRX - curRX) * 0.08; // dampened easing
      curRY += (targetRY - curRY) * 0.08;
      scene.style.setProperty("--rx", `${curRX.toFixed(2)}deg`);
      scene.style.setProperty("--ry", `${curRY.toFixed(2)}deg`);
      raf = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-[200px] pb-[200px]"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />

      <div className="container max-w-7xl relative z-10">
        <div className="hero-grid">
          {/* LEFT */}
          <div className="flex flex-col items-start max-w-[640px] gap-6">
            <h1
              className="font-semibold tracking-[-0.03em] text-white"
              style={{ lineHeight: 1.08 }}
            >
              <span
                className="block text-white"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  marginBottom: "18px",
                }}
              >
                Your campus is just the beginning
              </span>
              <span
                className="block text-white"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.25rem)" }}
              >
                Meet students{" "}
                <span style={{ color: "#8dbafe" }}>beyond your university</span>
              </span>
            </h1>

            <p
              className="font-normal text-white"
              style={{
                fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                lineHeight: 1.7,
                maxWidth: "500px",
              }}
            >
              Whether you&apos;re looking for a study buddy, a mamak gang, a
              badminton partner, or someone to explore KL with — there&apos;s a
              community waiting for you.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a href="#" className="btn-ghost">
                Explore meetups
              </a>
              <a href="#" className="btn-primary">
                <span>Join campus network</span>
                <span className="btn-primary__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: 3D floating glass cards */}
          <div className="hero-cards">
            <div className="hero-cards__glow" />
            <div ref={sceneRef} className="hero-cards__scene">
              <div className="hero-cards__col">
                {[cards[0], cards[2]].map((c) => (
                  <div
                    key={c.label}
                    className="flow-card"
                    style={{ transform: c.t }}
                  >
                    <div
                      className="flow-card__inner"
                      style={{
                        animationDelay: c.delay,
                        animationDuration: c.dur,
                      }}
                    >
                      <span className="flow-card__stat">{c.stat}</span>
                      <span className="flow-card__label">{c.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-cards__col hero-cards__col--offset">
                {[cards[1], cards[3]].map((c) => (
                  <div
                    key={c.label}
                    className="flow-card"
                    style={{ transform: c.t }}
                  >
                    <div
                      className="flow-card__inner"
                      style={{
                        animationDelay: c.delay,
                        animationDuration: c.dur,
                      }}
                    >
                      <span className="flow-card__stat">{c.stat}</span>
                      <span className="flow-card__label">{c.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
