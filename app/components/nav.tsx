"use client";
import { ArrowLeft, Menu as MenuIcon, X as XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { navigation } from "../page";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname=usePathname();


  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // lock scroll when menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const headerBgClass = isIntersecting && !isOpen
    ? "bg-zinc-900/0 border-transparent"
    : "bg-zinc-900/500 border-zinc-800";

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.25 },
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  };

  return (
    <header ref={ref}>
      <div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${headerBgClass}`}>
        <div className="container flex items-center justify-between p-6 mx-auto">
        
          {/* Right: arrow + mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100">
              <ArrowLeft className="w-6 h-6" />
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((s) => !s)}
              className="md:hidden z-60 flex items-center justify-center p-2 rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-900 hover:border-zinc-500 transition duration-200"
            >
              {isOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
		    {/* Left: Desktop nav */}
          <nav className="hidden md:flex gap-8">
            {navigation?.filter((el)=>!el.href.includes(pathname!)).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>

        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <motion.div
          key="mobile-menu"
          id="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="fixed inset-0 z-40 flex flex-col bg-zinc-900/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-zinc-200 text-lg font-medium">
                {/* keep the small arrow for consistency */}
                <ArrowLeft className="inline-block mr-2 w-5 h-5 align-middle" />
                Home
              </Link>

              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-900 transition duration-200"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <motion.nav className="mt-10" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6">
                {navigation?.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="block text-2xl font-semibold text-zinc-100 hover:text-white duration-150"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <div className="mt-8 border-t border-zinc-800 pt-6">
              <p className="text-sm text-zinc-400">
                Want to get in touch?
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="mailto:hello@faisalmujtaba.com"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-sm font-medium text-zinc-200 underline decoration-zinc-800/30"
                >
                  hello@faisalmujtaba.com
                </Link>
                <Link
                  href="https://github.com/faisalinfinity"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-sm text-zinc-400 hover:text-zinc-200"
                >
                  @faisalinfinity
                </Link>
              </div>
            </div>
          </div>

          {/* click on backdrop closes the menu (clicking outside container) */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        </motion.div>
      )}
    </header>
  );
};
