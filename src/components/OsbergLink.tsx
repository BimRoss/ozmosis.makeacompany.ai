export default function OsbergLink() {
  return (
    <a
      href="https://johnosberg.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="John Osberg — personal site (opens in a new tab)"
      title="John Osberg"
      className="fixed left-16 top-4 z-30 inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-black/15 bg-white ring-1 ring-black/5 backdrop-blur-md transition-all hover:border-[#f5c518]/60 hover:ring-[#f5c518]/30 dark:border-white/20 sm:left-[4.75rem] sm:top-6"
    >
      {/* John's headshot as the mark — mirrors the OZ badge that links the other way on johnosberg.com. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/headshot-v2.png" alt="" aria-hidden className="h-full w-full object-cover" />
    </a>
  );
}
