import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Stethoscope, CheckCircle, AlertTriangle, BookOpen, GraduationCap, FileText } from 'lucide-react';

export default function NursingPathway() {
  React.useEffect(() => {
    document.title = "MSc Adult Nursing Transition Pathway – TTEC Tahban Travel & Education Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4 text-secondary" /> Specialist Pathway
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              MSc Adult Nursing Transition Pathway Package
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Specialist support for non-nursing graduates progressing into UK MSc Adult Nursing programmes — from eligibility assessment to interview preparation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            {/* Who is this for */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Who is This Pathway For?</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p>
                  The MSc Adult Nursing programme in the UK is a two-year graduate-entry route that allows qualified graduates from non-nursing disciplines — such as health sciences, psychology, biology, or social care — to qualify as a Registered Nurse (RN) without completing a full undergraduate nursing degree.
                </p>
                <p>
                  It is an ideal route for internationally educated professionals, healthcare workers, and ambitious graduates who want to enter the UK nursing profession via a faster, postgraduate pathway. However, the application process is complex: universities assess not just your academic record, but your clinical evidence, Recognition of Prior Learning (RPL) portfolio, and personal readiness for a demanding healthcare programme.
                </p>
                <p>
                  TTEC provides specialist end-to-end support to help you navigate every stage successfully.
                </p>
              </div>
            </section>

            {/* What's included */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">What's Included in Your Package</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "Eligibility Assessment",
                    desc: "We review your academic background, degree classification, relevant work or care experience, and English language qualifications to confirm your eligibility for MSc Adult Nursing programmes and identify the best-fit universities."
                  },
                  {
                    icon: FileText,
                    title: "Recognition of Prior Learning (RPL) Preparation",
                    desc: "Many universities require an RPL portfolio demonstrating how your previous learning and experience maps to nursing competencies. We guide you on how to structure this evidence effectively, in line with NMC and institutional requirements."
                  },
                  {
                    icon: BookOpen,
                    title: "Evidence & Portfolio Guidance",
                    desc: "We help you identify, organise, and present supporting evidence — clinical or care placements, academic work, professional references, and personal statement — to the standard required for your shortlisted institutions."
                  },
                  {
                    icon: GraduationCap,
                    title: "University Application Support",
                    desc: "Full application management including university shortlisting, form completion, document submission, and proactive liaison with the admissions team to track your application status."
                  },
                  {
                    icon: Stethoscope,
                    title: "Interview Preparation",
                    desc: "MSc Nursing applications often include an admissions interview or selection day. We run tailored mock interview sessions, coaching you on how to present your motivations, clinical understanding, and professional readiness with confidence."
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

            {/* Important note */}
            <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <h3 className="font-serif font-bold text-xl text-amber-900">Important Note on NMC Registration</h3>
              </div>
              <p className="text-amber-800 text-sm leading-relaxed">
                TTEC provides consultancy and application support only. We do not make university admission decisions. Nursing Council (NMC) registration assessments are conducted independently by the universities and the NMC. We help you build the strongest possible application; the final admission decision rests with the institution.
              </p>
            </section>

            {/* Entry requirements */}
            <section className="bg-muted p-8 rounded-2xl">
              <h3 className="font-serif font-bold text-xl text-primary mb-4">Typical Entry Requirements</h3>
              <ul className="space-y-3">
                {[
                  "An undergraduate degree (typically 2:1 or above) in a health-related, science, or social care discipline",
                  "Evidence of care or healthcare-related experience (clinical or non-clinical)",
                  "English language proficiency (IELTS 7.0+ with no component below 6.5, or equivalent)",
                  "Personal statement demonstrating motivation for nursing and readiness for the clinical environment",
                  "Two academic or professional references",
                  "Occupational health clearance and DBS check (arranged after offer acceptance)",
                ].map((req, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <Stethoscope className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Specialist support for non-nursing graduates entering UK MSc Adult Nursing.</p>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  ★ Specialist Package
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Package Fee</div>
                <div className="text-4xl font-bold text-primary">£750</div>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Final fee confirmed in writing after your initial assessment. University application fees, DBS, occupational health, and UKVI fees are separate and paid directly by you.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                {[
                  "Eligibility assessment",
                  "RPL portfolio guidance",
                  "Personal statement support",
                  "University application management",
                  "Mock interview sessions",
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
