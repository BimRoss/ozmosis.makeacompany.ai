"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { brands } from "@/data/site";

type Item = {
  label: string;
  sub?: string;
  kind: string;
  href: string;
  external?: boolean;
};

function buildIndex(): Item[] {
  const sections: Item[] = [
    { label: "Philosophy — the OZmosis definition", kind: "Section", href: "#philosophy" },
    { label: "How I help — services", kind: "Section", href: "#services" },
    { label: "On the mic — speaking", kind: "Section", href: "#speaking" },
    { label: "Clutch Factor — nTangible assessment", kind: "Section", href: "#clutch" },
    { label: "Partnerships", kind: "Section", href: "#partnerships" },
    { label: "Endorsements", kind: "Section", href: "#recommendations" },
    { label: "Moments", kind: "Section", href: "#moments" },
  ];
  const partners: Item[] = brands.map((b) => ({
    label: b.name,
    kind: "Partner",
    href: b.url,
    external: true,
  }));
  return [...sections, ...partners];
}

export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index;
    return index.filter((i) =>
      `${i.label} ${i.sub ?? ""} ${i.kind}`.toLowerCase().includes(q)
    );
  }, [query, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (
        e.key === "/" &&
        !open &&
        !/input|textarea/i.test((e.target as HTMLElement)?.tagName || "")
      ) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  function go(item: Item) {
    setOpen(false);
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(item.href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search this site"
        className="fixed left-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/70 text-zinc-700 backdrop-blur-md transition-colors hover:border-black/40 hover:text-zinc-900 dark:border-white/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-white/50 dark:hover:text-white sm:left-6 sm:top-6"
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-black/10 px-4 dark:border-white/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-[#f5c518]" aria-hidden>
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && results[active]) {
                    go(results[active]);
                  }
                }}
                placeholder="Search sections, partners…"
                className="w-full bg-transparent py-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white"
              />
            </div>
            <ul className="max-h-[55vh] overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-zinc-500">
                  No matches.
                </li>
              )}
              {results.map((item, i) => (
                <li key={`${item.kind}-${item.label}-${i}`}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(item)}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left ${
                      i === active
                        ? "bg-[#f5c518]/10"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {item.label}
                      </span>
                      {item.sub && (
                        <span className="block truncate text-xs text-zinc-500">
                          {item.sub}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 rounded-full border border-black/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 dark:border-white/15">
                      {item.kind}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
