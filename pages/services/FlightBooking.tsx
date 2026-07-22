import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Plane, CheckCircle, Globe, MapPin, Clock, ShieldCheck, AlertTriangle } from 'lucide-react';
import visitImg from "@assets/generated_images/visit.jpg";

export default function FlightBooking() {
  React.useEffect(() => {
    document.title = "Air Flight Booking - Tahban Travel & Education Consultancy";
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white border-b-8 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={visitImg} alt="Flight booking" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4 text-secondary" /> UK & USA Flights
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Air Flight Booking
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              We help you find, compare, and book the most suitable and cost-effective flights from Nigeria to the UK and USA — taking the stress out of travel planning.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why Use Tahban for Flight Booking?</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p>
                  Booking the right flight at the right time is more than just finding a cheap ticket. Your flight itinerary is a critical part of your visa application — it must align with your stated dates of travel and return, and must be consistent with your financial profile shown in your bank statements.
                </p>
                <p>
                  We help clients source appropriate flight options, obtain provisional booking confirmations suitable for visa documentation, and then confirm final tickets once visas are approved. We cover routes from Lagos (LOS), Abuja (ABV), and other Nigerian airports to major UK and USA destinations.
                </p>
              </div>
            </section>

            {/* Routes */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">Routes We Cover</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-primary mb-3 flex items-center gap-2">🇬🇧 Nigeria → United Kingdom</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos (LOS) → London Heathrow (LHR)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos (LOS) → London Gatwick (LGW)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Abuja (ABV) → London Heathrow (LHR)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos / Abuja → Manchester (MAN)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos / Abuja → Birmingham (BHX)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Connection to Luton/Bedfordshire via Heathrow</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-3 flex items-center gap-2">🇺🇸 Nigeria → United States</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos (LOS) → New York (JFK / EWR)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos (LOS) → Houston (IAH)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos (LOS) → Atlanta (ATL)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos (LOS) → Washington D.C. (IAD)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Lagos (LOS) → Chicago (ORD)</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5"/>Connection via international hubs (Dubai, Doha, Amsterdam)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Visa flight booking note */}
            <section className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">Flight Bookings for Visa Applications</h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>For visa applications (UK Standard Visitor or USA B-2), a provisional or dummy flight booking is often needed to demonstrate your planned travel itinerary. We help you obtain:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0"/>Provisional flight reservation confirmation (refundable or hold-based booking)</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0"/>Itinerary document showing outbound and return flights in the correct format for visa documentation</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0"/>Dates that align with your visa application, bank statement period, and stated purpose of travel</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-secondary shrink-0"/>Once your visa is approved, we assist with confirming the final booking at the best available price</li>
                </ul>
              </div>

              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4" /> Important Note
                </h4>
                <p className="text-sm text-amber-800">Never purchase a non-refundable flight ticket before your visa is approved. We always recommend obtaining a provisional booking first and confirming only after visa approval.</p>
              </div>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">How the Process Works</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Tell Us Your Travel Requirements", desc: "Share your destination, preferred travel dates, flexibility window, budget, and whether you need a visa-support booking or a confirmed ticket." },
                  { step: "2", title: "We Research & Compare Options", desc: "We compare available routes, airlines, and connection options — identifying the best value flights that also align with your visa timeline." },
                  { step: "3", title: "Provisional or Confirmed Booking", desc: "For visa applications, we help secure a provisional booking confirmation. For confirmed travel, we guide you through purchasing your ticket." },
                  { step: "4", title: "Travel Itinerary Documentation", desc: "We prepare a clean itinerary document with your flight details, formatted appropriately for visa submission or personal travel planning." },
                  { step: "5", title: "Pre-Departure Support", desc: "We advise on check-in, luggage allowances, transit requirements, UK / US entry requirements, and what to carry in your hand luggage on arrival." },
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
              <Plane className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Service Details</h3>
              <p className="text-muted-foreground mb-6">Flight search, provisional booking, and confirmed ticket assistance.</p>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm font-medium text-muted-foreground mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-primary">£50</div>
                <p className="text-xs text-muted-foreground mt-1">per booking assisted</p>
                <div className="text-xs text-muted-foreground mt-2 italic bg-muted p-3 rounded">
                  Airline ticket costs are paid directly by you to the airline or booking platform. Our fee covers research, comparison, documentation, and booking support only.
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><CheckIcon /> Nigeria → UK routes</li>
                <li className="flex items-center gap-2"><CheckIcon /> Nigeria → USA routes</li>
                <li className="flex items-center gap-2"><CheckIcon /> Visa-support booking letters</li>
                <li className="flex items-center gap-2"><CheckIcon /> Travel itinerary document</li>
                <li className="flex items-center gap-2"><CheckIcon /> Pre-departure advice</li>
                <li className="flex items-center gap-2"><CheckIcon /> Available standalone or with visa service</li>
              </ul>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-6 flex gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">Best paired with our <Link href="/services/visa-guide" className="text-primary font-medium underline">UK Visa Guide</Link> or <Link href="/services/usa-visa" className="text-primary font-medium underline">USA Tourist Visa</Link> service.</p>
              </div>

              <div className="flex gap-3 mb-6">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">Options typically provided within 24–48 hours of receiving your requirements.</p>
              </div>

              <Button asChild className="w-full h-12 text-base rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold">
                <Link href="/contact">Book Flight Assistance</Link>
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
