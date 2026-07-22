import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { BedDouble, CheckCircle, Globe, MapPin, ShieldCheck, Clock } from 'lucide-react';
import visitImg from "@assets/generated_images/visit.jpg";

export default function HotelBooking() {
  React.useEffect(() => {
    document.title = "Hotel Booking Services - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={visitImg} alt="Hotel accommodation" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <BedDouble className="w-4 h-4 text-secondary" /> UK & USA
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Hotel Booking Services
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              We help you find and secure suitable hotel accommodations in the UK and USA — whether for your visa application, a family visit, business travel, or a study recce trip.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why Hotel Bookings Matter for Visa Applications</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p>
                  Both the UK and US visa applications often require evidence of planned accommodation — particularly for visitor and tourist visas. A vague or unbooked itinerary is one of the most common reasons consular officers ask for additional information or issue a refusal.
                </p>
                <p>
                  We source fully refundable hotel reservations that serve as strong supporting evidence for your visa application, and for clients who are confirmed to travel, we help with final bookings that suit your budget, location preferences, and travel purpose.
                </p>
              </div>
            </section>

            {/* UK Hotels */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary">UK Hotel Bookings</h2>
                  <p className="text-sm text-muted-foreground">London, Bedfordshire, Manchester & beyond</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>Whether you are visiting family, attending a graduation, coming for medical treatment, or arriving for a university interview, we source the right accommodation at the right price — from budget-friendly options near key transport links to mid-range hotels in central London.</p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Visa-supporting hotel reservation letters (refundable, with booking reference)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Proximity to family address, hospital, or university as needed</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Budget to mid-range options across London, Luton/Bedfordshire, Manchester, Birmingham</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Advice on UK transport links (train, bus, underground) from accommodation</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Alignment with your stated travel itinerary in the visa application</li>
                </ul>
              </div>
            </section>

            {/* USA Hotels */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary">USA Hotel Bookings</h2>
                  <p className="text-sm text-muted-foreground">New York, Houston, Atlanta & major US cities</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>For clients applying for a US B-2 visa, a clear travel itinerary with confirmed (or provisional) hotel bookings significantly strengthens your application. We help you present a coherent, credible travel plan to the consular officer.</p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Provisional hotel reservation documentation suitable for DS-160 and interview</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Final bookings for confirmed travellers at preferred US cities</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Cities covered: New York, Houston, Atlanta, Washington D.C., Chicago, Los Angeles, Dallas</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Coordination with your stated purpose of visit (tourism, family, medical)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Itinerary document formatted for consular review</li>
                </ul>
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">How the Booking Process Works</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Tell Us Your Travel Plan", desc: "Share your approximate travel dates, destination city, purpose of visit, and budget range via WhatsApp or email." },
                  { step: "2", title: "We Source Suitable Options", desc: "We identify 2–3 shortlisted hotels that align with your travel purpose, budget, and visa application requirements." },
                  { step: "3", title: "Reservation Confirmation", desc: "Once you confirm your choice, we assist with obtaining the booking reference or reservation letter in a format suitable for visa documentation." },
                  { step: "4", title: "Itinerary Alignment", desc: "We ensure the hotel booking aligns with the rest of your visa application — dates, purpose, and stated accommodation must be consistent." },
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
              <BedDouble className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Hotel sourcing and booking support for UK and USA travel.</p>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-primary">£50</div>
                <p className="text-xs text-muted-foreground mt-1">per booking assisted</p>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Hotel room costs are paid directly to the property or booking platform. Our fee covers the sourcing, advisory, and documentation preparation only. Visa-support reservations are refundable by design.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><CheckIcon /> UK & USA destinations</li>
                <li className="flex items-center gap-2"><CheckIcon /> Visa-supporting reservation letters</li>
                <li className="flex items-center gap-2"><CheckIcon /> Budget to mid-range options</li>
                <li className="flex items-center gap-2"><CheckIcon /> Itinerary document preparation</li>
                <li className="flex items-center gap-2"><CheckIcon /> Available as a standalone or add-on</li>
              </ul>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-6 flex gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">Best paired with our <Link href="/services/visa-guide" className="text-primary font-medium underline">UK Visa Guide</Link> or <Link href="/services/usa-visa" className="text-primary font-medium underline">USA Tourist Visa</Link> service for a complete application package.</p>
              </div>

              <div className="flex gap-3 mb-3">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">Typical turnaround: 24–48 hours after your requirements are confirmed.</p>
              </div>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
                <Link href="/contact">
                  Book Hotel Assistance
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
