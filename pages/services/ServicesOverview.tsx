import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  MessageSquare, Search, BookOpen, Stethoscope, Star,
  FileCheck, Globe, BedDouble, Building, Plane, ArrowRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const pricingRows = [
  {
    service: "Initial Advisory Consultation",
    price: "£50",
    what: "Personalised assessment of your academic background, career goals, study options, and recommended next steps",
    href: "/services/advisory",
    tag: "Education"
  },
  {
    service: "School Search Report & Top 3 University Selection",
    price: "£100",
    what: "Research and recommendation of suitable universities based on your qualifications, preferred course, location, budget, and career objectives",
    href: "/services/school-search",
    tag: "Education"
  },
  {
    service: "University Admission Support",
    price: "£350",
    what: "End-to-end application support for universities in the United Kingdom, Ireland, and Canada, including university selection, personal statement guidance, document review, and application submission support",
    href: "/services/admission",
    tag: "Education"
  },
  {
    service: "MSc Adult Nursing Transition Pathway Package",
    price: "£750",
    what: "Specialist support for non-nursing graduates progressing into UK MSc Adult Nursing programmes, including eligibility assessment, RPL preparation, evidence guidance, university application support, and interview preparation",
    href: "/services/nursing-pathway",
    tag: "Specialist"
  },
  {
    service: "Premium International Student Journey Package",
    price: "£900",
    what: "Complete support journey covering university search, admission support, specialist pathway support (where applicable), visa readiness, accommodation guidance, and pre-arrival preparation",
    href: "/services/premium-package",
    tag: "Premium"
  },
  {
    service: "Student Visa Guidance",
    price: "£300",
    what: "Professional student visa guidance, document review, application preparation, and submission support for the United Kingdom, Ireland, and Canada",
    href: "/services/visa-guide",
    tag: "Visa"
  },
  {
    service: "USA Tourist Visa (B-2) Guidance",
    price: "£350",
    what: "Visitor visa application support, supporting document review, travel purpose guidance, and interview preparation",
    href: "/services/usa-visa",
    tag: "Visa"
  },
  {
    service: "Student Accommodation Support",
    price: "£50",
    what: "Assistance identifying suitable accommodation options",
    href: "/services/student-accommodation",
    tag: "Travel"
  },
  {
    service: "Hotel Booking Support",
    price: "£50",
    what: "Short-term accommodation booking assistance",
    href: "/services/hotel-booking",
    tag: "Travel"
  },
  {
    service: "Flight Booking Support",
    price: "£50",
    what: "Flight search and booking assistance",
    href: "/services/flight-booking",
    tag: "Travel"
  },
];

const tagColours: Record<string, string> = {
  Education: "bg-blue-50 text-blue-700 border-blue-200",
  Specialist: "bg-purple-50 text-purple-700 border-purple-200",
  Premium: "bg-amber-50 text-amber-700 border-amber-200",
  Visa: "bg-green-50 text-green-700 border-green-200",
  Travel: "bg-sky-50 text-sky-700 border-sky-200",
};

const serviceCards = [
  { icon: MessageSquare, title: "Initial Advisory Consultation", price: "£50", href: "/services/advisory", color: "#2c3e6b", desc: "One-on-one personalised assessment of your goals and recommended next steps." },
  { icon: Search,        title: "School Search & Top 3",         price: "£100", href: "/services/school-search", color: "#2c7a4b", desc: "Targeted research & shortlist of the 3 UK universities best matched to your profile." },
  { icon: BookOpen,      title: "University Admission Support",   price: "£350", href: "/services/admission", color: "#2c3e6b", desc: "End-to-end application support for UK, Ireland, and Canada — personal statement, document review, and university liaison." },
  { icon: Stethoscope,   title: "MSc Adult Nursing Pathway",      price: "£750", href: "/services/nursing-pathway", color: "#7b2d8b", desc: "Specialist support for non-nursing graduates entering UK MSc Adult Nursing." },
  { icon: Star,          title: "Premium Journey Package",        price: "£900", href: "/services/premium-package", color: "#c8880a", desc: "Complete end-to-end support: search, admission, visa, accommodation, and pre-arrival." },
  { icon: FileCheck,     title: "Student Visa Guidance",          price: "£300", href: "/services/visa-guide", color: "#1a6b5a", desc: "Professional student visa guidance for UK, Ireland, and Canada — document audit and submission support." },
  { icon: Globe,         title: "USA Tourist Visa (B-2)",         price: "£350", href: "/services/usa-visa", color: "#1a3a6b", desc: "DS-160, document assembly, MRV guidance, and mock interview preparation." },
  { icon: BedDouble,     title: "Student Accommodation",         price: "£50",  href: "/services/student-accommodation", color: "#5a3a1a", desc: "Verified accommodation sourcing near your UK university." },
  { icon: Building,      title: "Hotel Booking",                  price: "£50",  href: "/services/hotel-booking", color: "#2a5a7b", desc: "Best-rate hotel sourcing including refundable reservation letters for visas." },
  { icon: Plane,         title: "Air Flight Booking",             price: "£50",  href: "/services/flight-booking", color: "#1a5a3b", desc: "Fare comparison, route optimisation, and confirmed flight booking support." },
];

export default function ServicesOverview() {
  React.useEffect(() => {
    document.title = "Our Services & Pricing – TTEC Tahban Travel & Education Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
            TTEC – Services & Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Education, Visa &amp; Travel Support Services
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Transparent pricing. No hidden costs. Everything confirmed in writing before work begins.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">

        {/* ── Service Cards Grid ── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">All Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Choose the level of support that fits your journey — from a single advisory session to a complete end-to-end package.</p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial" whileInView="animate" viewport={{ once: true }}
            variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
          >
            {serviceCards.map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={s.href} className="block bg-white border border-border rounded-2xl p-6 hover:border-secondary hover:shadow-lg transition-all group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: `${s.color}18`, color: s.color }}
                    >
                      <s.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-secondary">{s.price}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-primary mb-2 leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Pricing Table ── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Pricing Structure</p>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">TTEC Website Pricing Structure</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              All fees are confirmed in writing after your free consultation. Government, university, and UKVI fees are separate and paid directly by you to the relevant institution.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-semibold w-[38%]">Service</th>
                  <th className="text-left px-6 py-4 font-semibold w-[14%]">Price (GBP)</th>
                  <th className="text-left px-6 py-4 font-semibold">What We Provide</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? 'bg-white' : 'bg-muted/30'} hover:bg-secondary/5 transition-colors`}>
                    <td className="px-6 py-4">
                      <Link href={row.href} className="font-semibold text-primary hover:text-secondary transition-colors leading-tight flex flex-col gap-1.5">
                        {row.service}
                        <span className={`inline-flex w-fit text-[10px] font-bold px-2 py-0.5 rounded-full border ${tagColours[row.tag]}`}>
                          {row.tag}
                        </span>
                      </Link>
                    </td>
                    <td className="px-6 py-4 font-bold text-secondary whitespace-nowrap">{row.price}</td>
                    <td className="px-6 py-4 text-muted-foreground leading-relaxed">{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {pricingRows.map((row, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Link href={row.href} className="font-semibold text-primary hover:text-secondary text-sm leading-snug flex-1">
                    {row.service}
                  </Link>
                  <span className="font-bold text-secondary text-sm whitespace-nowrap">{row.price}</span>
                </div>
                <span className={`inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full border mb-2 ${tagColours[row.tag]}`}>
                  {row.tag}
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">{row.what}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Start with a free initial conversation. We'll assess your situation and recommend exactly what level of support makes sense for you — with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold h-14 px-10 rounded-full">
              <Link href="/contact">Request a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 h-14 px-8 rounded-full">
              <a href="https://wa.me/2348102164542" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
