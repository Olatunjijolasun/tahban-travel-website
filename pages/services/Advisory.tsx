import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { MessageSquare, Compass, Briefcase, Home } from 'lucide-react';

export default function Advisory() {
  React.useEffect(() => {
    document.title = "Advisory Services - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 text-secondary" /> Expert Guidance
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Strategic Advisory Services
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Confidential, one-on-one sessions to map out your study pathways, career shifts, and relocation strategies with someone who understands the landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Clarity Before You Commit</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  Sometimes you don't need full application support yet—you just need a roadmap. Our advisory sessions are designed to answer your specific questions, clear up misconceptions, and give you a realistic assessment of your options.
                </p>
                <p>
                  We strip away the noise and give you actionable advice based on current UK immigration rules and academic trends.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Advisory Focus Areas</h2>
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex gap-6 items-start">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0">
                    <Compass className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Study Pathway Advisory</h3>
                    <p className="text-muted-foreground">Guidance on foundation, undergraduate, pre-masters, or postgraduate routes. Assessing what your current qualifications make you eligible for in the UK system.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex gap-6 items-start">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Career & Course Advisory</h3>
                    <p className="text-muted-foreground">Are you a mature professional looking to pivot? We advise on which master's degrees align best with your career goals and have high employability prospects in the UK.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex gap-6 items-start">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Relocation & Settling-in</h3>
                    <p className="text-muted-foreground">Practical advice for families moving to the UK. We cover accommodation realities, understanding the NHS surcharge, schooling for dependents, and bringing your spouse.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <MessageSquare className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Book a Session</h3>
              <p className="text-muted-foreground mb-6">Available as a standalone call or bundled package.</p>
              
              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Advisory Consultation Fee</div>
                <div className="text-4xl font-bold text-primary">£50</div>
                <div className="text-xs text-muted-foreground mt-3 italic bg-muted p-3 rounded">
                  Final fee confirmed in writing after your free initial conversation. Government, university, and UKVI fees are separate and paid directly by you to the relevant institution.
                </div>
              </div>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
  <Link href="/contact">
    Schedule Consultation
  </Link>
</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
