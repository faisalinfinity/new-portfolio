"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Calendar } from "lucide-react";
import { Navigation } from "../components/nav";

/**
 * Experience entry shape
 */
type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  start: string; // e.g. "Feb 13, 2023"
  end?: string; // e.g. "Present" or "20 Jan 2025"
  bullets: string[]; // main achievements / responsibilities
  logoUrl?: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Lead Frontend Engineer",
    company: "Ajastos Film Technology Labs Pvt Ltd",
    companyUrl: "https://screenplay.ink", // add correct link if different
    location: "Hyderabad",
    start: "13 Feb 2023",
    end: "Present",
    bullets: [
      "Led a team of 4–5 frontend engineers and designed scalable monorepo architecture.",
      "Built high-performance React features using Zustand and React Query for optimal state & data fetching.",
      "Integrated Tiptap with custom extensions for rich text & real-time collaboration.",
      "Implemented chat and video-call functionality for interactive user experiences."
    ],
    logoUrl:"/screenplay.png"
  },
  {
    title: "Full Stack Developer",
    company: "Neuroncy Healthcare Pvt Ltd",
    companyUrl: "https://neuroncy.com", // update if needed
    location: "Kolkata",
    start: "16 June 2023",
    end: "20 Jan 2025",
    bullets: [
      "Developed and maintained core features using Next.js, Node.js and MongoDB.",
      "Improved user engagement and reliability by applying performance and UX improvements.",
      "Collaborated cross-functionally to integrate backend services and ensure production stability."
    ],
    logoUrl:"/neuroncy.svg"
  },
  {
    title: "Full Stack Developer (Apprenticeship)",
    company: "Masai School",
    companyUrl: "https://masaischool.com",
    location: "Bangalore",
    start: "25 July 2022",
    end: "30 May 2023",
    bullets: [
      "Delivered multiple MERN projects from API design to front-end delivery.",
      "Gained hands-on experience with end-to-end feature development and teamwork."
    ],
    logoUrl:"/masai.png"
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation/>
      <div className="container mx-auto px-4 pt-5">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-semibold text-zinc-100 mb-8"
        >
          Experience
        </motion.h2>

        <div className="relative grid gap-8 md:gap-12">
          {/* vertical timeline line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-zinc-600 via-zinc-600/50 to-transparent" />

          <div className="space-y-8 md:pl-16">
            {experiences.map((exp, idx) => {
              const delay = idx * 0.08;
              return (
                <motion.article
                  key={`${exp.company}-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.45, ease: "easeOut" }}
                  className="relative"
                >
                  {/* timeline dot (visible on md+) */}
                  <div className="absolute -left-3 top-3 hidden md:block">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200">
                      <span className="w-2 h-2 rounded-full bg-zinc-400" />
                    </span>
                  </div>

                  <Card>
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-6 md:p-8">
                      {/* optional logo column */}
                      <div className="flex-shrink-0 w-full md:w-40">
                        <div className="flex flex-col items-start gap-3">
                          <div className="rounded-lg bg-zinc-white border border-zinc-800 flex items-center justify-center">
                            {/* Logo if provided else initials */}
                            {exp.logoUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={exp.logoUrl}
                                alt={`${exp.company} logo`}
                                className="w-[200px] object-cover p-1 h-full rounded-lg"
                              />
                            ) : (
                              <span className="text-zinc-300 font-bold text-lg">
                                {exp.company
                                  .split(" ")
                                  .map((p) => p[0])
                                  .slice(0, 2)
                                  .join("")}
                              </span>
                            )}
                          </div>

                          {/* <div className="hidden md:flex flex-col">
                            <span className="text-sm text-zinc-400">{exp.location}</span>
                            <div className="mt-2 inline-flex items-center text-xs text-zinc-400 gap-2">
                              <Calendar size={14} />
                              <span>
                                {exp.start} • {exp.end ?? "Present"}
                              </span>
                            </div>
                          </div> */}
                        </div>
                      </div>

                      {/* main content */}
                      <div className="w-full">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold text-zinc-100">
                              {exp.title}
                            </h3>

                            <div className="mt-1 text-sm">
                              {exp.companyUrl ? (
                                <Link
                                  href={exp.companyUrl}
                                  target="_blank"
                                  className="text-zinc-300 underline decoration-zinc-800/30 hover:text-zinc-100"
                                >
                                  {exp.company}
                                </Link>
                              ) : (
                                <span className="text-zinc-300">{exp.company}</span>
                              )}

                              <div className="mt-2 flex md:hidden items-center gap-2 text-xs text-zinc-400">
                                <Calendar size={14} />
                                <span>
                                  {exp.start} • {exp.end ?? "Present"}
                                </span>
                                {exp.location ? <span>• {exp.location}</span> : null}
                              </div>
                            </div>
                          </div>

                          {/* small label on right (desktop) */}
                          <div className="hidden md:flex flex-col items-end text-right text-xs text-zinc-400">
                            <span>
                              {exp.start} <span className="mx-1">•</span> {exp.end ?? "Present"}
                            </span>
                            <span className="mt-2">{exp.location}</span>
                          </div>
                        </div>

                        {/* bullets */}
                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3">
                              <svg
                                className="flex-shrink-0 mt-1 w-3 h-3 text-zinc-400"
                                viewBox="0 0 8 8"
                                fill="currentColor"
                                aria-hidden
                              >
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
