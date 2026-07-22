import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Target, Shield, Heart, Linkedin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import consultantStrand from "@assets/consultant-strand-office.jpeg";
import galleryGraduation from "@assets/gallery-graduation.png";
import galleryUhGroup from "@assets/gallery-uh-group.jpg";
import galleryNgOffice from "@assets/gallery-ng-office.jpg";
import galleryCountryFlags from "@assets/gallery-country-flags.jpg";

const gallery = [
  { src: galleryGraduation,    alt: "Graduation ceremony at a UK university",          caption: "Celebrating with our clients at their UK graduation ceremony" },
  { src: galleryUhGroup,       alt: "University of Hertfordshire Business School event", caption: "University of Hertfordshire Business School — partnership event" },
  { src: galleryNgOffice,      alt: "Professional workspace — Nigeria",                 caption: "Professional operations across Nigeria and the UK" },
  { src: galleryCountryFlags,  alt: "International representation across nations",      caption: "Representing clients across West Africa and beyond" },
];

export default function About() {
  React.useEffect(() => { document.title = "About Us - Tahban Travel & Education Consultancy"; }, []);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => (i! - 1 + gallery.length) % gallery.length);
  const next = () => setLightbox(i => (i! + 1) % gallery.length);

  return (
    <div className="w-full bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Founded on integrity. Driven by your success. We are your bridge between West Africa and the United Kingdom.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">

        {/* Principal Consultant */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <p className="text-sm text-secondary font-semibold uppercase tracking-widest mb-2">Meet Our Principal Consultant</p>
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Olatunji T. Jolasun</h2>
            <p className="text-muted-foreground text-sm mb-6 italic">Principal Consultant — Bedfordshire, United Kingdom</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Olatunji T. Jolasun established Tahban Travel & Education Consultancy after witnessing firsthand the challenges, misinformation, and outright scams targeting Nigerians and West Africans seeking to study or travel abroad.
              </p>
              <p>
                With deep expertise in UK travel pathways, university admission systems, and international education, Olatunji built Tahban on a single foundational principle: <strong className="text-primary">Honesty.</strong>
              </p>
              <p className="border-l-4 border-secondary pl-4 italic text-primary/80">
                "We don't sell guaranteed outcomes because nobody can. We sell meticulous preparation, deep knowledge of the system, and peace of mind. When you work with us, you are working with someone who treats your journey like their own."
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/olatunji-jolasun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#004182] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-md border border-border w-full group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={consultantStrand}
                alt="Olatunji T. Jolasun — Principal Consultant, United Kingdom"
                className="w-full h-64 md:h-80 lg:h-[420px] object-contain object-center bg-slate-50"
              />
              {/* Name badge — overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent pt-10 pb-4 px-5">
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-white font-serif font-semibold text-base leading-tight tracking-wide">
                    Olatunji T. Jolasun
                  </p>
                  <p className="text-white/75 text-xs mt-0.5 tracking-wider uppercase font-medium">
                    Principal Consultant · United Kingdom
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Gallery</h2>
            <p className="text-muted-foreground">Real moments from our work, events, and client journeys.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
                <X className="w-8 h-8" />
              </button>
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" onClick={(e) => { e.stopPropagation(); prev(); }}>
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" onClick={(e) => { e.stopPropagation(); next(); }}>
                <ChevronRight className="w-10 h-10" />
              </button>
              <motion.div
                key={lightbox}
                initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full"
              >
                <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} className="w-full max-h-[75vh] object-contain rounded-xl" />
                <p className="text-white/70 text-sm text-center mt-4">{gallery[lightbox].caption}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mission & Values */}
        <div className="bg-white rounded-3xl p-8 md:p-16 border border-border shadow-sm mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To provide credible, transparent, and highly personalised travel and education consultancy for West Africans, dismantling the anxiety and complexity of international applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-primary text-xl mb-3">Integrity Above All</h3>
              <p className="text-muted-foreground">No false documents, no false promises. We operate strictly within the law and within our professional boundaries as consultants.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-primary text-xl mb-3">Meticulous Detail</h3>
              <p className="text-muted-foreground">The difference between approval and refusal is often in the details. We review every document, every date, every figure.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-primary text-xl mb-3">Human Empathy</h3>
              <p className="text-muted-foreground">We understand the stakes. You are not a file number; you are a person with a dream, a family, and a future.</p>
            </div>
          </div>
        </div>

        {/* Our Presence */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Presence</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">We are transparent about how we operate: a dedicated local agent in Lagos for in-person client support, and the Principal Consultant based in the UK with direct access to UK universities and travel authorities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="p-6 bg-primary text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl">🇳🇬 Lagos, Nigeria</h3>
                <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Local Agent</p>
              </div>
              <MapPin className="text-secondary" />
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">Our Lagos-based agent provides in-person client meetings, initial consultations, document collection, and on-the-ground support for clients across Nigeria and West Africa. Appointments can be booked via WhatsApp.</p>
              <iframe
                title="Lagos Office Map"
                src="https://maps.google.com/maps?q=Victoria+Island,Lagos,Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-xl border-0 bg-muted"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="p-6 bg-primary text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl">🇬🇧 Bedfordshire, UK</h3>
                <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Principal Consultant</p>
              </div>
              <MapPin className="text-secondary" />
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">Principal Consultant <strong>Olatunji T. Jolasun</strong> is based in the UK, giving Tahban direct, current access to UK university relationships and the ability to support clients from within the country.</p>
              <iframe
                title="Bedfordshire UK Map"
                src="https://maps.google.com/maps?q=LU2,Luton,Bedfordshire,UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-xl border-0 bg-muted"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
