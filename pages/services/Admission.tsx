import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, CheckCircle, GraduationCap, PenTool, Search } from 'lucide-react';
import campusImg from "@assets/generated_images/campus.jpg";

export default function Admission() {
  React.useEffect(() => {
    document.title = "School Admission Support - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={campusImg} alt="UK Campus" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 text-secondary" /> Study Pathway
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              School Admission & Application Support
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              From crafting a compelling personal statement to securing your unconditional offer and CAS. We manage the entire application pipeline.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Securing Your Place</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  UK university admissions are highly competitive. An incomplete application, a weak personal statement, or missing reference letters can result in an instant rejection, delaying your plans by an entire academic year.
                </p>
                <p>
                  Our Admission Support service takes the burden off your shoulders. We act as your liaison with the universities, ensuring every document meets their strict standards before submission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">What's Included</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Search,
                    title: "School Search & Recommendation",
                    desc: "Includes our full School Search Report — we research UK institutions matched to your profile, budget, and goals and deliver a comprehensive PDF report with our Top 3 recommendations."
                  },
                  {
                    icon: FileText,
                    title: "Application Preparation & Submission",
                    desc: "We complete and review all application portals, ensuring zero errors and all supporting documents — including degree certificates and transcripts — are correctly presented."
                  },
                  {
                    icon: PenTool,
                    title: "Personal Statement Support",
                    desc: "Guidance on structuring and editing your personal statement to highlight your strengths, motivations, and relevance to the course."
                  },
                  {
                    icon: GraduationCap,
                    title: "Offer Letter Management",
                    desc: "Tracking conditional offers and advising on exactly how to meet conditions (degree certificates, English tests, and any additional requirements)."
                  },
                  {
                    icon: CheckCircle,
                    title: "CAS Processing",
                    desc: "Guiding you through pre-CAS interviews and document checks required by the university to issue your Confirmation of Acceptance for Studies."
                  },
                  {
                    icon: BookOpen,
                    title: "Visa Application Guide — Included",
                    desc: "Full Admission Support includes our Visa Application Guide service: structured, step-by-step guidance through the UK Student Visa process once your offer is secured."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl border border-border shadow-sm">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
              <h3 className="font-serif font-bold text-xl text-primary mb-4">A Note on Scholarships</h3>
              <p className="text-muted-foreground mb-0">
                While we do not guarantee funding, our team provides robust guidance on available university-specific scholarships and early-bird discounts. We assist in preparing scholarship essays to maximize your chances of receiving financial support.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <BookOpen className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Comprehensive end-to-end admission handling.</p>
              
              <div className="mb-6 pb-6 border-b border-border">
                <div className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  ★ Full Package
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-primary">£350</div>
                <p className="text-xs text-muted-foreground mt-1 font-medium">End-to-end admission support: search, application &amp; management</p>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Final fees are confirmed in writing after your free consultation, based on your specific case complexity. Government, university, and UKVI fees are separate and paid directly by you to the relevant institution.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2"><CheckIcon /> Full application management</li>
                <li className="flex items-center gap-2"><CheckIcon /> Document verification</li>
                <li className="flex items-center gap-2"><CheckIcon /> Personal statement review</li>
                <li className="flex items-center gap-2"><CheckIcon /> University liaison</li>
                <li className="flex items-center gap-2"><CheckIcon /> CAS procurement guidance</li>
              </ul>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
  <Link href="/contact">
    Start Your Application
  </Link>
</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
