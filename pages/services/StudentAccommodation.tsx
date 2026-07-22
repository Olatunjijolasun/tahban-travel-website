import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Home, CheckCircle, GraduationCap, MapPin, Clock, ShieldCheck, AlertTriangle, Star } from 'lucide-react';
import studyImg from "@assets/generated_images/study.jpg";

export default function StudentAccommodation() {
  React.useEffect(() => {
    document.title = "Student Accommodation - Tahban Travel & Education Consultancy";
  }, []);

  const cities = [
    { name: "London", unis: ["University of Greenwich", "Brunel University", "Kingston University"], types: "Private halls, shared houses, studio flats" },
    { name: "Luton / Bedfordshire", unis: ["University of Bedfordshire", "Cranfield University"], types: "Student halls, private accommodation, home-stays" },
    { name: "Manchester", unis: ["University of Manchester", "Manchester Metropolitan"], types: "Student villages, private en-suites, shared flats" },
    { name: "Birmingham", unis: ["University of Birmingham", "Aston University", "BCU"], types: "Purpose-built student accommodation (PBSA), houses" },
    { name: "Leicester", unis: ["University of Leicester", "De Montfort University"], types: "On-campus halls, private student accommodation" },
    { name: "Coventry", unis: ["Coventry University"], types: "University halls, private apartments" },
  ];

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={studyImg} alt="Student accommodation" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4 text-secondary" /> 🇬🇧 UK Student Accommodation
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Student Accommodation Assistance
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Finding safe, comfortable, and affordable accommodation is one of the most stressful parts of moving to the UK for studies. We help you find and secure the right home before you arrive.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-16">

            {/* Why this matters */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why Accommodation is Critical for Your Visa</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p>
                  When you apply for a UK Student visa (formerly Tier 4), having proof of accommodation in the UK greatly strengthens your application. UK Visas and Immigration (UKVI) looks for evidence that you have a clear, stable plan for where you will live during your studies.
                </p>
                <p>
                  We help you source and secure legitimate accommodation before you travel — producing the booking confirmation letters you need for your visa application and your peace of mind.
                </p>
              </div>
            </section>

            {/* Accommodation types */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">Types of Accommodation We Help With</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { title: "University Halls of Residence", desc: "On-campus accommodation directly managed by the university. Safe, convenient, and excellent for first-year students. We advise on the application process and deadlines.", icon: GraduationCap },
                  { title: "Purpose-Built Student Accommodation (PBSA)", desc: "Private student accommodation blocks (e.g. Unite Students, Chapter, iQ, Urbanest). We compare options across UK cities and help you book.", icon: Home },
                  { title: "Private Rented Houses / Flats", desc: "Shared houses or private flats for more independent living. We advise on safe neighbourhoods, contract terms, and what to look out for to avoid scams.", icon: Star },
                  { title: "Home-Stay / Host Families", desc: "Living with a UK host family. Ideal for younger students or those who want cultural immersion and home-cooked meals while studying.", icon: ShieldCheck },
                ].map((item) => (
                  <div key={item.title} className="bg-muted/40 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* UK Cities we cover */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">UK Cities We Cover</h2>
              <p className="text-muted-foreground mb-8">We have knowledge of student accommodation options across these key university cities:</p>
              <div className="grid md:grid-cols-2 gap-5">
                {cities.map((city) => (
                  <div key={city.name} className="bg-white rounded-xl p-5 border border-border shadow-sm">
                    <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-secondary" /> {city.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Universities: <span className="text-foreground">{city.unis.join(' · ')}</span></p>
                    <p className="text-xs text-muted-foreground">Options: {city.types}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">How We Help You Find Accommodation</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Tell Us Your Requirements", desc: "Share your chosen university, start date, budget, location preferences, and whether you prefer on-campus halls, private accommodation, or a home-stay." },
                  { step: "2", title: "We Research & Compare Options", desc: "We shortlist safe, verified accommodation options near your university within your budget — comparing cost, distance, and contract terms." },
                  { step: "3", title: "Provisional Booking for Visa Application", desc: "For visa purposes, we help you obtain a provisional booking confirmation letter from the accommodation provider, showing your planned address in the UK." },
                  { step: "4", title: "Confirm Your Booking Post-Visa", desc: "Once your visa is approved, we guide you through confirming and paying for your accommodation — with advice on what documents to bring on arrival." },
                  { step: "5", title: "Pre-Arrival Checklist", desc: "We share a pre-arrival guide covering what to pack, what the UK accommodation system looks like on arrival, council tax exemption for students, and local amenities." },
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

            {/* Important warnings */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-800 text-lg mb-2">Protect Yourself from Accommodation Scams</h3>
                  <div className="space-y-2 text-sm text-amber-800">
                    <p>UK accommodation scams targeting international students are common. Warning signs include:</p>
                    <ul className="space-y-1 ml-4 list-disc">
                      <li>Requests for full payment before you arrive in the UK or before viewing</li>
                      <li>Properties advertised at prices far below market rate</li>
                      <li>Landlords who are "overseas" and cannot show you the property</li>
                      <li>Pressure to pay quickly via bank transfer with no receipt</li>
                    </ul>
                    <p className="mt-3">We only direct clients to verified accommodation providers and platforms. We will never ask you to transfer money to us for accommodation — all payments go directly to the provider.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-border rounded-2xl p-8 shadow-xl">
              <Home className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Student accommodation research, comparison, and booking support across the UK.</p>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-primary">£50</div>
                <p className="text-xs text-muted-foreground mt-1">per search & placement</p>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Accommodation costs are paid directly to the provider. Our fee covers research, comparison, provisional booking support, and pre-arrival guidance only.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><CheckIcon /> University halls applications</li>
                <li className="flex items-center gap-2"><CheckIcon /> Private student accommodation (PBSA)</li>
                <li className="flex items-center gap-2"><CheckIcon /> Provisional booking confirmation letter</li>
                <li className="flex items-center gap-2"><CheckIcon /> Scam verification & safety checks</li>
                <li className="flex items-center gap-2"><CheckIcon /> Pre-arrival accommodation guide</li>
                <li className="flex items-center gap-2"><CheckIcon /> 6 major UK university cities</li>
              </ul>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-6 flex gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">Best paired with our <Link href="/services/admission" className="text-primary font-medium underline">Admission Support</Link> and <Link href="/services/visa-guide" className="text-primary font-medium underline">UK Visa Guide</Link> for a complete package.</p>
              </div>

              <div className="flex gap-3 mb-6">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">Shortlist of options typically provided within 48–72 hours.</p>
              </div>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
                <Link href="/contact">Find Accommodation</Link>
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
