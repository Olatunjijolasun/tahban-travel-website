import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { BookOpen, Search, ListChecks, Target, GraduationCap } from 'lucide-react';

export default function SchoolSearch() {
  React.useEffect(() => {
    document.title = "School Search & Selection - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4 text-secondary" /> Study Pathway
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              School Search Report & Top 3 Selection
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Don't apply blindly. We research universities tailored to your specific profile, budget, and career goals, delivering a detailed comparative report.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why a Targeted Search Matters</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  The UK has over 160 universities. Choosing the wrong one can mean wasted application fees, a difficult studying experience, or studying a course that doesn't align with your post-study career goals.
                </p>
                <p>
                  We don't just hand you a list of "popular" schools. We dig into the specifics of your academic background, financial capacity, location preferences, and employability goals to find the perfect fit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">What You Get</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Personalized Profiling", desc: "We evaluate your grades, work experience, and long-term goals to build your unique profile." },
                  { title: "Broad Research", desc: "We scan the entire UK landscape for institutions offering your desired course at the right level." },
                  { title: "Comprehensive PDF Report", desc: "A professionally written, structured PDF document comparing tuition, living costs, and entry requirements for each option." },
                  { title: "The Top 3 Recommendations", desc: "We narrow the research down to our 3 strongest recommendations for your profile — with a clear rationale for each." },
                  { title: "Included Advisory Session", desc: "A one-on-one advisory session is included so we can walk you through the report, answer your questions, and plan next steps." },
                  { title: "Scholarship Guidance", desc: "We flag any available scholarships or funding opportunities at your shortlisted institutions." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <ListChecks className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-muted p-8 rounded-2xl">
              <h3 className="font-serif font-bold text-xl text-primary mb-4">Our Methodology</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Target className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-muted-foreground">Matching your exact academic credentials to university entry requirements.</span>
                </li>
                <li className="flex gap-3">
                  <Target className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-muted-foreground">Analyzing tuition fees against your declared budget and identifying potential scholarships.</span>
                </li>
                <li className="flex gap-3">
                  <Target className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-muted-foreground">Evaluating city living costs (London vs. Regional UK).</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <GraduationCap className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Standalone service or bundled with Admission Support.</p>
              
              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-primary">£100</div>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Final fees are confirmed in writing after your free consultation, based on your specific case. Government, university, and UKVI fees are separate and paid directly by you to the relevant institution.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex items-center gap-2"><CheckIcon /> 1-on-1 profiling session</li>
                <li className="flex items-center gap-2"><CheckIcon /> Full comparative report</li>
                <li className="flex items-center gap-2"><CheckIcon /> 3 recommended options</li>
                <li className="flex items-center gap-2"><CheckIcon /> Delivery in 3-5 working days</li>
              </ul>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
  <Link href="/contact">
    Request this Service
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
