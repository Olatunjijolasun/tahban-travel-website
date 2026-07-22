import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { FileCheck, AlertTriangle, CheckCircle, Plane, GraduationCap } from 'lucide-react';
import docsImg from "@assets/generated_images/documents.jpg";

export default function VisaGuide() {
  React.useEffect(() => {
    document.title = "Visa Application Guide - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={docsImg} alt="Visa Documents" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <FileCheck className="w-4 h-4 text-secondary" /> Final Stage
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Visa Application Guide
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Meticulous, structured guidance through the UKVI process to ensure your documentation is flawless and your confidence is high.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Margin for Error is Zero</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  UK Visas and Immigration (UKVI) operates on strict guidelines. A single missing bank statement page, an incorrectly formatted sponsor letter, or a misunderstood question on the online form can lead to a costly refusal.
                </p>
                <p>
                  We don't just "fill forms". We audit your financial documents, advise on the correct presentation of your ties to your home country, and prepare you for any credibility interviews.
                </p>
              </div>
            </section>

            {/* Study Visa Section */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">UK Study Visa (Student Route)</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary mb-3">Document Checklist:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Valid passport</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> CAS reference number from your university</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Bank statements — 28-day financial evidence (28-day rule compliance)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Degree certificate(s) and academic transcripts</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> English language test results (e.g. IELTS)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> TB Test results and ATAS certificate (if applicable)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Police Report (if applicable)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Online form completion & submission support</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Credibility Interview Prep (mock sessions)</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4" /> Common Mistakes Avoided
                  </h4>
                  <p className="text-sm text-red-700">Funds dropping below the required threshold for even one day during the 28-day period; using unapproved financial institutions.</p>
                </div>
              </div>
            </section>

            {/* Visit Visa Section */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">UK Visit Visa (Standard Visitor)</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary mb-3">Document Checklist:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Valid passport</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Proof of sufficient funds (bank statements)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Degree certificate or evidence of professional status</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Employment letter, payslips, or business registration</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Sponsorship & invitation letter (if sponsored)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Hotel bookings / travel itinerary</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Evidence of ties to home country (property, family)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Police Report (if applicable)</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Clear travel itinerary & purpose formulation</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                  <h4 className="font-bold text-red-800 flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4" /> Common Mistakes Avoided
                  </h4>
                  <p className="text-sm text-red-700">Unexplained large deposits in bank accounts; failure to prove intent to return home; mismatched travel history.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <FileCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Comprehensive visa application management.</p>
              
              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-primary">£300</div>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Final fees are confirmed in writing after your free consultation, based on your specific case complexity. Government, university, and UKVI fees are separate and paid directly by you to the relevant institution.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2"><CheckIcon /> Eligibility & Risk Assessment</li>
                <li className="flex items-center gap-2"><CheckIcon /> Bespoke Document Checklist</li>
                <li className="flex items-center gap-2"><CheckIcon /> Form Completion</li>
                <li className="flex items-center gap-2"><CheckIcon /> Biometrics Appointment Booking</li>
                <li className="flex items-center gap-2"><CheckIcon /> Decision Follow-up</li>
              </ul>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
  <Link href="/contact">
    Start Visa Process
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
