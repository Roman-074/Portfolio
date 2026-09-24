"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "./navigation";

export function HeaderNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  // Running head: mark the section that crosses the middle of the viewport.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else if (entry.target.id === sections[0].id && entry.boundingClientRect.top > 0) setActive(null);
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Contents"}
      </button>
      <nav id="site-nav" className="site-nav" data-open={open} aria-label="Sections">
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="site-nav__index" aria-hidden>
                  §{item.index}
                </span>
                <span className="site-nav__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
