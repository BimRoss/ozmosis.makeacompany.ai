import Backdrop from "@/components/Backdrop";
import LinkHub from "@/components/LinkHub"; // consolidated hero dropdown
import ChromeFx from "@/components/ChromeFx";
import ScrollReveal from "@/components/ScrollReveal";
import SearchPalette from "@/components/SearchPalette";
import OsbergLink from "@/components/OsbergLink";
import Testimonials from "@/components/Testimonials";
import PartnershipsGrid from "@/components/PartnershipsGrid";
import TiltCard from "@/components/TiltCard";
import ClutchFactorCard from "@/components/ClutchFactorCard";
import Gallery from "@/components/Gallery";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Backdrop />
      <ThemeToggle />
      <SearchPalette />
      <OsbergLink />
      <ScrollReveal />
      <ChromeFx />
      <main
        id="main"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 pb-8 pt-20 sm:px-8 md:gap-9 md:pb-10 md:pt-28"
      >
        {/* Hero — no headshot; the wordmark and buttons own the center. */}
        <section className="reveal flex flex-col items-center gap-5">
          {/* Text column */}
          <div className="flex min-w-0 flex-col items-center text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.34em] text-zinc-500 dark:text-zinc-400">
              Power of
            </span>
            {/* Official OZmosis wordmark — the real brand logo. Navy/gold on
                light, white/gold on dark. The h1 carries the text for SEO and
                screen readers; the marks are decorative. */}
            <h1 className="sr-only">POWER of OZmosis</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wordmark-light.png"
              alt=""
              aria-hidden
              className="mt-1.5 block h-auto w-[min(86vw,29rem)] drop-shadow-[0_2px_14px_rgba(0,136,204,0.18)] dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wordmark-dark.png"
              alt=""
              aria-hidden
              className="mt-1.5 hidden h-auto w-[min(86vw,29rem)] drop-shadow-[0_2px_18px_rgba(0,204,255,0.25)] dark:block"
            />
            {/* Official brand tagline */}
            <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#1b3b6f] dark:text-white sm:text-xs">
              Connect<span className="text-[#f5c518]">.</span> Collaborate
              <span className="text-[#f5c518]">.</span> Champion
              <span className="text-[#f5c518]">.</span>
            </p>

            {/* Primary actions — one Let's Connect! button that drops down to
                every touchpoint (call, LinkedIn, podcast, courses, product). */}
            <LinkHub />
          </div>
        </section>

        {/* Philosophy — the belief OZmosis runs on. This is the identity piece
            that sets the practice apart from a personal portfolio: a full-width
            creed band with the gold rule, not a resume card. */}
        <section id="philosophy" className="reveal-on-scroll scroll-mt-24">
          <div className="relative overflow-hidden rounded-2xl border border-[#f5c518]/25 bg-gradient-to-br from-[#1b3b6f]/[0.06] to-transparent px-6 py-8 backdrop-blur-sm dark:border-[#f5c518]/20 dark:from-[#f5c518]/[0.05] sm:px-10 sm:py-10">
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#f5c518] to-[#f5c518]/0"
            />
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#1b3b6f] dark:text-[#f5c518]">
              OZ·mo·sis
            </p>
            <p className="mt-3 font-[family-name:var(--font-sora)] text-xl font-bold leading-snug text-zinc-900 dark:text-white sm:text-2xl">
              The gradual, unstoppable movement of a person toward who they were
              built to be.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              I meet people and organizations where they are, then move them to
              where they are destined to go. Not through pressure. Through
              momentum, belief, and the infectious joy that shows up when
              compassion meets passion. That transfer, from one person to the
              next, is osmosis. The power in it is what we build together.
            </p>
          </div>
        </section>

        {/* Services — how OZmosis helps */}
        <section id="services" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="eyebrow on-photo">How I help</h2>
            <p className="on-photo max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              Guiding and empowering people, community organizations, and businesses, from startup to established, to go from where they are to where they are destined to be.
            </p>
          </div>

          <div className="cascade grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                icon: "⚡",
                title: "Transformative Growth Coaching",
                body: "A tiered, one-on-one approach to the evolution of your image, your mindset, and the way you show up. We build the version of you that your goals require.",
              },
              {
                icon: "📣",
                title: "Brand Champion",
                body: "Repping your brand across every OZmosis channel and telling your mission to the people who most need to hear it, with real conviction behind it.",
              },
              {
                icon: "🎤",
                title: "Speaking Engagements",
                body: "Keynotes and talks for groups, teams, businesses, and schools or colleges. Energy that moves a room and a message people carry out the door.",
                center: true,
              },
            ].map((s) => (
              <TiltCard
                key={s.title}
                className={`rounded-2xl${
                  s.center
                    ? " sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.375rem)]"
                    : ""
                }`}
              >
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-black/10 bg-white/40 p-5 backdrop-blur-sm transition-colors hover:border-[#f5c518]/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#f5c518]/35">
                  <span aria-hidden className="text-2xl">{s.icon}</span>
                  <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold leading-tight text-[#1b3b6f] dark:text-[#f5c518]">
                    {s.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {s.body}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* On stage — speaking. John asked for this front and center: the
            room, the mic, the message. Three live shots in a filmstrip. */}
        <section id="speaking" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="eyebrow on-photo">On the mic</h2>
            <p className="on-photo max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              Keynotes, panels, and talks for teams, businesses, schools, and
              communities. Energy that moves a room and a message people carry
              out the door.
            </p>
          </div>
          <div className="cascade grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { src: "/gallery/g9-panel-2022.jpg", caption: "On the panel" },
              { src: "/gallery/g2-IMG_9269.jpg", caption: "Keynote to a full room" },
              { src: "/gallery/g17-IMG_0258.jpg", caption: "Brandlete talk: Wins & Losses" },
            ].map((s) => (
              <figure
                key={s.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 shadow-lg shadow-black/10 dark:border-white/10 dark:shadow-black/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Featured course — The Starting Point (Gumroad). Card links to the
            specific product; a quiet line below opens the full storefront. */}
        <section id="courses" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-3">
          <a
            href="https://johnosberg.gumroad.com/l/onywa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get The Starting Point, John's digital course, on Gumroad"
            className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-[#f5c518]/30 bg-gradient-to-br from-[#1b3b6f]/[0.08] via-transparent to-transparent p-4 backdrop-blur-sm transition-all hover:border-[#f5c518]/55 sm:flex-row sm:gap-5 sm:p-5 dark:border-[#f5c518]/25 dark:from-[#1b3b6f]/25 dark:hover:border-[#f5c518]/45"
          >
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#f5c518]/10 blur-3xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/starting-point.png"
              alt="The Starting Point — a digital course by John Osberg"
              width={698}
              height={901}
              loading="lazy"
              className="relative w-20 shrink-0 drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1 sm:w-24"
            />
            <div className="relative flex min-w-0 flex-1 flex-col items-center text-center sm:items-start sm:text-left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#caa206] dark:text-[#f5c518]">
                New · Digital course
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-sora)] text-xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
                The Starting Point
              </h2>
              <p className="mt-1.5 max-w-md text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                Turn relationships into revenue. Serve first in 7 days. The exact playbook I run to open doors and build trust that comes back around.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1b3b6f] to-[#13325f] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#1b3b6f]/30 ring-1 ring-[#f5c518]/40 transition-all group-hover:from-[#234a86] group-hover:to-[#1b3b6f] group-hover:shadow-xl group-hover:shadow-[#f5c518]/20">
                Get the course
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>↗</span>
              </span>
            </div>
          </a>
          <a
            href="https://johnosberg.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 self-center font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1b3b6f] transition-opacity hover:opacity-70 dark:text-[#f5c518]"
          >
            Browse all digital courses
            <span aria-hidden>↗</span>
          </a>
        </section>

        {/* Latest podcast — tune in */}
        <section className="reveal-on-scroll">
          <a
            href="https://www.toolstalentstechniques.com/john-osberg/"
            target="_blank"
            rel="noopener noreferrer"
            title="Listen to John on Tools, Talents &amp; Techniques (opens in a new tab)"
            className="group flex items-center gap-3 rounded-xl border border-black/[0.07] bg-white/40 px-3 py-2.5 backdrop-blur-sm transition-colors hover:border-[#f5c518]/50 hover:bg-white/60 dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:border-[#f5c518]/35 dark:hover:bg-white/[0.06]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/podcasts/ttt-ep120.png"
              alt="Tools, Talents &amp; Techniques episode 120 cover"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 shrink-0 rounded-lg object-cover ring-1 ring-black/10 dark:ring-white/10"
            />
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1b3b6f] dark:text-[#f5c518]">
                Podcast feature
              </span>
              <p className="truncate font-[family-name:var(--font-sora)] text-sm font-bold leading-snug text-zinc-900 dark:text-white sm:text-base">
                One Platform for Youth Athlete Development
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3b6f] transition-transform group-hover:translate-x-0.5 dark:text-[#f5c518]">
              Tune in
              <span aria-hidden>↗</span>
            </span>
          </a>
        </section>

        {/* Clutch Factor — nTangible assessment. The gauge thumbnail now lives
            inside the card itself, so no standalone badge above it. */}
        <section id="clutch" className="reveal-on-scroll flex scroll-mt-24 flex-col items-center gap-4">
          <div className="w-full">
            <ClutchFactorCard />
          </div>
        </section>

        {/* Partnerships */}
        <section id="partnerships" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <h2 className="eyebrow on-photo">Partnerships built with</h2>
          <PartnershipsGrid />
        </section>

        {/* Endorsements */}
        <section id="recommendations" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="eyebrow on-photo">Endorsements</h2>
            <p className="on-photo font-[family-name:var(--font-sora)] text-lg font-bold text-zinc-950 dark:text-white sm:text-xl">
              Endorsed by 140+ leaders.
            </p>
          </div>
          <Testimonials />
        </section>

        {/* Moments — a drifting filmstrip of life & career photos */}
        <section id="moments" className="reveal-on-scroll flex scroll-mt-24 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="eyebrow on-photo">Moments</h2>
            <p className="on-photo max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              A few from along the way. Tap any photo to open it, then swipe or arrow through.
            </p>
          </div>
          <Gallery />
        </section>

        {/* Footer */}
        <footer className="on-photo flex flex-col items-center gap-3 border-t border-black/20 pt-8 pb-24 text-xs text-zinc-700 dark:border-white/10 dark:text-white">
          <span>© {new Date().getFullYear()} POWER of OZmosis · John Osberg. All rights reserved.</span>
          <details className="group mt-1 w-full max-w-xl px-4 text-center">
            <summary className="mx-auto inline-flex cursor-pointer list-none items-center gap-1 text-[10px] text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 [&::-webkit-details-marker]:hidden">
              Legal &amp; privacy
              <span aria-hidden className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="mx-auto mt-2 max-w-md space-y-2 text-[9px] leading-relaxed text-zinc-400 dark:text-zinc-500">
              <p>
                All content on this site, including text, images, and design, is
                the property of John Osberg and may not be reproduced,
                distributed, or used without prior written permission. All
                third-party names, logos, and trademarks are the property of
                their respective owners and are shown for identification only,
                without any claim of affiliation or endorsement.
              </p>
              <p>
                This site is provided for informational purposes only, on an
                &ldquo;as is&rdquo; basis, with no warranties of any kind. It
                does not sell your personal information. Any details you share
                through the contact links are used solely to respond to you.
              </p>
            </div>
          </details>
        </footer>
      </main>
    </>
  );
}
