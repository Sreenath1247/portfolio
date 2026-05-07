"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeaderProps } from "@/types";

export default function Header({ siteLogo, navLinks }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const navItems = document.querySelectorAll<HTMLAnchorElement>("#main-menu > ul > li > a");
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navItems.forEach((item) => {
              if (item.getAttribute("href") === `#${entry.target.id}`) {
                item.classList.add("text-white", "md:after:opacity-100");
              } else {
                item.classList.remove("text-white", "md:after:opacity-100");
              }
            });
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6 [animation-range:0_650px] [animation-timeline:scroll()]">
      <a href="/" aria-label="Home link">
        <Image
          className="rounded-full"
          src={siteLogo}
          width={45}
          height={45}
          alt="website logo"
          priority
        />
      </a>

      <button
        type="button"
        id="menu-button"
        className="px-1.5 text-neutral sm:hidden"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </button>

      <nav
        className={`${open ? "block" : "hidden"} absolute top-20 right-5 rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0`}
        id="main-menu"
      >
        <ul className="gap-2 sm:flex">
          {navLinks.map((link) => (
            <li className="relative" key={link.href}>
              <a
                className="nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['•'] hover:text-white"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
