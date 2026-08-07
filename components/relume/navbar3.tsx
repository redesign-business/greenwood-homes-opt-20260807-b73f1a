"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

type NavLink = { title: string; url: string };

export function Navbar3({
  logo,
  navLinks,
}: {
  logo: { src: string; alt: string };
  navLinks: NavLink[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <header className="site-nav grid w-full grid-cols-[1fr_max-content_1fr] items-center px-[5%]">
      <button
        className="nav-toggle flex size-12 flex-col justify-center lg:hidden"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
      <AnimatePresence>
        {(!isMobile || isOpen) && (
          <motion.nav
            initial={isMobile ? { x: "-100%" } : false}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", duration: 0.45, bounce: 0 }}
            className="nav-links"
          >
            {navLinks.map((link) => (
              <a key={link.title} href={link.url} onClick={() => setIsOpen(false)}>{link.title}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <a href="#top" className="brand-mark">
        <img src={logo.src} alt={logo.alt} />
      </a>
      <div className="flex justify-end">
        <Button asChild size="sm" className="nav-cta">
          <a href="#contact">Start a conversation</a>
        </Button>
      </div>
    </header>
  );
}
