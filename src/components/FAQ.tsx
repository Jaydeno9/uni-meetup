"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can join KL Uni Meetup?",
    answer:
      "Only verified students with a Malaysian university .edu.my email can join. Every member has a real campus identity, keeping the community safe and student-focused.",
  },
  {
    question: "Is KL Uni Meetup free to use?",
    answer:
      "Yes. Joining events, discovering communities, and connecting with students across KL will always be free.",
  },
  {
    question: "Do I need to be from a specific university?",
    answer:
      "No. We are starting with Taylor's, Sunway, Monash, and UM — and expanding to universities across Greater Kuala Lumpur.",
  },
  {
    question: "Where do meetups usually happen?",
    answer:
      "Meetups take place at safe, public, and transit-accessible locations such as libraries, cafés, parks, and student-friendly spaces.",
  },
  {
    question: "Can I create my own meetup?",
    answer:
      "Yes. Any verified student can host a study session, food outing, sports activity, or social gathering.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-[13px] uppercase tracking-[0.12em] font-semibold text-[#7BAEFF]">
            FAQ
          </p>

          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-black">
            Questions before your first meetup?
          </h2>

          <p className="mt-5 text-[1.05rem] leading-[1.8] text-black/65">
            Everything you need to know before joining the KL student community.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 border-t border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.question} className="border-b border-black/10">
                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="
                    w-full
                    py-8
                    flex
                    items-center
                    justify-between
                    text-left
                    cursor-pointer
                  "
                >
                  <span className="text-[1.15rem] font-semibold text-black">
                    {faq.question}
                  </span>

                  <span
                    className={`
                      text-[#3B84F2]
                      text-3xl
                      font-light
                      transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${isOpen ? "max-h-40 pb-8" : "max-h-0"}
                  `}
                >
                  <p className="pr-12 text-[1rem] leading-8 text-black/65">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
