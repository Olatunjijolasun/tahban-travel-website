import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, ChevronDown, ExternalLink, MessageSquare, MapPin,
  BookOpen, Briefcase, Clock, Home, CheckCircle2, ArrowRight
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
  ontario: [
    { name: 'University of Toronto', location: 'Toronto, Ontario', popularCourses: ['Engineering', 'Computer Science', 'Medicine', 'Business', 'Law'], website: 'https://www.utoronto.ca', color: '#002A5C', initials: 'UoT', intlInfo: 'Canada\'s #1 ranked university and world top 25 — a global powerhouse in research, medicine, and technology.' },
    { name: 'York University', location: 'Toronto, Ontario', popularCourses: ['Business', 'Law', 'Computer Science', 'Social Work', 'Education'], website: 'https://www.yorku.ca', color: '#E31837', initials: 'YU', intlInfo: 'Canada\'s third-largest university — diverse and internationally welcoming, with a highly regarded law and business school.' },
    { name: 'McMaster University', location: 'Hamilton, Ontario', popularCourses: ['Health Sciences', 'Engineering', 'Business', 'Science', 'Social Work'], website: 'https://www.mcmaster.ca', color: '#7B003C', initials: 'MCM', intlInfo: 'World top 100 — globally renowned for health sciences and the pioneering problem-based learning medical programme.' },
    { name: 'University of Ottawa', location: 'Ottawa, Ontario', popularCourses: ['Law', 'Medicine', 'Engineering', 'Business', 'Education'], website: 'https://www.uottawa.ca', color: '#8F001A', initials: 'UoO', intlInfo: 'Canada\'s largest bilingual university — located in the capital, with direct access to government and international organisations.' },
    { name: 'Western University', location: 'London, Ontario', popularCourses: ['Business (Ivey)', 'Medicine', 'Engineering', 'Law', 'Science'], website: 'https://www.uwo.ca', color: '#4F2683', initials: 'WU', intlInfo: 'Home to the Ivey Business School — one of Canada\'s most respected business programmes.' },
    { name: 'University of Waterloo', location: 'Waterloo, Ontario', popularCourses: ['Computer Science', 'Engineering', 'Mathematics', 'Business', 'Science'], website: 'https://www.uwaterloo.ca', color: '#FFC72C', initials: 'UW', intlInfo: 'Canada\'s #1 co-op university — top choice for technology and engineering; world-renowned ties to Silicon Valley.' },
    { name: 'Toronto Metropolitan University', location: 'Toronto, Ontario', popularCourses: ['Business', 'Engineering', 'Nursing', 'Communication', 'Science'], website: 'https://www.torontomu.ca', color: '#005EB8', initials: 'TMU', intlInfo: 'Formerly Ryerson — centrally located in downtown Toronto, career-focused with strong industry partnerships.' },
  ],
  british_columbia: [
    { name: 'University of British Columbia (UBC)', location: 'Vancouver, BC', popularCourses: ['Business (Sauder)', 'Engineering', 'Science', 'Forestry', 'Computer Science'], website: 'https://www.ubc.ca', color: '#002145', initials: 'UBC', intlInfo: 'World top 40 — one of Canada\'s most prestigious universities with a stunning Vancouver campus and Pacific Rim connections.' },
    { name: 'Simon Fraser University (SFU)', location: 'Burnaby, BC', popularCourses: ['Business', 'Computer Science', 'Engineering', 'Communication', 'Education'], website: 'https://www.sfu.ca', color: '#CC0000', initials: 'SFU', intlInfo: 'Canada\'s most engaged university — renowned for applied research and close industry partnerships in tech.' },
    { name: 'University of Victoria (UVic)', location: 'Victoria, BC', popularCourses: ['Law', 'Engineering', 'Business', 'Science', 'Education'], website: 'https://www.uvic.ca', color: '#003366', initials: 'UVic', intlInfo: 'Top Canadian university for research intensity — beautiful island campus with a reputation for environmental and ocean science.' },
  ],
  alberta: [
    { name: 'University of Alberta', location: 'Edmonton, Alberta', popularCourses: ['Engineering', 'Medicine', 'Business', 'Science', 'Law'], website: 'https://www.ualberta.ca', color: '#007C41', initials: 'UoA', intlInfo: 'World top 100 — one of Canada\'s top 5 research universities, renowned for engineering, oil & energy science.' },
    { name: 'University of Calgary', location: 'Calgary, Alberta', popularCourses: ['Business (Haskayne)', 'Engineering', 'Medicine', 'Law', 'Science'], website: 'https://www.ucalgary.ca', color: '#D2492A', initials: 'UCal', intlInfo: 'Entrepreneurship powerhouse — one of Canada\'s most innovative universities, in the energy capital of Canada.' },
  ],
  quebec: [
    { name: 'McGill University', location: 'Montréal, Québec', popularCourses: ['Medicine', 'Law', 'Engineering', 'Business', 'Science'], website: 'https://www.mcgill.ca', color: '#ED1B2F', initials: 'MCG', intlInfo: 'Canada\'s most internationally diverse university and world top 30 — often called the "Harvard of Canada".' },
    { name: 'Concordia University', location: 'Montréal, Québec', popularCourses: ['Business (John Molson)', 'Fine Arts', 'Engineering', 'Computer Science', 'Education'], website: 'https://www.concordia.ca', color: '#912338', initials: 'CU', intlInfo: 'Known for creative industries and Montréal\'s bilingual cultural scene — welcoming to English-speaking international students.' },
    { name: 'Université de Montréal', location: 'Montréal, Québec', popularCourses: ['Medicine', 'Law', 'Computer Science', 'Business', 'Architecture'], website: 'https://www.umontreal.ca', color: '#0A3D91', initials: 'UdeM', intlInfo: 'A Francophone university with world-class faculties — note many programmes are taught in French.' },
  ],
  manitoba: [
    { name: 'University of Manitoba', location: 'Winnipeg, Manitoba', popularCourses: ['Engineering', 'Medicine', 'Law', 'Business', 'Agriculture'], website: 'https://www.umanitoba.ca', color: '#E8151B', initials: 'UM', intlInfo: 'Manitoba\'s largest university — affordable tuition relative to Ontario and BC, with a strong international student community.' },
  ],
  nova_scotia: [
    { name: 'Dalhousie University', location: 'Halifax, Nova Scotia', popularCourses: ['Medicine', 'Law', 'Engineering', 'Business', 'Ocean Studies'], website: 'https://www.dal.ca', color: '#FFCD00', initials: 'Dal', intlInfo: 'Atlantic Canada\'s leading research university — highly regarded for medicine, law, and marine science.' },
  ],
  saskatchewan: [
    { name: 'University of Saskatchewan', location: 'Saskatoon, Saskatchewan', popularCourses: ['Agriculture', 'Engineering', 'Medicine', 'Business', 'Law'], website: 'https://www.usask.ca', color: '#006633', initials: 'USask', intlInfo: 'One of Canada\'s leading research-intensive universities — world-renowned for agriculture and health sciences.' },
  ],
  new_brunswick: [
    { name: 'University of New Brunswick (UNB)', location: 'Fredericton & Saint John, NB', popularCourses: ['Engineering', 'Business', 'Computer Science', 'Law', 'Education'], website: 'https://www.unb.ca', color: '#CC0000', initials: 'UNB', intlInfo: 'Canada\'s oldest English-language university, founded 1785 — strong in engineering and forestry.' },
  ],
  newfoundland: [
    { name: 'Memorial University of Newfoundland', location: "St. John's, Newfoundland", popularCourses: ['Engineering', 'Medicine', 'Business', 'Science', 'Ocean Technology'], website: 'https://www.mun.ca', color: '#722F37', initials: 'MUN', intlInfo: 'Among the most affordable universities in Canada for international students — strong in ocean & petroleum engineering.' },
  ],
  pei: [
    { name: 'University of Prince Edward Island (UPEI)', location: 'Charlottetown, PEI', popularCourses: ['Business', 'Nursing', 'Veterinary Medicine', 'Education', 'Science'], website: 'https://www.upei.ca', color: '#005EB8', initials: 'UPEI', intlInfo: 'A welcoming small-island university with one of Canada\'s only veterinary medicine schools. Excellent for nursing and education.' },
  ],
};

const regionLabels: Record<string, string> = {
  ontario:         '🏙️ Ontario',
  british_columbia:'🏔️ British Columbia',
  alberta:         '🌾 Alberta',
  quebec:          '⚜️ Québec',
  manitoba:        '🌲 Manitoba',
  nova_scotia:     '🌊 Nova Scotia',
  saskatchewan:    '🌻 Saskatchewan',
  new_brunswick:   '🍁 New Brunswick',
  newfoundland:    '⚓ Newfoundland & Labrador',
  pei:             '🏝️ Prince Edward Island',
};

/* ── page content ──────────────────────────────────────────────────── */
const stats = [
  { label: 'Tuition Fees',  value: 'CAD $15,000 – $35,000', sub: 'per year (approx.)' },
  { label: 'Living Costs',  value: 'CAD $15,000 – $20,000', sub: 'per year (est.)' },
  { label: 'Intakes',       value: 'September & January', sub: 'most programmes' },
  { label: 'Work Rights',   value: 'Up to 20 hrs/week', sub: 'during term time' },
];

const whyChoose = [
  { title: 'World-Class Education System', body: 'Canada consistently ranks among the top countries globally for higher education quality. Universities like Toronto, UBC, and McGill are ranked in the world\'s top 40.' },
  { title: 'Post-Graduation Work Permit (PGWP)', body: 'After completing a degree of 8+ months, international graduates can apply for a PGWP lasting up to 3 years, allowing them to work in Canada and pursue Permanent Residency.' },
  { title: 'Safe & Multicultural Society', body: 'Canada is known as one of the world\'s most welcoming and multicultural countries, with large Nigerian and West African communities in cities like Toronto, Calgary, and Edmonton.' },
  { title: 'Work While You Study', body: 'International students may work up to 20 hours per week off-campus during term time, and full-time during scheduled breaks — helping to offset living costs.' },
  { title: 'Pathway to Permanent Residency', body: 'Canada\'s Express Entry and Provincial Nominee Programs (PNPs) actively seek internationally educated graduates. Studying in Canada is a strong starting point for immigration.' },
  { title: 'Co-op & Work Placement Culture', body: 'Canadian universities (especially Waterloo, SFU, UBC) are known for co-operative education — alternating academic and paid work terms that give you Canadian work experience before graduation.' },
];

const popularCourses = [
  'Computer Science & AI', 'Engineering', 'Business Administration', 'Data Science',
  'Nursing & Health Sciences', 'Finance & Accounting', 'Law', 'Environmental Science',
  'Social Work', 'Education', 'Agriculture & Food Science', 'Architecture',
];

function CanadaUniversitySearch() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedUni, setSelectedUni] = useState('');

  const provinceUnis = selectedProvince ? universities[selectedProvince] ?? [] : [];
  const profile = provinceUnis.find(u => u.name === selectedUni);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4" />
            Canada University Finder
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Find Your Canadian University
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore universities across all 10 Canadian provinces. Select a province to discover institutions popular with international students.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <label className="block text-sm font-semibold text-primary mb-2">Select Province</label>
              <div className="relative">
                <select
                  value={selectedProvince}
                  onChange={e => { setSelectedProvince(e.target.value); setSelectedUni(''); }}
                  className="w-full appearance-none rounded-xl border-2 border-border bg-background px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">— Choose a province —</option>
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
                  disabled={!selectedProvince}
                  className="w-full appearance-none rounded-xl border-2 border-border bg-background px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:border-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">{selectedProvince ? '— Choose a university —' : 'Select a province first'}</option>
                  {provinceUnis.map(u => (
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
                    <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">Popular Programmes</p>
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
                      Explore University
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
              Select a province and university above to view the full profile.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function StudyCanada() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#CC0001] via-[#990001] to-[#660001] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #FFFFFF 0%, transparent 60%)' }} />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              🇨🇦 Study Destination — Canada
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Study in Canada
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl">
              Explore world-class education opportunities in Canada with TTEC. From selecting the right university to preparing for departure, our professional education consultancy and travel support services are designed to help you achieve your international study ambitions with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-[#CC0001] hover:bg-white/90 font-bold rounded-full px-8">
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
            {stats.map(({ label, value, sub }) => (
              <div key={label} className="text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🍁</span>
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                <p className="font-serif font-bold text-primary text-base leading-tight">{value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Canada */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Why Canada?
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Why Study in Canada?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                <div className="w-2 h-8 rounded-full bg-[#CC0001] mb-4" />
                <h3 className="font-serif font-bold text-primary text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Search */}
      <CanadaUniversitySearch />

      {/* Popular Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Programmes
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Popular Courses in Canada</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These subjects are most in demand among international students from West Africa at Canadian universities.
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
                <tr className="bg-[#CC0001] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Category</th>
                  <th className="text-left px-6 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Undergraduate Tuition', 'CAD $15,000 – $35,000/year (varies by province & subject)'],
                  ['Postgraduate Tuition',  'CAD $12,000 – $40,000/year'],
                  ['Living Costs',          'CAD $15,000 – $20,000/year (Toronto & Vancouver higher)'],
                  ['Degree Duration',       '4 years UG · 1–2 years PG (taught)'],
                  ['Intakes',              'September (main) · January (many programmes)'],
                  ['Work Rights',          '20 hrs/week during term; full-time during scheduled breaks'],
                  ['Post-Study Work',      'PGWP — up to 3 years (length of study dependent)'],
                  ['PR Pathway',           'Express Entry (CEC) · Provincial Nominee Programs (PNPs)'],
                  ['English Requirement',  'Most Canadian universities require an approved English language proficiency test such as IELTS Academic (or another recognised equivalent) for international applicants. Applicants should check the specific requirements of their chosen institution and programme.'],
                  ['Official Resource',    'EduCanada.ca · IRCC (Immigration Canada)'],
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
            <strong>Visa Note:</strong> Canadian student permit requirements, biometrics, and the application process are covered through TTEC's consultation service.
            {' '}<Link href="/services/advisory" className="font-semibold underline underline-offset-2">Book your advisory session</Link> and we will guide you through every step.
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            * Figures are indicative. Verify with your chosen institution and IRCC (Immigration, Refugees and Citizenship Canada).
          </p>
        </div>
      </section>

      {/* Graduate Employment */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Briefcase className="w-4 h-4" />
              After Graduation
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Graduate Employment & PR Pathways</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Post-Graduation Work Permit', body: 'Work in Canada for up to 3 years after graduation. Gain Canadian work experience — the key to Express Entry points.', color: '#CC0001' },
              { title: 'Express Entry (CEC)', body: 'Canadian Experience Class fast-tracks PR applications for graduates with skilled Canadian work experience. Draws happen regularly.', color: '#003087' },
              { title: 'Provincial Nominee Programs', body: 'Every province has streams targeting internationally educated graduates. Ontario, BC, and Alberta are particularly active.', color: '#006633' },
            ].map(({ title, body, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                <div className="w-10 h-10 rounded-full mb-4 flex items-center justify-center" style={{ background: color + '20' }}>
                  <Briefcase className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="font-serif font-bold text-primary text-base mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Ready to Explore Canada?</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Let TTEC Guide Your Canadian Application
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Same expert guidance, same transparent pricing — now covering Canada as a study destination.
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
