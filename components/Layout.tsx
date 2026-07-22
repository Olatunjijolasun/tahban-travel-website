import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, MessageCircle, ChevronDown, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CookieConsent } from './CookieConsent';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { motion, AnimatePresence } from 'framer-motion';
import { TahbanLogo } from './TahbanLogo';
import { SiteNavSidebar } from './SiteNavSidebar';

// Social icons as inline SVG for reliability
const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

/* ──────────────────────────────────────────────
   Destinations dropdown data
────────────────────────────────────────────── */
const destinationsDropdown = [
  { label: '🇬🇧 Study in the UK',      href: '/study/uk',      sub: 'Primary destination · Russell Group & beyond', badge: 'Primary' },
  { label: '🇮🇪 Study in Ireland',     href: '/study/ireland', sub: 'English-speaking EU · Tech & Pharma hub', badge: '' },
  { label: '🇨🇦 Study in Canada',      href: '/study/canada',  sub: 'PGWP · Pathway to PR · 10 provinces', badge: '' },
];

/* ──────────────────────────────────────────────
   Services dropdown data
────────────────────────────────────────────── */
const servicesDropdown = {
  education: [
    { label: "Advisory Consultation", href: "/services/advisory",    price: "£50" },
    { label: "School Search & Top 3", href: "/services/school-search", price: "£100" },
    { label: "University Admission Support", href: "/services/admission",  price: "£350" },
    { label: "MSc Nursing Pathway",         href: "/services/nursing-pathway", price: "£750" },
    { label: "Premium Journey Package",     href: "/services/premium-package", price: "£900" },
  ],
  visa: [
    { label: "Student Visa Guidance", href: "/services/visa-guide",  price: "£300" },
    { label: "USA Tourist Visa (B-2)",    href: "/services/usa-visa",    price: "£350" },
  ],
  travel: [
    { label: "Student Accommodation", href: "/services/student-accommodation", price: "£50" },
    { label: "Hotel Booking",         href: "/services/hotel-booking",          price: "£50" },
    { label: "Air Flight Booking",    href: "/services/flight-booking",         price: "£50" },
  ],
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const [location] = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (destinationsRef.current && !destinationsRef.current.contains(e.target as Node)) {
        setDestinationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setDestinationsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isServiceActive = location.startsWith('/services');
  const isDestinationActive = location.startsWith('/study');

  const coreNavLinks = [
    { label: 'Home',         href: '/' },
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'About',        href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ',          href: '/faq' },
    { label: 'News',         href: '/news' },
    { label: 'Contact',      href: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh] font-sans">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>

        {/* International Presence Flag Bar */}
        <div className={`overflow-hidden transition-all duration-300 border-b border-primary/10 bg-primary ${isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-10 opacity-100 py-0'}`}>
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-1 md:gap-3 text-white/80">
              <span className="text-secondary font-semibold tracking-widest uppercase hidden sm:block text-[10px] mr-1">Destinations</span>
              <Link href="/study/uk" className="flex items-center gap-1 hover:text-secondary transition-colors">🇬🇧 <span className="hidden sm:inline">United Kingdom</span><span className="sm:hidden">UK</span></Link>
              <span className="text-white/30">·</span>
              <Link href="/study/ireland" className="flex items-center gap-1 hover:text-secondary transition-colors">🇮🇪 <span className="hidden sm:inline">Ireland</span></Link>
              <span className="text-white/30">·</span>
              <Link href="/study/canada" className="flex items-center gap-1 hover:text-secondary transition-colors">🇨🇦 <span className="hidden sm:inline">Canada</span></Link>
              <span className="text-white/30 hidden lg:inline">·</span>
              <span className="flex items-center gap-1 hidden lg:flex">🇺🇸 <span className="hidden sm:inline">USA</span></span>
            </div>
            <div className="flex items-center gap-1 md:gap-3 text-white/80">
              <span className="text-secondary font-semibold tracking-widest uppercase hidden md:block text-[10px] mr-1">We Serve</span>
              <span>🇳🇬 <span className="hidden md:inline">Nigeria</span></span>
              <span className="text-white/30 hidden md:inline">·</span>
              <span>🇬🇭 <span className="hidden md:inline">Ghana</span></span>
              <span className="text-white/30 hidden md:inline">·</span>
              <span>🇸🇱 <span className="hidden lg:inline">Sierra Leone</span><span className="lg:hidden">SL</span></span>
              <span className="text-white/30 hidden md:inline">·</span>
              <span>🇬🇲 <span className="hidden lg:inline">The Gambia</span><span className="lg:hidden">GM</span></span>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
          <Link href="/" className="flex items-center z-50">
            <TahbanLogo size="md" variant="default" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1 text-sm font-medium text-primary/80">

              {/* Home + How it Works */}
              {coreNavLinks.slice(0, 2).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`px-3 py-2 rounded-lg hover:text-secondary transition-colors ${location === link.href ? 'text-secondary font-semibold' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Destinations dropdown */}
              <li ref={destinationsRef} className="relative">
                <button
                  onClick={() => setDestinationsOpen(v => !v)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-secondary transition-colors ${isDestinationActive ? 'text-secondary font-semibold' : ''}`}
                >
                  Destinations
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destinationsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {destinationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-border p-4 z-50"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">Study Destinations</p>
                      <ul className="space-y-1.5">
                        {destinationsDropdown.map(d => (
                          <li key={d.href}>
                            <Link href={d.href} onClick={() => setDestinationsOpen(false)}
                              className={`flex items-center justify-between gap-3 px-3 py-3 rounded-xl hover:bg-muted transition-colors group ${location === d.href ? 'bg-muted font-semibold' : ''}`}>
                              <div>
                                <p className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">{d.label}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{d.sub}</p>
                              </div>
                              {d.badge && (
                                <span className="shrink-0 bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full">{d.badge}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Services dropdown */}
              <li ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen(v => !v)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-secondary transition-colors ${isServiceActive ? 'text-secondary font-semibold' : ''}`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl border border-border p-5 z-50"
                    >
                      <div className="grid grid-cols-3 gap-5 mb-4">
                        {/* Education */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2.5">Education &amp; Admissions</p>
                          <ul className="space-y-1">
                            {servicesDropdown.education.map(s => (
                              <li key={s.href}>
                                <Link href={s.href} onClick={() => setServicesOpen(false)}
                                  className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-muted transition-colors text-sm group ${location === s.href ? 'bg-muted font-semibold text-primary' : 'text-primary/80'}`}>
                                  <span className="truncate">{s.label}</span>
                                  <span className="text-xs text-secondary font-semibold shrink-0">{s.price}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Visa */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2.5">Visa Services</p>
                          <ul className="space-y-1 mb-5">
                            {servicesDropdown.visa.map(s => (
                              <li key={s.href}>
                                <Link href={s.href} onClick={() => setServicesOpen(false)}
                                  className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-muted transition-colors text-sm group ${location === s.href ? 'bg-muted font-semibold text-primary' : 'text-primary/80'}`}>
                                  <span className="truncate">{s.label}</span>
                                  <span className="text-xs text-secondary font-semibold shrink-0">{s.price}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>

                          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2.5">Accommodation &amp; Travel</p>
                          <ul className="space-y-1">
                            {servicesDropdown.travel.map(s => (
                              <li key={s.href}>
                                <Link href={s.href} onClick={() => setServicesOpen(false)}
                                  className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-muted transition-colors text-sm group ${location === s.href ? 'bg-muted font-semibold text-primary' : 'text-primary/80'}`}>
                                  <span className="truncate">{s.label}</span>
                                  <span className="text-xs text-secondary font-semibold shrink-0">{s.price}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Overview CTA */}
                        <div className="bg-primary rounded-xl p-4 flex flex-col justify-between">
                          <div>
                            <p className="font-serif font-bold text-white text-sm mb-2">View All Services &amp; Pricing</p>
                            <p className="text-white/60 text-xs leading-relaxed">Transparent pricing. Everything confirmed in writing before work begins.</p>
                          </div>
                          <Link href="/services" onClick={() => setServicesOpen(false)}
                            className="mt-4 inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
                            Full pricing table <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* About → Contact */}
              {coreNavLinks.slice(2).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`px-3 py-2 rounded-lg hover:text-secondary transition-colors ${location === link.href ? 'text-secondary font-semibold' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 ml-2">
              <Button asChild className="bg-[#25D366] hover:bg-[#20b858] text-white border-none rounded-full">
                <a href="https://wa.me/2348102164542?text=Hello%20TTEC%2C%20I%20need%20help%20with%20my%20UK%20application" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
            >
              <ul className="flex flex-col gap-5 text-lg font-serif text-primary">
                {coreNavLinks.slice(0, 2).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`block py-1 ${location === link.href ? 'text-secondary font-bold' : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Mobile Destinations toggle */}
                <li>
                  <button
                    onClick={() => setMobileDestinationsOpen(v => !v)}
                    className={`flex items-center gap-2 py-1 w-full text-left ${isDestinationActive ? 'text-secondary font-bold' : ''}`}
                  >
                    Destinations
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDestinationsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileDestinationsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 ml-3 space-y-2 border-l-2 border-secondary/30 pl-4">
                          {destinationsDropdown.map(d => (
                            <Link key={d.href} href={d.href} className="block text-sm text-muted-foreground hover:text-primary py-1">
                              {d.label}
                              <span className="block text-xs text-muted-foreground/70 mt-0.5">{d.sub}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Mobile Services toggle */}
                <li>
                  <button
                    onClick={() => setMobileServicesOpen(v => !v)}
                    className={`flex items-center gap-2 py-1 w-full text-left ${isServiceActive ? 'text-secondary font-bold' : ''}`}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 ml-3 space-y-4 border-l-2 border-secondary/30 pl-4">
                          <div>
                            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Education</p>
                            <div className="space-y-1.5">
                              {servicesDropdown.education.map(s => (
                                <Link key={s.href} href={s.href} className="flex justify-between items-center text-sm text-muted-foreground hover:text-primary py-0.5">
                                  <span>{s.label}</span>
                                  <span className="text-secondary font-semibold text-xs">{s.price}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Visa</p>
                            <div className="space-y-1.5">
                              {servicesDropdown.visa.map(s => (
                                <Link key={s.href} href={s.href} className="flex justify-between items-center text-sm text-muted-foreground hover:text-primary py-0.5">
                                  <span>{s.label}</span>
                                  <span className="text-secondary font-semibold text-xs">{s.price}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Travel</p>
                            <div className="space-y-1.5">
                              {servicesDropdown.travel.map(s => (
                                <Link key={s.href} href={s.href} className="flex justify-between items-center text-sm text-muted-foreground hover:text-primary py-0.5">
                                  <span>{s.label}</span>
                                  <span className="text-secondary font-semibold text-xs">{s.price}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                            View all services &amp; pricing <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {coreNavLinks.slice(2).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`block py-1 ${location === link.href ? 'text-secondary font-bold' : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <Button asChild className="w-full bg-[#25D366] hover:bg-[#20b858] text-white rounded-full h-12 text-base">
                  <a href="https://wa.me/2348102164542?text=Hello%20TTEC%2C%20I%20need%20help%20with%20my%20UK%20application" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Dynamic padding to account for flag bar + nav */}
      <main className={`flex-1 transition-[padding] duration-300 ${isScrolled ? 'pt-[76px]' : 'pt-[112px]'}`}>
        {children}
      </main>

      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <TahbanLogo size="md" variant="white" />
              </Link>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Connecting students and families across Africa and beyond to world-class UK and USA education and travel opportunities — with credibility, humanity, and expertise.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/olatunji-jolasun" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="https://www.facebook.com/ttec.tahban" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.youtube.com/@ttec.tahban" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
                <a href="https://www.instagram.com/ttec.tahban" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/80">
                <li><Link href="/about" className="hover:text-secondary transition-colors">About TTEC</Link></li>
                <li><Link href="/how-it-works" className="hover:text-secondary transition-colors">How it Works</Link></li>
                <li><Link href="/testimonials" className="hover:text-secondary transition-colors">Success Stories</Link></li>
                <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                <li><Link href="/news" className="hover:text-secondary transition-colors">Latest News</Link></li>
                <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              </ul>
              <h4 className="font-serif font-bold text-base mt-8 mb-4 text-secondary">Study Destinations</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                <li><Link href="/study/uk" className="hover:text-secondary transition-colors">🇬🇧 Study in the UK</Link></li>
                <li><Link href="/study/ireland" className="hover:text-secondary transition-colors">🇮🇪 Study in Ireland</Link></li>
                <li><Link href="/study/canada" className="hover:text-secondary transition-colors">🇨🇦 Study in Canada</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Our Services</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                <li><Link href="/services" className="hover:text-secondary transition-colors font-medium">All Services &amp; Pricing</Link></li>
                <li><Link href="/services/advisory" className="hover:text-secondary transition-colors">Advisory Consultation</Link></li>
                <li><Link href="/services/school-search" className="hover:text-secondary transition-colors">School Search &amp; Top 3</Link></li>
                <li><Link href="/services/admission" className="hover:text-secondary transition-colors">University Admission Support</Link></li>
                <li><Link href="/services/nursing-pathway" className="hover:text-secondary transition-colors">MSc Nursing Pathway</Link></li>
                <li><Link href="/services/premium-package" className="hover:text-secondary transition-colors">Premium Journey Package</Link></li>
                <li><Link href="/services/usa-visa" className="hover:text-secondary transition-colors">🇺🇸 USA Tourist Visa</Link></li>
                <li><Link href="/services/hotel-booking" className="hover:text-secondary transition-colors">Hotel Booking</Link></li>
                <li><Link href="/services/flight-booking" className="hover:text-secondary transition-colors">Air Flight Booking</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Contact Offices</h4>
              <div className="flex flex-col gap-6 text-sm text-white/80">
                <div>
                  <div className="font-semibold text-white mb-1">🇬🇧 Bedfordshire, United Kingdom</div>
                  <p className="text-white/60 text-xs mb-2">Principal Consultant</p>
                  <a href="tel:+447721709440" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Phone className="w-4 h-4 text-secondary" />
                    +44 7721 709440
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">🇳🇬 Lagos, Nigeria</div>
                  <p className="text-white/60 text-xs mb-2">Local Agent</p>
                  <a href="https://wa.me/2348102164542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                    +234 810 216 4542 <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full ml-1">WhatsApp</span>
                  </a>
                </div>
                <div>
                  <a href="mailto:TahbanTradingVentures@gmail.com" className="hover:text-secondary transition-colors break-all">
                    TahbanTradingVentures@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Row */}
          <div className="border-t border-white/10 pt-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">Connect with TTEC</p>
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/olatunji-jolasun" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-secondary transition-colors flex items-center gap-1.5 text-xs" aria-label="LinkedIn">
                <LinkedinIcon /> <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/ttec.tahban" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-secondary transition-colors flex items-center gap-1.5 text-xs" aria-label="Facebook">
                <FacebookIcon /> <span className="hidden sm:inline">Facebook</span>
              </a>
              <a href="https://www.youtube.com/@ttec.tahban" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-secondary transition-colors flex items-center gap-1.5 text-xs" aria-label="YouTube">
                <YoutubeIcon /> <span className="hidden sm:inline">YouTube</span>
              </a>
              <a href="https://www.instagram.com/ttec.tahban" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-secondary transition-colors flex items-center gap-1.5 text-xs" aria-label="Instagram">
                <InstagramIcon /> <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} TTEC – Tahban Travel &amp; Education Consultant. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
              <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
      <CookieConsent />
      <SiteNavSidebar />
    </div>
  );
};
