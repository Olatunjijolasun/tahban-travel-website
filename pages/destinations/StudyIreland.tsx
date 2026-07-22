import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, ChevronDown, ExternalLink, MessageSquare, MapPin,
  BookOpen, Briefcase, Clock, Home, CheckCircle2, ArrowRight, Euro
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/* ── University data ─────────────────────────────────────────────── */
type University = {
  name: string;
  location: string;
  popularCourses: string[];
  website: string;
  color: string;
  initials: string;
  intlInfo?: string;
};

const universities: Record<string, University[]> = {
  dublin: [
    { name: 'University College Dublin (UCD)', location: 'Dublin', popularCourses: ['Business', 'Medicine', 'Computer Science', 'Engineering', 'Law'], website: 'https://www.ucd.ie', color: '#003087', initials: 'UCD', intlInfo: "Ireland's largest university, ranked in the world's top 200. Consistently popular with international students from Africa and Asia." },
    { name: 'Trinity College Dublin (TCD)', location: 'Dublin', popularCourses: ['Medicine', 'Law', 'Computer Science', 'Business', 'Engineering'], website: 'https://www.tcd.ie', color: '#003D00', initials: 'TCD', intlInfo: "Ireland's oldest and most prestigious university, founded in 1592. Strong global reputation with world-class research facilities." },
    { name: 'Dublin City University (DCU)', location: 'Dublin', popularCourses: ['Business', 'Computing', 'Engineering', 'Communications', 'Education'], website: 'https://www.dcu.ie', color: '#D00000', initials: 'DCU', intlInfo: "Modern university known for innovation, technology, and enterprise — close industry links and excellent graduate outcomes." },
    { name: 'Technological University Dublin (TU Dublin)', location: 'Dublin', popularCourses: ['Engineering', 'Business', 'Science', 'Computing', 'Architecture'], website: 'https://www.tudublin.ie', color: '#005C8A', initials: 'TUD', intlInfo: "Ireland's first technological university, formed by merger of three institutes — practical and career-focused programmes." },
    { name: 'Dublin Business School (DBS)', location: 'Dublin', popularCourses: ['Business', 'Finance', 'Marketing', 'Law', 'Psychology'], website: 'https://www.dbs.ie', color: '#1A1A6E', initials: 'DBS', intlInfo: "Ireland's largest private third-level college — flexible programmes popular with mature and international students." },
  ],
  cork: [
    { name: 'University College Cork (UCC)', location: 'Cork', popularCourses: ['Medicine', 'Nursing', 'Law', 'Business', 'Engineering'], website: 'https://www.ucc.ie', color: '#006C3C', initials: 'UCC', intlInfo: "Ranked in the world's top 300, UCC has a vibrant student community and a strong medical and nursing school popular with international applicants." },
    { name: 'Munster Technological University (MTU)', location: 'Cork & Kerry', popularCourses: ['Engineering', 'Business', 'Science', 'Computing', 'Nursing'], website: 'https://www.mtu.ie', color: '#002060', initials: 'MTU', intlInfo: "One of Ireland's newest technological universities, combining tradition with innovation across the Munster region." },
  ],
  galway: [
    { name: 'University of Galway', location: 'Galway', popularCourses: ['Medicine', 'Engineering', 'Business', 'Law', 'Arts'], website: 'https://www.universityofgalway.ie', color: '#7B1C35', initials: 'UoG', intlInfo: 'World top 250 — Ireland\'s most scenic campus. Renowned for research, medicine, and the Irish language & culture experience.' },
    { name: 'Atlantic Technological University (ATU)', location: 'Galway & Sligo', popularCourses: ['Business', 'Engineering', 'Computing', 'Nursing', 'Science'], website: 'https://www.atu.ie', color: '#005C8A', initials: 'ATU', intlInfo: 'Covers the west of Ireland with practical programmes and strong regional employer partnerships.' },
  ],
  limerick: [
    { name: 'University of Limerick (UL)', location: 'Limerick', popularCourses: ['Engineering', 'Business', 'Nursing', 'Computer Science', 'Law'], website: 'https://www.ul.ie', color: '#002B5C', initials: 'UL', intlInfo: 'Known for co-operative education (work placement) programmes. Consistently ranked among Ireland\'s top universities for graduate employment.' },
    { name: 'Technological University of the Shannon (TUS)', location: 'Limerick & Athlone', popularCourses: ['Engineering', 'Business', 'Science', 'Computing', 'Nursing'], website: 'https://www.tus.ie', color: '#5C2D91', initials: 'TUS', intlInfo: 'Serves the Midlands and Mid-West — practical degree programmes with strong local industry connections.' },
  ],
  leinster: [
    { name: 'Maynooth University', location: 'Maynooth, Co. Kildare', popularCourses: ['Business', 'Computer Science', 'Social Sciences', 'Law', 'Education'], website: 'https://www.maynoothuniversity.ie', color: '#810000', initials: 'MU', intlInfo: 'One of Ireland\'s fastest-growing universities — known for computing, social science, and a welcoming campus environment.' },
    { name: 'South East Technological University (SETU)', location: 'Waterford & Carlow', popularCourses: ['Engineering', 'Business', 'Science', 'Computing', 'Health Science'], website: 'https://www.setu.ie', color: '#003865', initials: 'SETU', intlInfo: 'Serves the South East of Ireland with strong healthcare, engineering, and business programmes.' },
  ],
};

const regionLabels: Record<string, string> = {
  dublin:   '🏙️ Dublin',
  cork:     '🌊 Cork & Munster',
  galway:   '🌿 Galway & Connacht',
  limerick: '🏞️ Limerick & Mid-West',
  leinster: '🌾 Leinster (Kildare, Waterford)',
};

/* ── page content ──────────────────────────────────────────────────── */
const stats = [
  { icon: Euro,     label: 'Tuition Fees',  value: '€10,000 – €25,000', sub: 'per year (approx.)' },
  { icon: Home,     label: 'Living Costs',  value: '€10,000 – €15,000', sub: 'per year (est.)' },
  { icon: Clock,    label: 'Intakes',       value: 'September & February', sub: 'most programmes' },
  { icon: Briefcase, label: 'Work Rights',  value: 'Up to 20 hrs/week', sub: 'during term time' },
];

const whyChoose = [
  { title: 'English-Speaking EU Country', body: 'Ireland is the only English-speaking member of the European Union, making it a gateway to both the English-language job market and EU opportunities post-graduation.' },
  { title: 'Third-Level Education System', body: 'Irish universities consistently rank in global top-500 lists. Degrees are internationally recognised and respected by employers across the UK, EU, and beyond.' },
  { title: 'Third-Level Graduate Scheme', body: 'After completing a degree, international graduates can apply to stay in Ireland for 12–24 months to seek employment under the Third Level Graduate programme.' },
  { title: 'Tech & Pharma Hub', body: 'Dublin is home to EMEA headquarters of Google, Meta, LinkedIn, Apple, Pfizer, and Roche — offering exceptional internship and graduate career opportunities in tech and pharma.' },
  { title: 'Safe & Welcoming Country', body: 'Ireland is consistently ranked among the most welcoming and safest countries in the world, with a vibrant culture and strong diaspora connections to Africa.' },
  { title: 'NHS-Equivalent Nursing', body: 'For Nursing students, Ireland offers HSE (Health Service Executive) clinical placements with globally recognised registration through NMBI (Nursing & Midwifery Board of Ireland).' },
];

const popularCourses = [
  'Business & Management', 'Computer Science', 'Data Analytics', 'Engineering',
  'Nursing & Midwifery', 'Pharmacy', 'Law', 'Finance', 'Medicine',
  'Marketing & Communications', 'Education', 'Biotechnology',
];

function IrelandUniversitySearch() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedUni, setSelectedUni] = useState('');

  const regionUnis = selectedRegion ? universities[selectedRegion] ?? [] : [];
  const profile = regionUnis.find(u => u.name === selectedUni);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4" />
            Ireland University Finder
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Find Your Irish University
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore universities across Dublin, Cork, Galway, Limerick, and Leinster. Select a region to discover institutions popular with international students.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <label className="block text-sm font-semibold text-primary mb-2">Select Irish Region</label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={e => { setSelectedRegion(e.target.value); setSelectedUni(''); }}
                  className="w-full appearance-none rounded-xl border-2 border-border bg-background px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">— Choose a region —</option>
                  {Object.entries(regionLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-primary mb-2">Select University</label>
              <div className="relative">
                <select
                  value={selectedUni}
                  onChange={e => setSelectedUni(e.target.value)}
                  disabled={!selectedRegion}
                  className="w-full appearance-none rounded-xl border-2 border-border bg-background px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:border-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">{selectedRegion ? '— Choose a university —' : 'Select a region first'}</option>
                  {regionUnis.map(u => (
                    <option key={u.name} value={u.name}>{u.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {profile && (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="bg-background rounded-2xl border-2 border-secondary/20 shadow-lg overflow-hidden"
              >
                <div className="h-2" style={{ background: profile.color }} />
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md"
                      style={{ background: profile.color }}
                    >
                      {profile.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-primary mb-1">{profile.name}</h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 text-secondary" />
                        {profile.location}
                      </div>
                      {profile.intlInfo && (
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed italic">{profile.intlInfo}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">Popular Courses</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.popularCourses.map(course => (
                        <span key={course} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium border border-primary/10">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit University
                    </a>
                    <Button asChild className="flex-1 bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full">
                      <Link href="/contact">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Request Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!profile && (
            <div className="text-center py-10 text-muted-foreground text-sm">
              <GraduationCap className="w-12 h-12 mx-auto mb-3 text-secondary/40" />
              Select a region and university above to view the full profile.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function StudyIreland() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#009A44] via-[#006B30] to-[#004A22] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #FF8200 0%, transparent 60%)' }} />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              🇮🇪 Study Destination — Ireland
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Study in Ireland
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl">
              Discover exceptional study opportunities in Ireland with TTEC. We provide personalised education consultancy, university admissions guidance, accommodation assistance, and travel support to help you begin your academic journey with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-[#006B30] hover:bg-white/90 font-bold rounded-full px-8">
                <Link href="/services/advisory">Book Advisory — £50</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                <Link href="/contact">Talk to TTEC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                <p className="font-serif font-bold text-primary text-lg leading-tight">{value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Ireland */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Why Ireland?
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Why Study in Ireland?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                <div className="w-2 h-8 rounded-full bg-[#009A44] mb-4" />
                <h3 className="font-serif font-bold text-primary text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Search */}
      <IrelandUniversitySearch />

      {/* Popular Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Programmes
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Popular Courses in Ireland</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              International students from West Africa are drawn to these subject areas at Irish universities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {popularCourses.map(course => (
              <span key={course}
                className="px-5 py-2.5 rounded-full bg-white border border-secondary/20 text-primary text-sm font-medium shadow-sm hover:border-secondary hover:shadow-md transition-all cursor-default">
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Key Facts at a Glance</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#009A44] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Category</th>
                  <th className="text-left px-6 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Undergraduate Tuition', '€10,000 – €25,000/year (non-EU international students)'],
                  ['Postgraduate Tuition', '€10,000 – €30,000/year'],
                  ['Living Costs', '€10,000 – €15,000/year (Dublin is higher)'],
                  ['Degree Duration', '3–4 years UG · 1–2 years PG (taught)'],
                  ['Intakes', 'September (main) · February (some courses)'],
                  ['Work Rights', 'Up to 20 hours/week during term; 40 hours in June–September'],
                  ['Post-Study Stay', 'Third Level Graduate Programme — 12–24 months'],
                  ['English Requirement', 'Many Irish universities may accept WAEC or NECO English Language results for eligible applicants, subject to each university\'s admission requirements. Some institutions or programmes may require IELTS or another recognised English language qualification.'],
                  ['Application Route', 'CAO (UG) · Direct to university (PG)'],
                  ['Official Resource', 'educationinireland.ie · cao.ie'],
                ].map(([cat, detail]) => (
                  <tr key={cat} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">{cat}</td>
                    <td className="px-6 py-4 text-muted-foreground">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>Visa Note:</strong> Irish student visa requirements and the application process are handled through TTEC's consultation service. 
            {' '}<Link href="/services/advisory" className="font-semibold underline underline-offset-2">Book your advisory session</Link> and we will guide you through every step.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Ready to Explore Ireland?</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Let TTEC Guide Your Irish Application
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Same expert guidance, same transparent pricing — now covering Ireland as a study destination.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full px-8">
              <Link href="/services/advisory">Book Advisory — £50</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
              <Link href="/services">All Services &amp; Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
