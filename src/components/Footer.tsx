"use client";

import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const explore = ["Campus Network", "Meetups", "How It Works", "Safety"];

const community = [
  "Student Hosts",
  "Universities",
  "Campus Ambassadors",
  "Early Access",
];

const resources = ["FAQ", "Safety Guidelines", "Community Rules", "Support"];

const socials = [
  {
    icon: FaInstagram,
    name: "Instagram",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    name: "X",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071120] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-[80px] pb-[20px]">
        {/* Top Footer */}
        <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-10">
          {/* Brand + Follow Us */}
          <div>
            <a className="inline-flex items-center font-bold text-[18px] tracking-[-0.02em] text-white no-underline whitespace-nowrap">
              <span className="w-7 h-7 rounded-[8px] bg-gradient-to-br from-[#3b84f2] to-[#8dbafe] inline-flex items-center justify-center text-[#0a1628] font-extrabold text-[20px] mr-[3px]">
                U
              </span>
              <span>
                <span className="text-[#8dbafe] ">NI</span> MEETUP
              </span>
            </a>

            <p className="mt-6 text-white/65 leading-7 max-w-[320px]">
              The student social layer for KL. Meet verified students, discover
              events, and build friendships beyond your own campus.
            </p>

            {/* Follow Us — moved here, under the brand blurb */}
            <div className="mt-8">
              <h3 className="font-semibold">Follow Us</h3>

              <div className="mt-5 flex gap-3 flex-wrap">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="
                        w-11 
                        h-11 
                        rounded-full 
                        bg-white/10
                        flex 
                        items-center 
                        justify-center
                        text-white/70
                        hover:bg-[#3B84F2]
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Explore */}
          <FooterLinks title="Explore" links={explore} />

          {/* Community */}
          <FooterLinks title="Community" links={community} />

          {/* Resources */}
          <FooterLinks title="Resources" links={resources} />
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom Footer */}
        <div
          className="
          mt-8 
          flex 
          items-center 
          justify-between
          text-sm
          text-white/45
        "
        >
          <p>© 2026 KL Uni Meetup. Built for students across Kuala Lumpur.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Footer Link Component */
function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="
                text-white/60 
                hover:text-white
                transition
              "
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
