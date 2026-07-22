import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, MessageSquare, GraduationCap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

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
  england: [
    { name: "University College London (UCL)", location: "London, England", popularCourses: ["Medicine", "Engineering", "Law", "Computer Science", "Architecture"], website: "https://www.ucl.ac.uk", color: "#003078", initials: "UCL", intlInfo: "One of the world's top 10 universities with over 40% international students." },
    { name: "King's College London", location: "London, England", popularCourses: ["Medicine", "Nursing", "Law", "Business", "Psychology"], website: "https://www.kcl.ac.uk", color: "#BE0000", initials: "KCL", intlInfo: "Russell Group university ranked in the world's top 40, strong in health sciences." },
    { name: "University of Manchester", location: "Manchester, England", popularCourses: ["Business", "Engineering", "Medicine", "Computer Science", "Finance"], website: "https://www.manchester.ac.uk", color: "#660099", initials: "UoM", intlInfo: "Global top 50 — over 10,000 international students from 160+ countries." },
    { name: "University of Birmingham", location: "Birmingham, England", popularCourses: ["Business", "Engineering", "Nursing", "Law", "Public Health"], website: "https://www.birmingham.ac.uk", color: "#003A66", initials: "UoB", intlInfo: "Russell Group member, highly sought after by West African students for business and health courses." },
    { name: "University of Nottingham", location: "Nottingham, England", popularCourses: ["Pharmacy", "Business", "Engineering", "Agriculture", "Computer Science"], website: "https://www.nottingham.ac.uk", color: "#006E87", initials: "UoN", intlInfo: "Global top 100 with campuses in the UK, China, and Malaysia." },
    { name: "University of Leeds", location: "Leeds, England", popularCourses: ["Business", "Engineering", "Medicine", "Law", "Data Science"], website: "https://www.leeds.ac.uk", color: "#003865", initials: "UoL", intlInfo: "Top 100 globally, with one of the UK's largest international student communities." },
    { name: "University of Sheffield", location: "Sheffield, England", popularCourses: ["Engineering", "Medicine", "Architecture", "Computer Science", "Business"], website: "https://www.sheffield.ac.uk", color: "#2C0057", initials: "TUoS", intlInfo: "Russell Group — global top 100, renowned for engineering and research." },
    { name: "University of Bristol", location: "Bristol, England", popularCourses: ["Engineering", "Law", "Medicine", "Computer Science", "Finance"], website: "https://www.bristol.ac.uk", color: "#B01C2E", initials: "UoB", intlInfo: "Consistently ranked in the UK top 10, with strong global alumni network." },
    { name: "University of Warwick", location: "Coventry, England", popularCourses: ["Business (WBS)", "Engineering", "Economics", "Computer Science", "Law"], website: "https://www.warwick.ac.uk", color: "#5C2483", initials: "WBS", intlInfo: "Warwick Business School is ranked among Europe's best — a top choice for MBA applicants." },
    { name: "University of Exeter", location: "Exeter, England", popularCourses: ["Business", "Medicine", "Law", "Environmental Science", "Psychology"], website: "https://www.exeter.ac.uk", color: "#003C46", initials: "UoE", intlInfo: "Top UK university with a beautiful campus and strong international student support services." },
    { name: "Coventry University", location: "Coventry, England", popularCourses: ["Business", "Engineering", "Nursing", "Computing", "Architecture"], website: "https://www.coventry.ac.uk", color: "#6D2077", initials: "CU", intlInfo: "One of the UK's fastest-growing modern universities — very popular with Nigerian students." },
    { name: "University of Hertfordshire", location: "Hatfield, England", popularCourses: ["Business", "Nursing", "Engineering", "Computer Science", "Psychology"], website: "https://www.herts.ac.uk", color: "#8B0000", initials: "UH", intlInfo: "Known for excellent student support and strong Nursing and Business programmes." },
    { name: "Anglia Ruskin University", location: "Cambridge & Chelmsford, England", popularCourses: ["Nursing", "Business", "Law", "Social Work", "Psychology"], website: "https://www.aru.ac.uk", color: "#E62B4A", initials: "ARU", intlInfo: "Top university for Nursing — highly popular with international healthcare students." },
    { name: "De Montfort University", location: "Leicester, England", popularCourses: ["Business", "Law", "Nursing", "Engineering", "Fashion Design"], website: "https://www.dmu.ac.uk", color: "#0054A6", initials: "DMU", intlInfo: "Strong community feel, excellent for professional programmes and diverse student population." },
    { name: "University of Bedfordshire", location: "Luton & Bedford, England", popularCourses: ["Nursing", "Business", "Computing", "Social Work", "Education"], website: "https://www.beds.ac.uk", color: "#00445E", initials: "UoB", intlInfo: "An accessible university with strong links to NHS placements for nursing students." },
    { name: "Northumbria University", location: "Newcastle upon Tyne, England", popularCourses: ["Business", "Law", "Computing", "Engineering", "Nursing"], website: "https://www.northumbria.ac.uk", color: "#003087", initials: "NU", intlInfo: "Award-winning student experience, highly ranked for graduate employability." },
    { name: "University of East London", location: "London, England", popularCourses: ["Business", "Nursing", "Psychology", "Social Work", "Engineering"], website: "https://www.uel.ac.uk", color: "#009639", initials: "UEL", intlInfo: "London-based, highly diverse — ranked among the most inclusive universities in the UK." },
    { name: "Middlesex University", location: "London, England", popularCourses: ["Business", "Nursing", "Law", "Computing", "Media"], website: "https://www.mdx.ac.uk", color: "#C8102E", initials: "MDX", intlInfo: "London location with campuses globally, recognised for international student-friendly policies." },
  ],
  scotland: [
    { name: "University of Edinburgh", location: "Edinburgh, Scotland", popularCourses: ["Medicine", "Law", "Business", "Computer Science", "Engineering"], website: "https://www.ed.ac.uk", color: "#041E42", initials: "UoE", intlInfo: "World top 20 — one of the world's oldest and most prestigious universities." },
    { name: "University of Glasgow", location: "Glasgow, Scotland", popularCourses: ["Medicine", "Law", "Engineering", "Business", "Dentistry"], website: "https://www.gla.ac.uk", color: "#003865", initials: "GU", intlInfo: "Russell Group member founded in 1451 — global top 100 with outstanding medical school." },
    { name: "University of Strathclyde", location: "Glasgow, Scotland", popularCourses: ["Engineering", "Business", "Computer Science", "Law", "Pharmacy"], website: "https://www.strath.ac.uk", color: "#CC0000", initials: "UoS", intlInfo: "Scottish University of the Year 2024 — excellent for engineering and business." },
    { name: "Heriot-Watt University", location: "Edinburgh, Scotland", popularCourses: ["Engineering", "Business", "Computer Science", "Architecture", "Data Science"], website: "https://www.hw.ac.uk", color: "#003B5C", initials: "HWU", intlInfo: "Global campuses in Dubai and Malaysia — highly respected for engineering and business." },
    { name: "Robert Gordon University", location: "Aberdeen, Scotland", popularCourses: ["Business", "Nursing", "Engineering", "Law", "Architecture"], website: "https://www.rgu.ac.uk", color: "#002060", initials: "RGU", intlInfo: "Top UK university for graduate employment outcomes — highly practical programmes." },
    { name: "University of Dundee", location: "Dundee, Scotland", popularCourses: ["Medicine", "Dentistry", "Law", "Business", "Art & Design"], website: "https://www.dundee.ac.uk", color: "#1E3765", initials: "UoD", intlInfo: "Consistently ranked in the UK top 20 for student satisfaction, exceptional medical school." },
    { name: "University of Aberdeen", location: "Aberdeen, Scotland", popularCourses: ["Medicine", "Law", "Engineering", "Business", "Divinity"], website: "https://www.abdn.ac.uk", color: "#003865", initials: "AU", intlInfo: "Founded 1495 — one of the UK's ancient universities, known for medicine and petroleum engineering." },
  ],
  wales: [
    { name: "Cardiff University", location: "Cardiff, Wales", popularCourses: ["Medicine", "Engineering", "Law", "Business", "Pharmacy"], website: "https://www.cardiff.ac.uk", color: "#CF142B", initials: "CU", intlInfo: "Russell Group member — global top 150, the leading research university in Wales." },
    { name: "Swansea University", location: "Swansea, Wales", popularCourses: ["Engineering", "Business", "Computer Science", "Medicine", "Law"], website: "https://www.swansea.ac.uk", color: "#003882", initials: "SU", intlInfo: "UK top 50, award-winning bay campus — strong for engineering and science." },
    { name: "University of South Wales", location: "Pontypridd & Cardiff, Wales", popularCourses: ["Business", "Nursing", "Computing", "Engineering", "Law"], website: "https://www.southwales.ac.uk", color: "#1D1D6B", initials: "USW", intlInfo: "Modern university with strong NHS links for Nursing students and excellent student support." },
    { name: "Bangor University", location: "Bangor, Wales", popularCourses: ["Marine Biology", "Business", "Psychology", "Music", "Nursing"], website: "https://www.bangor.ac.uk", color: "#003865", initials: "BU", intlInfo: "Picturesque campus, high student satisfaction — excellent for science and environmental courses." },
  ],
  northern_ireland: [
    { name: "Queen's University Belfast", location: "Belfast, Northern Ireland", popularCourses: ["Medicine", "Engineering", "Law", "Business", "Computer Science"], website: "https://www.qub.ac.uk", color: "#003765", initials: "QUB", intlInfo: "Russell Group — global top 200, world-class research and excellent medical school." },
    { name: "Ulster University", location: "Belfast & Derry, Northern Ireland", popularCourses: ["Business", "Nursing", "Computing", "Law", "Social Work"], website: "https://www.ulster.ac.uk", color: "#009844", initials: "UU", intlInfo: "Modern university with multiple campuses, strong focus on employability and professional programmes." },
  ],
};

const regionLabels: Record<string, string> = {
  england: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
  scotland: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland',
  wales: '🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales',
  northern_ireland: '🇬🇧 Northern Ireland',
};

export function UKUniversitySearch() {
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
            UK University Finder
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Find Your UK University
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore universities across England, Scotland, Wales, and Northern Ireland. Select a region to discover the most popular institutions among international students.
          </p>
        </div>

        {/* Dropdowns */}
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Region */}
            <div className="relative">
              <label className="block text-sm font-semibold text-primary mb-2">Select UK Study Region</label>
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

            {/* University */}
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

          {/* University Profile Card */}
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
                {/* Card header with colour bar */}
                <div className="h-2" style={{ background: profile.color }} />

                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    {/* Logo badge */}
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
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed italic">
                          {profile.intlInfo}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">Popular Courses</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.popularCourses.map(course => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium border border-primary/10"
                        >
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
                        Request Guidance
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty state prompt */}
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
