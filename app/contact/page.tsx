"use client";
import { Github, Mail, Phone, X } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { FaLinkedin, FaMedium } from "react-icons/fa";

const socials = [
//   {
//     icon: <X size={20} />,
//     href: "https://x.com/faisal_mujtaba_",
//     label: "Twitter",
//     handle: "@faisal_mujtaba_",
//   },
  {
    icon: <Mail size={20} />,
    href: "mailto:hello@faisalmujtaba.com",
    label: "Email",
    handle: "hello@faisalmujtaba.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/faisal-mujtaba/",
    icon: <FaLinkedin size={20} />,
    handle: "faisal-mujtaba",
  },
  {
    name: "Phone",
    href: "tel:+917007586561",
    icon: <Phone size={20} />,
    handle: "+91-7007-586-561",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 pt-20 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-20  lg:pb-40  md:p-12"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
