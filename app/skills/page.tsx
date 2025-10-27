"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaGithub, FaDocker, FaBolt, FaFeather } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
  SiVercel,
  SiGithub,
  SiRedux,
  SiFirebase,
  SiAwsamplify,
  SiDigitalocean,
  SiLinux,
  SiSocketdotio,
  SiGraphql,
} from "react-icons/si";
import { Navigation } from "../components/nav";
import { GitBranch } from "lucide-react";

type Skill = {
  name: string;
  url: string;
  Icon?: React.ComponentType<any> | null;
  note?: string;
};

const sections: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", url: "https://react.dev/", Icon: FaReact },
      { name: "Next.js", url: "https://nextjs.org/", Icon: SiNextdotjs },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/", Icon: SiTailwindcss },
      { name: "TypeScript", url: "https://www.typescriptlang.org/", Icon: SiTypescript },
      { name: "Tiptap", url: "https://tiptap.dev/", Icon: FaFeather },
      { name: "Framer Motion", url: "https://www.framer.com/motion/", Icon: FaBolt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", url: "https://nodejs.org/", Icon: SiNodedotjs },
      { name: "Express.js", url: "https://expressjs.com/", Icon: SiNodedotjs },
      { name: "MongoDB", url: "https://www.mongodb.com/", Icon: SiMongodb },
      { name: "Prisma", url: "https://www.prisma.io/", Icon: SiPrisma },
      { name: "GraphQL", url: "https://graphql.org/", Icon: SiGraphql },
      { name: "Socket.io", url: "https://socket.io/", Icon: SiSocketdotio },
    ],
  },
  {
    title: "Deployment & CI/CD",
    skills: [
      { name: "Vercel", url: "https://vercel.com/", Icon: SiVercel },
      { name: "Docker", url: "https://www.docker.com/", Icon: FaDocker },
      { name: "GitHub", url: "https://github.com/", Icon: SiGithub },
      { name: "CI/CD", url: "https://docs.github.com/en/actions", Icon: FaBolt },
    ],
  },
  {
    title: "Cloud & Hosting",
    skills: [
      { name: "AWS", url: "https://aws.amazon.com/", Icon: SiAwsamplify },
      { name: "DigitalOcean", url: "https://www.digitalocean.com/", Icon: SiDigitalocean },
      { name: "Firebase", url: "https://firebase.google.com/", Icon: SiFirebase },
      { name: "Linux", url: "https://www.kernel.org/", Icon: SiLinux },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Redux", url: "https://redux.js.org/", Icon: SiRedux },
      { name: "Zustand", url: "https://zustand.pmnd.rs/", Icon: null },
      { name: "Git", url: "https://git-scm.com/", Icon: GitBranch },
      { name: "Docker", url: "https://www.docker.com/", Icon: FaDocker },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function SkillsSection() {
  return (
    <section className="py-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation/>
      <div className="container mx-auto px-4 mt-5">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-semibold text-zinc-100 mb-6"
        >
          Skills & Tools
        </motion.h2>

        <p className="text-sm text-zinc-400 max-w-2xl mb-8">
          Technologies I use to build fast, accessible, and scalable web apps. Click any item to visit the official docs.
        </p>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          {sections.map((section) => (
            <motion.div key={section.title} variants={item} className="">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-zinc-100">{section.title}</h3>
                <span className="text-xs text-zinc-500">{section.skills.length} items</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {section.skills.map((s) => (
                  <motion.a
                    key={s.name}
                    variants={item}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 md:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:scale-[1.02] hover:bg-zinc-900/80 transition-transform duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-700"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-200 group-hover:text-white">
                      {s.Icon ? <s.Icon className="w-5 h-5" aria-hidden /> : <span className="font-medium">{s.name[0]}</span>}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm md:text-base font-medium text-zinc-200 group-hover:text-white truncate">{s.name}</span>
                        <FiExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 flex-shrink-0" />
                      </div>
                      {s.note ? <p className="text-xs text-zinc-400 mt-1">{s.note}</p> : null}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
