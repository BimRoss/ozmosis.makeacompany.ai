"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { LinkedInIcon, YouTubeIcon } from "@/data/socials";

const COLORS = ["#f5c518", "#ffd84d", "#1b3b6f", "#2563eb", "#ffe9a3", "#ffffff", "#a5f3ff"];

function burst(ox: number, oy: number) {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:99998;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d")!;

  const particles = Array.from({ length: 80 }, () => ({
    x: ox,
    y: oy,
    vx: (Math.random() - 0.5) * 13,
    vy: -(Math.random() * 13 + 3),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    w: Math.random() * 7 + 3,
    h: Math.random() * 4 + 2,
    rot: Math.random() * Math.PI * 2,
    rotV: (Math.random() - 0.5) * 0.25,
    life: 1,
  }));

  let raf: number;
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of particles) {
      p.vy += 0.4;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;
      p.life -= 0.013;
      if (p.life <= 0) continue;
      alive = true;
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive) raf = requestAnimationFrame(tick);
    else { cancelAnimationFrame(raf); canvas.remove(); }
  }
  raf = requestAnimationFrame(tick);
}

const CAL_HREF = "https://calendar.app.google/it2a6tTGWkWcupGg6";

type Item = {
  label: string;
  href: string;
  icon: React.ReactNode;
  // Tailwind utility classes for the row's accent (text + hover bg + border).
  cls: string;
};

// Navy/gold accent shared by most rows so the menu reads as one OZmosis family.
const OZ = "text-[#1b3b6f] border-[#1b3b6f]/25 hover:bg-[#f5c518]/[0.14] dark:text-[#f5c518] dark:border-[#f5c518]/25 dark:hover:bg-[#f5c518]/[0.12]";

// Items inside the "Let's Connect!" dropdown.
const ITEMS: Item[] = [
  {
    label: "Schedule a call",
    href: CAL_HREF,
    icon: <span aria-hidden className="text-base leading-none">⚡</span>,
    cls: OZ,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/johnosberg",
    icon: <LinkedInIcon className="h-5 w-5 shrink-0" />,
    cls: "text-[#0a66c2] border-[#0a66c2]/25 hover:bg-[#0a66c2]/[0.12] dark:text-[#99ccff] dark:border-[#66b2ff]/25 dark:hover:bg-[#66b2ff]/[0.12]",
  },
  {
    label: "OZmosis Podcast",
    href: "https://youtube.com/playlist?list=PLgKNSRICJcqgUd-nFY-z2VXu68NbiauLm",
    icon: <YouTubeIcon className="h-5 w-5 shrink-0 text-[#ff0000]" />,
    cls: "text-[#1b3b6f] border-[#ff0000]/20 hover:bg-[#ff0000]/[0.08] dark:text-[#f5c518] dark:border-[#ff0000]/25 dark:hover:bg-[#ff0000]/[0.10]",
  },
  {
    label: "Digital Courses",
    href: "https://johnosberg.gumroad.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 9h18l-1.5 10.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 9Z" />
        <path d="M3 9l2-5h14l2 5" />
        <path d="M9 13a3 3 0 0 0 6 0" />
      </svg>
    ),
    cls: OZ,
  },
  {
    label: "The Starting Point Course",
    href: "https://johnosberg.gumroad.com/l/onywa",
    icon: (
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-white ring-1 ring-black/5">
        <Image
          src="/starting-point.png"
          alt=""
          width={24}
          height={24}
          className="h-4 w-4 object-contain"
        />
      </span>
    ),
    cls: OZ,
  },
  {
    label: "In The News",
    href: "https://www.bizjournals.com/buffalo/search/results?q=OZmosis",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 5h13a1 1 0 0 1 1 1v12a2 2 0 0 0 2 2H5a1 1 0 0 1-1-1V5Z" />
        <path d="M18 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2" />
        <path d="M8 8h6M8 12h6M8 16h4" />
      </svg>
    ),
    cls: OZ,
  },
];

export default function LinkHub() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2);
    }
  }

  return (
    <div className="mt-4 flex w-80 max-w-full flex-col items-center gap-2.5">
      <div ref={wrapRef} className="relative w-full">
      <button
        ref={btnRef}
        type="button"
        onClick={toggle}
        aria-haspopup="true"
        aria-expanded={open}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#f5c518] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#04070e] shadow-lg shadow-[#f5c518]/30 transition-colors hover:bg-[#ffd84d]"
      >
        <span aria-hidden>⚡</span>
        Let&apos;s Connect!
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown panel — in-flow, so opening it pushes the page down
          instead of floating on top of the content below. */}
      <div
        className={`grid w-full origin-top transition-all duration-300 ease-out ${
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            role="menu"
            className="rounded-xl border border-black/10 bg-white/85 p-1.5 shadow-xl shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-[#0a0f1a]/90 dark:shadow-black/40"
          >
            {ITEMS.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                tabIndex={open ? 0 : -1}
                className={`group relative flex w-full items-center rounded-lg border border-transparent px-3 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${it.cls}`}
              >
                <span className="absolute left-3 flex h-5 w-5 shrink-0 items-center justify-center">{it.icon}</span>
                <span className="block w-full px-8 text-center leading-tight">{it.label}</span>
                <span className="absolute right-3 opacity-50 transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
