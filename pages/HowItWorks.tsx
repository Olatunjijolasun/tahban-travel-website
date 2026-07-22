import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, FileCheck, Plane, MessageSquare, Calendar, Stamp, Clock, GraduationCap, Globe, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  React.useEffect(() => {
    document.title = "How It Works - Tahban Travel Consultant";
  }, []);

  const studySteps = [
    { icon: Search, title: "1. Profiling & Selection", desc: "We assess your goals, budget, and grades, then present the Top 3 universities best suited for you." },
    { icon: PenTool, title: "2. Application & Admission", desc: "We guide you on personal statements, submit the applications, and secure your conditional offer." },
    { icon: Stamp, title: "3. Pre-CAS & Conditions", desc: "We help you meet university conditions (deposits, English tests) to secure your unconditional offer and CAS." },
    { icon: FileCheck, title: "4. Visa Preparation", desc: "Strict auditing of your financial documents (28-day rule) and mock interviews to prepare for UKVI." },
    { icon: Plane, title: "5. Arrival & Settling In", desc: "Visa approved! We provide advice on travel, accommodation, and adapting to UK life." }
  ];

  const visitSteps = [
    { icon: MessageSquare, title: "1. Eligibility Assessment", desc: "We evaluate your ties to your home country, financial capacity, and purpose of visit." },
    { icon: FileCheck, title: "2. Document Collation", desc: "We provide a strict, tailored checklist (invitation letters, bank statements, employment proofs)." },
    { icon: PenTool, title: "3. Application Submission", desc: "We complete the online UKVI form accurately, avoiding common pitfalls that lead to refusal." },
    { icon: Calendar, title: "4. Biometrics Appointment", desc: "We book your appointment at the nearest Visa Application Centre and organize your document upload." },
    { icon: Plane, title: "5. Decision & Travel", desc: "We await the decision with you, and once approved, provide pre-departure guidance." }
  ];

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <div className="bg-primary pt-24 pb-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">How It Works</h1>
          <p className="text-lg text-white/80">
            A clear, transparent process. No surprises, just expert guidance every step of the way.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Study Track */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2 text-center">Study Pathway</h2>
            <p className="text-center text-muted-foreground mb-10">The roadmap to your UK University</p>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary/50 before:to-transparent">
              {studySteps.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-border bg-white shadow-sm hover:border-secondary transition-colors">
                    <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visit Track */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2 text-center">Visit Pathway</h2>
            <p className="text-center text-muted-foreground mb-10">The roadmap to a successful UK Visit</p>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary/50 before:to-transparent">
              {visitSteps.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-border bg-white shadow-sm hover:border-primary transition-colors">
                    <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-primary mb-3">How Long Does It Take?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">Realistic timelines so you can plan with confidence. These are standard durations — we will give you a more precise estimate during your consultation based on your specific case.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Securing a University Offer</h4>
                <p className="text-3xl font-serif font-bold text-secondary mb-2">4 – 8 weeks</p>
                <p className="text-sm text-muted-foreground">From application submission to receiving a conditional or unconditional offer. Timelines vary by university — Russell Group institutions can take longer than newer universities.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Standard Visa Processing</h4>
                <p className="text-3xl font-serif font-bold text-secondary mb-2">~3 weeks</p>
                <p className="text-sm text-muted-foreground">Standard UKVI processing for both Student and Standard Visitor visas, measured from the date biometrics are submitted at the Visa Application Centre (VAC). Applies to Nigerian applicants.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Priority Visa Service</h4>
                <p className="text-3xl font-serif font-bold text-secondary mb-2">Faster</p>
                <p className="text-sm text-muted-foreground">UKVI offers Priority and Super Priority services for an additional government fee, which can significantly reduce the standard 3-week window. We advise on eligibility during your consultation.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4 mb-10">
            <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground"><strong className="text-primary">Important:</strong> These timelines do not include document preparation, bank statement seasoning (28 consecutive days required), or CAS issuance by the university. Start the process as early as possible — ideally <strong>3–6 months before</strong> your intended travel or course start date.</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Ready to take the first step?</h3>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold h-14 px-10 rounded-full">
  <Link href="/contact">
    Book Your Free Consultation
  </Link>
</Button>
        </div>
      </div>
    </div>
  );
}
