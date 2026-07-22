import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, GraduationCap, FileCheck, BedDouble, Plane, BookOpen } from 'lucide-react';

export default function PremiumPackage() {
  React.useEffect(() => {
    document.title = "Premium International Student Journey Package – TTEC Tahban Travel & Education Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-secondary" /> Premium Package
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Premium International Student Journey Package
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Our most comprehensive offering — complete end-to-end support from university search through to arrival in the UK. One package, one dedicated handler, zero gaps.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Everything in One Place</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p>
                  The Premium International Student Journey Package is designed for students and families who want to hand off the entire process to a trusted expert — from the first search for universities to the day they arrive in the UK ready to study.
                </p>
                <p>
                  This package removes the need to coordinate multiple services yourself. One fixed package fee, one dedicated TTEC case handler who knows your file inside out, and a structured process that takes you from enquiry to arrival without gaps, delays, or uncertainty.
                </p>
              </div>
            </section>

            {/* What's included */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">What's Covered</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    title: "University Search & Selection",
                    desc: "Full School Search Report — research and recommendation of up to 3 suitable UK universities matched to your profile, qualifications, budget, and career objectives, delivered as a comprehensive PDF report."
                  },
                  {
                    icon: GraduationCap,
                    title: "Admission Application Support",
                    desc: "End-to-end university application management: form completion, personal statement guidance, document review, submission, offer tracking, and university liaison until your unconditional offer and CAS are secured."
                  },
                  {
                    icon: Star,
                    title: "Specialist Pathway Support (where applicable)",
                    desc: "For students entering specialist programmes (such as MSc Adult Nursing or healthcare conversion routes), additional eligibility assessment and RPL preparation is included where relevant to your course."
                  },
                  {
                    icon: FileCheck,
                    title: "Visa Readiness & Application Guidance",
                    desc: "Full UK Student Visa guidance: document checklist, financial evidence review, 28-day rule compliance check, application readiness support, and submission guidance to UKVI — ensuring your application is flawless."
                  },
                  {
                    icon: BedDouble,
                    title: "Accommodation Guidance",
                    desc: "Verified student accommodation sourcing based on your university, preferred location, and budget. We confirm availability, check contract terms, and guide you through the booking process before you arrive."
                  },
                  {
                    icon: Plane,
                    title: "Pre-Arrival Preparation",
                    desc: "Practical pre-arrival briefing covering: what to bring, airport transfers, UK bank account guidance, NHS surcharge, and first-week essentials — so you arrive prepared, not confused."
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-border shadow-sm">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why premium */}
            <section className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8">
              <h3 className="font-serif font-bold text-xl text-primary mb-4">Why Choose the Premium Package?</h3>
              <ul className="space-y-3">
                {[
                  "One dedicated TTEC handler manages your case from start to finish",
                  "No need to coordinate multiple services or track multiple deadlines",
                  "Designed for students who need full cover and peace of mind",
                  "Suitable for first-time international students and families unfamiliar with the UK system",
                  "Includes specialist pathway support where your course requires it",
                  "Covers the full journey — search, admission, visa, accommodation, and arrival",
                ].map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <Star className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Our most comprehensive end-to-end student journey package.</p>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  ★ Premium Package
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Package Fee</div>
                <div className="text-3xl font-bold text-primary">£900</div>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Final fee confirmed in writing after your initial consultation. Government, university, and UKVI fees are separate and paid directly by you.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                {[
                  "University search & School Search report",
                  "Full admission application management",
                  "Specialist pathway support (where applicable)",
                  "Student Visa guidance (UK, Ireland & Canada)",
                  "Accommodation sourcing",
                  "Pre-arrival briefing",
                  "Dedicated TTEC case handler",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
                <Link href="/contact">Enquire About This Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
