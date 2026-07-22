import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Globe, AlertTriangle, CheckCircle, Plane, FileCheck } from 'lucide-react';
import docsImg from "@assets/generated_images/documents.jpg";

export default function UsaVisa() {
  React.useEffect(() => {
    document.title = "USA Tourist Visa - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={docsImg} alt="USA Visa Documents" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 text-secondary" /> USA Travel
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              USA Tourist Visa (B-2)
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Expert guidance through the US Embassy B-2 nonimmigrant visa process — from DS-160 completion to interview preparation and document assembly.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">The USA B-2 Visa — What You Need to Know</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p>
                  The US B-2 Tourist Visa allows Nigerians and West Africans to visit the United States for tourism, family visits, medical treatment, or short recreational purposes. Unlike UK visas, the US process is interview-based — every applicant must attend a consular interview at the US Embassy in Abuja or the Consulate in Lagos.
                </p>
                <p>
                  Approval depends heavily on demonstrating strong ties to your home country, sufficient financial capacity, and the credibility of your stated purpose. A poorly prepared DS-160 or missing documents on interview day can result in immediate refusal with a visa ban.
                </p>
              </div>
            </section>

            {/* B-2 Tourist Visa Section */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">B-2 Tourist / Visitor Visa</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary mb-3">Document Checklist:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Valid passport (valid for at least 6 months beyond your intended stay)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Completed DS-160 online application (confirmation page required at interview)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> MRV visa application fee payment receipt</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> US Embassy interview appointment confirmation letter</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Recent passport photograph (US visa photo specifications)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Proof of sufficient funds (bank statements — minimum 3 months)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Employment letter, payslips, or business registration & tax records</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Degree certificate or evidence of professional status</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Evidence of ties to home country (property, family, employment contract)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Invitation letter (if visiting family or friends in the USA)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Hotel bookings / travel itinerary (where applicable)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Previous visa stamps (UK, Schengen, or other) — strengthens the application</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Police Report (if applicable)</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                  <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                    <FileCheck className="w-4 h-4" /> Interview Preparation
                  </h4>
                  <p className="text-sm text-amber-800">The consular interview is the most critical part of the US visa process. We run mock interview sessions to prepare you for likely questions about your finances, travel purpose, and ties to Nigeria.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4" /> Common Mistakes Avoided
                  </h4>
                  <p className="text-sm text-red-700">Inconsistencies between the DS-160 and supporting documents; inability to explain travel purpose clearly; unexplained large deposits; no evidence of compelling reasons to return to Nigeria after the trip.</p>
                </div>
              </div>
            </section>

            {/* Process Overview */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Process, Step by Step</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Eligibility & Profile Assessment", desc: "We evaluate your financial profile, travel history, and home-country ties to assess realistic approval chances before you pay any fees." },
                  { step: "2", title: "DS-160 Form Completion", desc: "We prepare and complete your DS-160 application accurately, avoiding the inconsistencies that trigger automatic refusals." },
                  { step: "3", title: "Fee Payment & Appointment Booking", desc: "We guide you through paying the MRV fee and scheduling your Embassy interview in Abuja or the Consulate in Lagos." },
                  { step: "4", title: "Document Assembly & Audit", desc: "Full review of every supporting document against the consular officer's expectations. Nothing goes to the interview unchecked." },
                  { step: "5", title: "Mock Interview Preparation", desc: "We simulate the interview environment, coaching you on confident, honest, and concise answers to standard and tricky questions." },
                  { step: "6", title: "Post-Interview Support", desc: "If approved: we advise on ESTA (if applicable), travel tips, and hotel bookings. If refused: we advise on next steps and reapplication strategy." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary text-secondary font-bold font-serif flex items-center justify-center shrink-0 text-lg">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <Globe className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Full USA B-2 visa application support including interview prep.</p>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-primary">£350</div>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Final fees are confirmed in writing after your free consultation, based on your specific case complexity. US Embassy MRV fees and any other government fees are separate and paid directly by you.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2"><CheckIcon /> Eligibility & Risk Assessment</li>
                <li className="flex items-center gap-2"><CheckIcon /> DS-160 Form Completion</li>
                <li className="flex items-center gap-2"><CheckIcon /> Document Assembly & Audit</li>
                <li className="flex items-center gap-2"><CheckIcon /> Mock Interview Sessions</li>
                <li className="flex items-center gap-2"><CheckIcon /> Appointment Booking Guidance</li>
                <li className="flex items-center gap-2"><CheckIcon /> Post-Decision Support</li>
              </ul>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
                <Link href="/contact">
                  Start USA Visa Process
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
