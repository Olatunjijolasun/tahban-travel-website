import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  ArrowRight, CheckCircle2, GraduationCap, Plane, ShieldCheck, MapPin,
  MessageSquare, Globe, Briefcase, Users, FlaskConical,
  HeartHandshake, Award, Stethoscope, BarChart3, Scale, Brain,
  Landmark, Building2, MessageCircle, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UKUniversitySearch } from '@/components/UKUniversitySearch';

import heroImg from "@assets/generated_images/hero.jpg";
import studyImg from "@assets/generated_images/study.jpg";
import visitImg from "@assets/generated_images/visit.jpg";
import usaTourismImg from "@assets/usa-tourism.jpg";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
};

/* ── Why Choose UK ── */
const whyUK = [
  { icon: Landmark,      title: "World-Class Universities",           desc: "4 of the world's top 10 universities are in the UK — Oxford, Cambridge, UCL, and Imperial College London." },
  { icon: Award,         title: "Globally Recognised Qualifications", desc: "A UK degree is respected by employers worldwide, opening doors across every continent." },
  { icon: Briefcase,     title: "Career Opportunities",               desc: "The UK Graduate Route visa lets you work in the UK for 2–3 years after graduation." },
  { icon: Users,         title: "International Student Community",    desc: "Over 600,000 international students call the UK home — one of the world's most welcoming student communities." },
  { icon: FlaskConical,  title: "Research Excellence",                desc: "UK universities produce world-leading research across medicine, science, technology, and social sciences." },
  { icon: HeartHandshake,title: "Student Support Environment",        desc: "Dedicated international student offices, welfare services, and academic support systems at every university." },
];

/* ── Countries ── */
const countries = [
  { flag: "🇳🇬", name: "Nigeria",      desc: "Our primary market. Expert guidance for Nigerians pursuing UK education and USA travel, from Lagos to London." },
  { flag: "🇬🇭", name: "Ghana",        desc: "Supporting Ghanaian students and families with university admissions and travel planning." },
  { flag: "🇸🇱", name: "Sierra Leone", desc: "Dedicated consultation for Sierra Leonean students seeking world-class UK education." },
  { flag: "🇬🇲", name: "The Gambia",   desc: "Helping Gambians navigate the UK application process with personalised, expert guidance." },
];

/* ── Popular Courses ── */
const courses = [
  { icon: Stethoscope, title: "Nursing & Healthcare",  color: "#e74c3c", tag: "High Demand" },
  { icon: Briefcase,   title: "Business & Management", color: "#2c3e6b", tag: "Top Choice" },
  { icon: Brain,       title: "Engineering",           color: "#e67e22", tag: "STEM" },
  { icon: Globe,       title: "Computer Science",      color: "#27ae60", tag: "Tech" },
  { icon: BarChart3,   title: "Data Analytics",        color: "#8e44ad", tag: "Growing Field" },
  { icon: Building2,   title: "Finance",               color: "#16a085", tag: "Career-Ready" },
  { icon: Stethoscope, title: "Public Health",         color: "#c0392b", tag: "Global Impact" },
  { icon: Scale,       title: "Law",                   color: "#2980b9", tag: "Prestigious" },
  { icon: Users,       title: "Social Sciences",       color: "#d89b21", tag: "Diverse Paths" },
];

/* ── University Showcase ── */
const showcaseUnis = [
  { initials: "UCL",  name: "University College London",   location: "London",    color: "#003078" },
  { initials: "KCL",  name: "King's College London",       location: "London",    color: "#BE0000" },
  { initials: "UoM",  name: "University of Manchester",    location: "Manchester",color: "#660099" },
  { initials: "UoB",  name: "University of Birmingham",    location: "Birmingham",color: "#003A66" },
  { initials: "UoE",  name: "University of Edinburgh",     location: "Edinburgh", color: "#041E42" },
  { initials: "GU",   name: "University of Glasgow",       location: "Glasgow",   color: "#003865" },
  { initials: "CU",   name: "Cardiff University",          location: "Cardiff",   color: "#CF142B" },
  { initials: "QUB",  name: "Queen's University Belfast",  location: "Belfast",   color: "#003765" },
  { initials: "CovU", name: "Coventry University",         location: "Coventry",  color: "#6D2077" },
  { initials: "UH",   name: "University of Hertfordshire", location: "Hatfield",  color: "#8B0000" },
];

/* ── Service highlights (compact teaser) ── */
const serviceHighlights = [
  { label: "Advisory Consultation",         price: "£50",  href: "/services/advisory" },
  { label: "School Search & Top 3",         price: "£100", href: "/services/school-search" },
  { label: "University Admission Support",  price: "£350", href: "/services/admission" },
  { label: "MSc Nursing Pathway",           price: "£750", href: "/services/nursing-pathway" },
  { label: "Premium Journey Package",       price: "£900", href: "/services/premium-package" },
  { label: "Student Visa Guidance",         price: "£300", href: "/services/visa-guide" },
  { label: "USA Tourist Visa (B-2)",        price: "£350", href: "/services/usa-visa" },
  { label: "Student Accommodation",         price: "£50",  href: "/services/student-accommodation" },
  { label: "Hotel Booking",                 price: "£50",  href: "/services/hotel-booking" },
  { label: "Air Flight Booking",            price: "£50",  href: "/services/flight-booking" },
];

export default function Home() {
  React.useEffect(() => {
    document.title = "TTEC – Tahban Travel & Education Consultant | UK Admissions & Visa Experts";
  }, []);

  return (
    <div className="w-full">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="TTEC – Tahban Travel & Education Consultancy" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span>🇳🇬 🇬🇭 🇸🇱 🇬🇲</span>
                <span className="text-white/60 mx-1">→</span>
                <span>🇬🇧 UK · 🇺🇸 USA</span>
                <span className="text-white/60 mx-1">·</span>
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>Lagos Agent &amp; UK Principal Consultant</span>
              </div>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              Your Trusted Guide to <span className="text-secondary">UK Education &amp; Global Travel</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              TTEC connects students and families across Africa and beyond to world-class education opportunities in the United Kingdom, Ireland, and Canada, together with trusted USA and international travel services. With clarity, integrity, and personalised support, we guide you every step of your journey — from choosing the right study destination or travel experience to achieving your academic and travel goals with confidence.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full">
                <Link href="/services/school-search">
                  <GraduationCap className="w-5 h-5 mr-2" />Plan Your Studies
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full">
                <Link href="/contact">
                  <MessageSquare className="w-5 h-5 mr-2" />Request a Consultation
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-b border-border py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-center">
            {[
              { icon: ShieldCheck, title: "Verified Consultant",        sub: "Expert Guidance" },
              { icon: CheckCircle2, title: "Hundreds Helped",           sub: "Successful Journeys" },
              { icon: MapPin,       title: "Lagos Agent & UK Principal", sub: "Nigeria & UK Presence" },
              { icon: Globe,        title: "International Reach",        sub: "West Africa · UK · USA & Beyond" },
            ].map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="hidden md:block w-px h-12 bg-border" />}
                <div className="flex items-center gap-3">
                  <item.icon className="w-8 h-8 text-secondary" />
                  <div className="text-left">
                    <div className="font-bold text-primary font-serif">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.sub}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE THE UK ─── */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              🇬🇧 Why the United Kingdom?
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose the UK for Your Studies?</h2>
            <p className="text-white/70 leading-relaxed">The United Kingdom offers an unmatched combination of academic prestige, global recognition, and career opportunity.</p>
          </div>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}>
            {whyUK.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-8 h-12">
              <Link href="/services/school-search">Find Your UK University</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── UK UNIVERSITY SEARCH ─── */}
      <UKUniversitySearch />

      {/* ─── POPULAR COURSES ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Academic Pathways</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Popular Courses Among International Students</h2>
            <p className="text-muted-foreground">These are the most sought-after disciplines chosen by international students in UK universities.</p>
          </div>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}>
            {courses.map((course, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="bg-background border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-secondary hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${course.color}18`, color: course.color }}>
                  <course.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm leading-tight">{course.title}</h3>
                  <span className="text-xs text-muted-foreground">{course.tag}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              <Link href="/services/school-search">Find Universities for Your Course</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── WORLD-CLASS UNIVERSITIES ─── */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Where Our Students Study</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">World-Class UK Universities</h2>
            <p className="text-muted-foreground">TTEC has helped students gain admission to some of the UK's most respected institutions.</p>
          </div>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}>
            {showcaseUnis.map((uni, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="bg-white border border-border rounded-2xl p-5 flex flex-col items-center text-center hover:border-secondary hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-3 group-hover:scale-105 transition-transform shadow-sm"
                  style={{ background: uni.color }}>
                  {uni.initials}
                </div>
                <p className="text-xs font-semibold text-primary leading-tight mb-1">{uni.name}</p>
                <p className="text-xs text-muted-foreground">{uni.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES TEASER ─── */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Education, Visa &amp; Travel</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Services</h2>
            <p className="text-muted-foreground">From a single advisory session to a complete end-to-end student journey package — transparent pricing, no hidden fees.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {serviceHighlights.map((s, i) => (
              <Link key={i} href={s.href}
                className="inline-flex items-center gap-2 bg-white border border-border hover:border-secondary hover:shadow-md rounded-xl px-4 py-2.5 transition-all group">
                <span className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">{s.label}</span>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{s.price}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-13">
              <Link href="/services">
                View All Services &amp; Full Pricing <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── COUNTRIES WE SERVE ─── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Countries We Offer Study Abroad Counselling In</h2>
            <p className="text-muted-foreground leading-relaxed">
              TTEC specialises in supporting students and travellers from West Africa and welcomes enquiries from anywhere in the world.
            </p>
          </div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}>
            {countries.map((c, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="bg-white border border-border rounded-2xl p-8 text-center hover:border-secondary hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{c.flag}</div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3">{c.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Also expanding to other African nations and the diaspora. <Link href="/contact" className="text-secondary font-semibold hover:underline">Get in touch</Link> wherever you are.
          </p>
        </div>
      </section>

      {/* ─── WHY STUDENTS TRUST TTEC ─── */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3">Why Students Trust TTEC</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Not Just a Form Processor.<br/>
                <span className="text-secondary text-2xl md:text-3xl italic">A Wise Friend Who's Done This Before.</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>At TTEC, we know that applying for a UK university or USA travel isn't just paperwork — it's your life, your education, and your family's future.</p>
                <p>We exist to provide individuals of all ages with credible, human, and meticulously detailed guidance. No scams, no generic advice, no corporate indifference.</p>
                <p>Whether you are a mature professional seeking a career change, a young student choosing your dream university, or a family planning an international trip — we walk you through every single step.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                  <Link href="/contact">Get Your Personalised Study Plan</Link>
                </Button>
                <Button asChild variant="link" className="px-0 text-primary font-bold hover:text-secondary group text-base">
                  <Link href="/about">Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </div>
            </motion.div>

            <motion.div className="relative"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
              <div className="absolute inset-0 bg-secondary/20 translate-x-4 translate-y-4 rounded-2xl"></div>
              <img src={studyImg} alt="Student in library" className="relative rounded-2xl shadow-xl w-full h-[480px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[250px]">
                <div className="flex gap-2 text-secondary mb-2">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif font-bold text-primary text-sm italic">"TTEC made my UK master's dream a reality when others said it was impossible."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PATHWAYS SPLIT ─── */}
      <section className="py-0 flex flex-col md:flex-row">
        {[
          { img: studyImg,      overlay: "bg-primary/80",     icon: GraduationCap, title: "Study in the UK",  desc: "School search, advisory, student accommodation — complete support from your first enquiry to arriving in the UK.", btn: "Explore Study Services", link: "/services/school-search" },
          { img: visitImg,      overlay: "bg-[#0f244a]/90",   icon: Plane,         title: "Visit the UK",     desc: "Graduation ceremonies, family visits, tourism. Hotel booking and flight support included — your complete UK visit package.", btn: "Plan Your Visit", link: "/services/hotel-booking" },
          { img: usaTourismImg, overlay: "bg-[#1a3a5c]/80",   icon: Globe,         title: "🇺🇸 USA & Travel", desc: "B-2 tourist visa guidance — DS-160, Embassy interview prep, and document assembly for Nigerian and West African applicants.", btn: "USA Tourist Visa", link: "/services/usa-visa" },
        ].map((p, i) => (
          <div key={i} className="flex-1 relative min-h-[420px] flex items-center justify-center p-12 overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover object-center" />
              <div className={`absolute inset-0 ${p.overlay} mix-blend-multiply`}></div>
            </div>
            <div className="relative z-10 text-center text-white max-w-md mx-auto">
              <p.icon className="w-14 h-14 mx-auto mb-5 text-secondary opacity-90" />
              <h2 className="text-2xl font-serif font-bold mb-3">{p.title}</h2>
              <p className="text-white/80 mb-6 text-sm">{p.desc}</p>
              <Button asChild className="bg-white text-primary hover:bg-secondary rounded-full px-6">
                <Link href={p.link}>{p.btn}</Link>
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/80 mb-10">
            Don't leave your UK education or USA travel plans to chance. Book a free initial chat to see how TTEC can maximise your chances of success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold h-14 px-8 rounded-full w-full sm:w-auto">
              <Link href="/contact">Get Your Personalised Plan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 h-14 px-8 rounded-full w-full sm:w-auto">
              <a href="https://wa.me/2348102164542" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
