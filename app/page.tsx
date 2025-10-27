import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { navigation } from "./constants/data";



const socials = [
  {
    name: "Medium",
    href: "https://medium.com/@faisalmujtaba",
    icon: <FaMedium size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/faisal-mujtaba/",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/faisalinfinity",
    icon: <FaGithub size={20} />,
  },
  {
    name: "X",
    href: "https://x.com/faisal_mujtaba_",
    icon: <FaXTwitter size={20} />,
  },
  {
    name: "Email",
    href: "mailto:hello@faisalmujtaba.com",
    icon: <SiGmail size={20} />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Faisal Mujtaba
      </h1>

      <h1 className="z-10 text-3xl text-zinc-500 duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-6xl whitespace-nowrap bg-clip-text">
        Full Stack Web Developer
      </h1>

      <ul className="flex gap-5 my-4 animate-fade-in">
        {socials.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="text-zinc-500 hover:text-zinc-300 duration-300"
          >
            {item.icon}
          </Link>
        ))}
      </ul>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-8 flex items-center justify-center text-center animate-fade-in">
        <h2 className="text-sm w-[97%]  md:w-[60%] text-zinc-500 text-wrap px-2">
          Full-Stack Web Developer crafting high-performance and scalable
          products. Previously built advanced healthcare systems at{" "}
          <Link
            target="_blank"
            href="https://neuroncy.in/"
            className="underline duration-500 hover:text-zinc-300"
          >
            neuroncy
          </Link>
          , and currently building{" "}
          <Link
            target="_blank"
            href="https://screenplay.ink/"
            className="underline duration-500 hover:text-zinc-300"
          >
            screenplay.ink
          </Link>{" "}
          to empower storytellers and film-makers with a modern scriptwriting
          experience.
        </h2>
      </div>

      <h3 className="z-10 text-2xl sm:text-2xl md:text-2xl mb-2 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display  whitespace-nowrap bg-clip-text">
        Hire Me ? Drop a Mail at
      </h3>
      <Link href="mailto:hello@faisalmujtaba.com">
        <h3 className="z-10 text-xl sm:text-xl md:text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display  whitespace-nowrap bg-clip-text">
          hello@faisalmujtaba.com
        </h3>
      </Link>
    </div>
  );
}
