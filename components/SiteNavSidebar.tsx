import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { X, ChevronLeft, ChevronRight, LayoutList } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const allPages = [
  { label: 'Home',                    href: '/',                                  group: 'pages' },
  { label: 'How it Works',            href: '/how-it-works',                      group: 'pages' },
  { label: 'About',                   href: '/about',                             group: 'pages' },
  { label: 'Testimonials',            href: '/testimonials',                      group: 'pages' },
  { label: 'FAQ',                     href: '/faq',                               group: 'pages' },
  { label: 'News',                    href: '/news',                              group: 'pages' },
  { label: 'Contact',                 href: '/contact',                           group: 'pages' },
  { label: '🇬🇧 Study in the UK',     href: '/study/uk',                          group: 'destinations' },
  { label: '🇮🇪 Study in Ireland',    href: '/study/ireland',                     group: 'destinations' },
  { label: '🇨🇦 Study in Canada',     href: '/study/canada',                      group: 'destinations' },
  { label: 'All Services & Pricing',  href: '/services',                          group: 'services' },
  { label: 'Advisory Consultation',   href: '/services/advisory',                 group: 'services' },
  { label: 'School Search & Top 3',   href: '/services/school-search',            group: 'services' },
  { label: 'University Admission Support', href: '/services/admission',           group: 'services' },
  { label: 'MSc Nursing Pathway',     href: '/services/nursing-pathway',          group: 'services' },
  { label: 'Premium Journey Package', href: '/services/premium-package',          group: 'services' },
  { label: 'Student Visa Guidance',   href: '/services/visa-guide',               group: 'services' },
  { label: '🇺🇸 USA Tourist Visa',     href: '/services/usa-visa',                group: 'services' },
  { label: 'Student Accommodation',   href: '/services/student-accommodation',    group: 'services' },
  { label: 'Hotel Booking',           href: '/services/hotel-booking',            group: 'services' },
  { label: 'Air Flight Booking',      href: '/services/flight-booking',           group: 'services' },
];

export const SiteNavSidebar = () => {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const currentIdx = allPages.findIndex(p => p.href === location);
  const prevPage  = currentIdx > 0                    ? allPages[currentIdx - 1] : null;
  const nextPage  = currentIdx < allPages.length - 1  ? allPages[currentIdx + 1] : null;

  return (
    <>
      {/* ── Collapsed tab pinned to left edge ── */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] bg-primary text-white rounded-r-xl shadow-lg
                   flex flex-col items-center gap-1.5 py-5 px-[7px] hover:bg-[#1a3a6e] transition-colors
                   border border-white/10"
        aria-label="Open site navigation"
        title="Site Navigation"
      >
        <LayoutList className="w-[15px] h-[15px]" />
        <span
          className="text-[8px] font-bold tracking-[0.18em] uppercase text-white/70"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          SITE MAP
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[65]"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed left-0 top-0 h-full w-[255px] bg-primary text-white z-[70] flex flex-col shadow-2xl"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
                <div>
                  <p className="font-serif font-bold text-sm text-white">Site Navigation</p>
                  <p className="text-white/45 text-[11px] mt-0.5">All pages &amp; services</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                  aria-label="Close navigation"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable link list */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <p className="text-secondary text-[9.5px] font-bold uppercase tracking-[0.2em] mb-2.5">Pages</p>
                <ul className="flex flex-col gap-0.5 mb-5">
                  {allPages.filter(p => p.group === 'pages').map(p => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors
                          ${location === p.href
                            ? 'bg-secondary text-primary font-semibold'
                            : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                      >
                        {location === p.href && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="text-secondary text-[9.5px] font-bold uppercase tracking-[0.2em] mb-2.5">Study Destinations</p>
                <ul className="flex flex-col gap-0.5 mb-5">
                  {allPages.filter(p => p.group === 'destinations').map(p => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors
                          ${location === p.href
                            ? 'bg-secondary text-primary font-semibold'
                            : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                      >
                        {location === p.href && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="text-secondary text-[9.5px] font-bold uppercase tracking-[0.2em] mb-2.5">Our Services</p>
                <ul className="flex flex-col gap-0.5">
                  {allPages.filter(p => p.group === 'services').map(p => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors
                          ${location === p.href
                            ? 'bg-secondary text-primary font-semibold'
                            : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                      >
                        {location === p.href && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back / Next footer */}
              <div className="px-4 pb-5 pt-3 border-t border-white/10 shrink-0">
                <p className="text-white/40 text-[9.5px] uppercase tracking-[0.2em] mb-3">Page Navigation</p>
                <div className="flex gap-2">
                  {prevPage ? (
                    <Link
                      href={prevPage.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg
                                 px-3 py-2.5 text-xs font-medium transition-colors group"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
                      <span className="truncate leading-tight">{prevPage.label}</span>
                    </Link>
                  ) : (
                    <div className="flex-1 bg-white/5 rounded-lg px-3 py-2.5 text-xs text-white/25 italic">First page</div>
                  )}

                  {nextPage ? (
                    <Link
                      href={nextPage.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 flex items-center justify-end gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg
                                 px-3 py-2.5 text-xs font-medium transition-colors group"
                    >
                      <span className="truncate text-right leading-tight">{nextPage.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <div className="flex-1 bg-white/5 rounded-lg px-3 py-2.5 text-xs text-white/25 italic text-right">Last page</div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
