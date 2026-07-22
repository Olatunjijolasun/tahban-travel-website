import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, ChevronDown, ExternalLink, MessageSquare, MapPin,
  BookOpen, Briefcase, Clock, PoundSterling, Home, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UKUniversitySearch } from '@/components/UKUniversitySearch';

/* ── key stats ─────────────────────────────────────────────────────── */
const stats = [
  { icon: PoundSterling, label: 'Tuition Fees', value: '£10,000 – £38,000', sub: 'per year (UG/PG)' },
  { icon: Home,          label: 'Living Costs', value: '£12,000 – £18,000', sub: 'per year (est.)' },
  { icon: Clock,         label: 'Intakes',       value: 'September & January', sub: 'most programmes' },
  { icon: Briefcase,     label: 'Work Rights',   value: 'Up to 20 hrs/week', sub: 'during term time' },
];

const whyChoose = [
  { title: 'World-Ranked Universities', body: "Four of the world's top 10 universities — UCL, Oxford, Cambridge, and Imperial — are in the UK. Russell Group institutions are globally recognised by employers." },
  { title: 'Shorter Degrees', body: "UK undergraduate degrees take 3 years (4 in Scotland) and master's programmes typically 1 year, saving significant time and money compared to other English-speaking countries." },
  { title: 'Graduate Route Visa', body: 'After completing your degree, you can remain in the UK for 2 years (3 for PhD graduates) to work or look for work under the Graduate Route visa.' },
  { title: 'Diverse Student Community', body: 'Over 600,000 international students study in the UK each year, from 200+ countries. You will find a welcoming and multicultural environment at every institution.' },
  { title: 'NHS Clinical Placements', body: 'For healthcare students — especially Nursing — the UK offers direct NHS hospital placements as part of your degree, giving unmatched hands-on clinical experience.' },
  { title: 'Strong African Alumni Networks', body: 'Thousands of Nigerian, Ghanaian, Sierra Leonean and Gambian graduates have built successful careers after studying in the UK. TTEC connects you to that network.' },
];

const popularCourses = [
  'Nursing & Midwifery', 'Business Administration', 'Computer Science', 'Engineering',
  'Law', 'Finance & Accounting', 'Medicine & Dentistry', 'Data Science & AI',
  'Public Health', 'Architecture', 'Social Work', 'Pharmacy',
];

const ukServices = [
  { label: 'Advisory Consultation', href: '/services/advisory', price: '£50', desc: 'One-to-one session to map your study pathway' },
  { label: 'School Search & Top 3 Report', href: '/services/school-search', price: '£100', desc: 'Curated shortlist of your best-fit UK universities' },
  { label: 'University Admission Support',   href: '/services/admission', price: '£350', desc: 'Full application support from UCAS to offer' },
  { label: 'MSc Nursing Transition Pathway', href: '/services/nursing-pathway', price: '£750', desc: 'Specialist package for overseas-trained nurses' },
  { label: 'Premium Journey Package',        href: '/services/premium-package', price: '£900', desc: 'End-to-end admissions, visa & accommodation' },
  { label: 'Student Visa Guidance',          href: '/services/visa-guide', price: '£300', desc: 'CAS, financial evidence & biometrics support' },
];

export default function StudyUK() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-[#1a3a6e] to-[#0d2347] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F5C842 0%, transparent 60%)' }} />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              🇬🇧 Primary Destination
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Study in the United Kingdom
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              The UK remains the world's most sought-after destination for international students — combining centuries of academic excellence with modern career opportunities. TTEC specialises in getting you there.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-8">
                <Link href="/services/advisory">Start Your Application</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                <p className="font-serif font-bold text-primary text-lg leading-tight">{value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose the UK */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Why the UK?
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Why Students Choose the United Kingdom
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From Russell Group prestige to the Graduate Route visa, the UK offers a compelling package for international students.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                <div className="w-2 h-8 rounded-full bg-secondary mb-4" />
                <h3 className="font-serif font-bold text-primary text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Search */}
      <UKUniversitySearch />

      {/* Popular Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Programmes
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Popular UK Courses</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Among international students from West Africa, these subjects are most in demand at UK universities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {popularCourses.map(course => (
              <span key={course}
                className="px-5 py-2.5 rounded-full bg-white border border-secondary/20 text-primary text-sm font-medium shadow-sm hover:border-secondary hover:shadow-md transition-all cursor-default">
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Key Facts at a Glance</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-semibold">Category</th>
                  <th className="text-left px-6 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Undergraduate Tuition', '£10,000 – £38,000/year (avg. £14,000–£22,000)'],
                  ['Postgraduate Tuition', '£12,000 – £30,000/year (avg. £15,000–£20,000)'],
                  ['Living Costs', '£12,000 – £18,000/year (London higher)'],
                  ['Degree Duration', '3 years UG (4 in Scotland) · 1 year PG (taught)'],
                  ['Intakes', 'September (main) · January (some courses)'],
                  ['Work Rights', 'Up to 20 hours/week during term; full-time in vacations'],
                  ['Post-Study Visa', 'Graduate Route — 2 years (3 for PhD)'],
                  ['English Requirement', 'Many UK universities accept WAEC or NECO English Language results as evidence of English proficiency for eligible applicants, depending on the university\'s admission policy. Where required, applicants may also submit recognised English language qualifications such as IELTS or equivalent tests.'],
                  ['Application Route', 'UCAS (UG) · Direct to university (PG)'],
                  ['Official Resource', 'UCAS.com · Study UK (British Council)'],
                ].map(([cat, detail]) => (
                  <tr key={cat} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">{cat}</td>
                    <td className="px-6 py-4 text-muted-foreground">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            * Figures are indicative. Always verify with your chosen institution.
          </p>
        </div>
      </section>

      {/* TTEC UK Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4" />
              TTEC Services
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              How TTEC Helps You Get to the UK
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From your first advisory session to landing at Heathrow — we're with you every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {ukServices.map(({ label, href, price, desc }) => (
              <Link key={href} href={href}
                className="group bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-secondary hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif font-bold text-primary text-sm group-hover:text-secondary transition-colors leading-tight">{label}</span>
                  <span className="text-secondary font-bold text-sm shrink-0 ml-2">{price}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-secondary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-10">
              <Link href="/services">View All Services &amp; Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Ready to Begin?</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Start Your UK Journey With TTEC
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Book a £50 advisory consultation and let us map out your personalised pathway to a UK university.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-8">
              <Link href="/services/advisory">Book Advisory — £50</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
              <Link href="/contact">Contact TTEC</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
