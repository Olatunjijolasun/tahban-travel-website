import React from 'react';
import { Link } from 'wouter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

/* Fees section — rich JSX for the structured pricing answer */
const FeesAnswer = () => (
  <div className="space-y-5 text-base">
    {/* Education & Admissions */}
    <div>
      <p className="font-semibold text-primary mb-2">Education &amp; Admissions</p>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-medium text-primary">Initial Advisory Consultation</span>
          <span className="text-secondary font-bold">£50</span>
          <span className="text-xs text-muted-foreground">— Personalised assessment of your academic background, career goals, study options, and recommended next steps</span>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-medium text-primary">School Search Report &amp; Top 3 University Selection</span>
          <span className="text-secondary font-bold">£100</span>
          <span className="text-xs text-muted-foreground">— Research and recommendation of suitable universities based on your qualifications, preferred course, location, budget, and career objectives</span>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-medium text-primary">University Admission Support</span>
          <span className="text-secondary font-bold">£350</span>
          <span className="text-xs text-muted-foreground">— End-to-end application support for UK, Ireland, and Canada — university selection, personal statement guidance, document review, and submission support</span>
        </li>
      </ul>
    </div>

    {/* Specialist Packages */}
    <div className="border-t border-border pt-4">
      <p className="font-semibold text-primary mb-3">Specialist &amp; Premium Packages</p>
      <div className="space-y-3">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <p className="font-medium text-primary text-sm">MSc Adult Nursing Transition Pathway Package — <span className="text-secondary">£750</span></p>
          <p className="text-sm text-muted-foreground mt-1">Specialist support for non-nursing graduates progressing into UK MSc Adult Nursing programmes, including eligibility assessment, Recognition of Prior Learning (RPL) preparation, evidence guidance, university application support, and interview preparation.</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-medium text-primary text-sm">Premium International Student Journey Package — <span className="text-secondary">£900</span></p>
          <p className="text-sm text-muted-foreground mt-1">Complete support journey covering university search, admission support, specialist pathway support (where applicable), visa readiness, accommodation guidance, and pre-arrival preparation.</p>
        </div>
      </div>
    </div>

    {/* Visa Services */}
    <div className="border-t border-border pt-4">
      <p className="font-semibold text-primary mb-2">Visa Services</p>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-medium text-primary">Student Visa Guidance</span>
          <span className="text-secondary font-bold">£300</span>
          <span className="text-xs text-muted-foreground">— Professional student visa guidance for UK, Ireland, and Canada — document review, application preparation, and submission support</span>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-medium text-primary">USA Tourist Visa (B-2) Guidance</span>
          <span className="text-secondary font-bold">£350</span>
          <span className="text-xs text-muted-foreground">— Visitor visa application support, supporting document review, travel purpose guidance, and interview preparation</span>
        </li>
      </ul>
    </div>

    {/* Accommodation & Travel */}
    <div className="border-t border-border pt-4">
      <p className="font-semibold text-primary mb-3">Accommodation &amp; Travel Support</p>
      <div className="space-y-3">
        <div className="bg-muted/50 rounded-xl p-4">
          <p className="font-medium text-primary text-sm">Student Accommodation Support — <span className="text-secondary">£50</span></p>
          <p className="text-sm text-muted-foreground mt-1">Assistance identifying suitable accommodation options based on your university, budget, and move-in timeline.</p>
        </div>
        <div className="bg-muted/50 rounded-xl p-4">
          <p className="font-medium text-primary text-sm">Hotel Booking Support — <span className="text-secondary">£50 per booking</span></p>
          <p className="text-sm text-muted-foreground mt-1">Short-term accommodation booking assistance — including refundable reservation letters for visa applications.</p>
        </div>
        <div className="bg-muted/50 rounded-xl p-4">
          <p className="font-medium text-primary text-sm">Air Flight Booking Support — <span className="text-secondary">£50 per booking</span></p>
          <p className="text-sm text-muted-foreground mt-1">Flight search and booking assistance including fare comparison, route guidance, and error-free ticketing.</p>
        </div>
      </div>
    </div>

    <p className="text-sm text-muted-foreground border-t border-border pt-3">
      All fees are confirmed in writing after your free initial consultation. Government, university, and UKVI fees are separate and paid directly by you to the relevant institution. <Link href="/services" className="text-secondary font-semibold hover:underline">View full pricing table →</Link>
    </p>
  </div>
);

type FaqItem = { question: string; answer: React.ReactNode; };

const faqs: FaqItem[] = [
  {
    question: "How do I know Tahban is legitimate?",
    answer: "Tahban Travel Consultant operates under the Tahban Trading Ventures trademark. We are transparent about how we are structured: our Principal Consultant, Olatunji T. Jolasun, is based in the UK — giving us direct, real-time access to UKVI policy and UK university relationships. A dedicated local agent is present in Lagos, Nigeria, available for in-person appointments, document review, and on-the-ground client support. Appointments with the Lagos agent can be booked via WhatsApp."
  },
  {
    question: "Do you guarantee my visa will be approved?",
    answer: "No legitimate consultancy can guarantee a visa approval, as the final decision rests entirely with UK Visas and Immigration (UKVI). What we do guarantee is that we will maximise your chances of success by ensuring your application is flawless, your documents are perfect, and you are fully prepared for any interviews."
  },
  {
    question: "What documents do I need for a UK student visa?",
    answer: "Generally, you need: a valid passport, your Confirmation of Acceptance for Studies (CAS) from a UK university, proof of funds (bank statements showing 28 consecutive days), degree certificate(s) and academic transcripts, English language test results (e.g. IELTS), ATAS certificate (if your course requires it), tuberculosis test results, and a police report (if applicable). We provide a tailored, detailed checklist specific to your profile during consultation."
  },
  {
    question: "What documents do I need for a UK visitor visa?",
    answer: "You'll typically need: a valid passport, evidence of your travel history, proof of sufficient funds for your trip, proof of ties to your home country (employment letter, payslips, property documents), the specific reason for your visit (invitation letter, hotel bookings, medical appointment letters), degree certificate or evidence of professional status, and a police report (if applicable). We will review your specific situation thoroughly."
  },
  {
    question: "How long does the process take?",
    answer: "For admissions, securing an offer typically takes 4–8 weeks depending on the university and your application strength. For visas, standard UKVI processing is typically 3 weeks for both student and visitor visas, measured from the date your biometrics are submitted at the Visa Application Centre. Priority visa services are available directly through UKVI for an additional fee, which can reduce this significantly. We will advise you on the best option for your timeline during consultation."
  },
  {
    question: "What are your fees?",
    answer: <FeesAnswer />
  },
  {
    question: "Can I contact you on WhatsApp?",
    answer: "Yes! Our Lagos agent is available via WhatsApp at +234 810 216 4542. We are available Monday to Friday, 9:00 AM – 9:00 PM, covering both UK and Nigeria time zones — so you can reach us at a time that works for you, whether you're in Lagos or abroad. WhatsApp is ideal for quick queries, document questions, and booking in-person consultations in Lagos."
  },
  {
    question: "Do you have offices in Nigeria?",
    answer: "Yes. We have a dedicated local agent in Lagos who is available for in-person meetings, document collection, and consultations. Our Principal Consultant, Olatunji T. Jolasun, is based in the UK and oversees all cases. Book via WhatsApp to arrange an in-person session with us."
  },
  {
    question: "Do you help with USA Tourist Visas?",
    answer: "Yes. We provide full support for the US B-2 Tourist/Visitor Visa — including DS-160 form completion, document assembly, MRV fee payment guidance, US Embassy interview appointment booking, and mock interview preparation sessions. The US visa process is interview-based, so preparation is critical. We assess your profile first to give you an honest picture of your chances before you spend money on fees. Our fee for this service is £350."
  },
  // ── Ireland ──
  {
    question: "Can TTEC help me apply to Irish universities?",
    answer: "Yes. TTEC provides full education consultancy for Ireland, including university selection, admissions guidance, personal statement support, document review, and submission support. Ireland has both public universities (via the CAO system for undergraduate) and direct postgraduate applications. We guide you through both routes. Our University Admission Support fee is £350 and covers the United Kingdom, Ireland, and Canada."
  },
  {
    question: "What English language qualifications do I need for Ireland?",
    answer: "Many Irish universities may accept WAEC or NECO English Language results for eligible applicants, subject to each university's admission requirements. Some institutions or programmes may require IELTS or another recognised English language qualification. We review your profile during consultation and advise on the most appropriate route for your target university and programme."
  },
  {
    question: "How do I apply for an Irish student visa?",
    answer: "International students from non-EU/EEA countries (including Nigeria, Ghana, and other West African nations) generally require an Irish student visa (Study Visa — 'C' or 'D') before travelling. The process involves receiving a letter of acceptance from an Irish institution, applying online via the Irish Immigration Service (INIS), submitting financial evidence, and attending an appointment at the Irish Embassy or consulate. TTEC's consultation service covers the full process — we advise on documents, financial requirements, and application preparation."
  },
  {
    question: "What financial evidence is required for an Irish student visa?",
    answer: "Irish student visa applicants are generally required to show sufficient funds to cover tuition fees and living costs. A common guideline is evidence of at least €7,000 for living expenses plus full tuition fees, though this can vary. We provide a tailored financial evidence checklist during consultation based on your specific situation and the current Irish Immigration Service requirements."
  },
  {
    question: "What is the typical Ireland university application timeline?",
    answer: "For undergraduate students, the CAO (Central Applications Office) main deadline is 1 February for most courses (a late application round is also available). Postgraduate applications are made directly to universities and deadlines vary — typically October to March for the following September intake. We recommend starting at least 6–9 months before your intended intake to allow time for document preparation, application, offer, visa, and travel arrangements."
  },
  // ── Canada ──
  {
    question: "Can TTEC help me apply to Canadian universities?",
    answer: "Yes. TTEC provides education consultancy for Canada including university selection, admissions guidance, personal statement support, and application submission. Canadian applications are made directly to universities (there is no centralised system like UCAS or CAO). Our University Admission Support service (£350) covers UK, Ireland, and Canada."
  },
  {
    question: "Do I need IELTS to study in Canada?",
    answer: "Most Canadian universities require an approved English language proficiency test — IELTS Academic is the most widely accepted, though many institutions also accept TOEFL iBT, PTE Academic, Duolingo English Test, or Cambridge qualifications. The minimum score required varies by university and programme. We advise on the specific requirements for your target institution during consultation."
  },
  {
    question: "What is the Canadian Study Permit process?",
    answer: "To study in Canada, international students require a Study Permit, which is applied for through Immigration, Refugees and Citizenship Canada (IRCC) after receiving a Letter of Acceptance (LOA) from a Designated Learning Institution (DLI). The application can be submitted online. Processing times vary — typically 4–12 weeks, though this changes. Biometrics are required for Nigerian and most West African applicants. TTEC provides guidance throughout the study permit process as part of our Student Visa Guidance service (£300)."
  },
  {
    question: "How much proof of funds is needed for a Canadian study permit?",
    answer: "IRCC requires applicants to demonstrate they have sufficient funds to cover: tuition for the first year of study, living expenses of at least CAD $10,000 per year (more for Quebec), and return transportation. TTEC will advise on the exact financial evidence requirements based on your province of study and programme details during consultation."
  },
  {
    question: "How long does Canadian study permit processing take?",
    answer: "Processing times for Canadian study permits vary and change frequently. Historically, online applications have been processed in 4–12 weeks, though during high-demand periods processing can take longer. We recommend applying as early as possible after receiving your Letter of Acceptance. TTEC monitors IRCC processing time guidance and advises clients accordingly."
  },
  // ── USA Tourist Visa ──
  {
    question: "What documents are needed for a US B-2 tourist visa?",
    answer: "For a US B-2 tourist/visitor visa, you will typically need: a valid passport (valid for at least 6 months beyond your intended stay), the DS-160 online application form, a photo meeting US visa photo standards, MRV visa fee payment receipt, an appointment confirmation, evidence of the purpose of your visit (invitation letter, travel itinerary, hotel bookings), proof of financial means (bank statements, payslips), proof of ties to your home country (employment letter, property documents, family ties), and your travel history. We review your full profile and tailor your document checklist during consultation."
  },
  {
    question: "How does the US visa interview work?",
    answer: "The US B-2 visa process is interview-based. After completing your DS-160, paying the MRV fee, and booking an appointment at the US Embassy or Consulate (e.g. the US Embassy in Abuja or Lagos for Nigerian applicants), you will attend a personal interview with a Consular Officer. The officer will ask about your travel purpose, finances, ties to home, and intent to return. TTEC provides mock interview preparation to help you communicate your answers clearly and confidently."
  },
  {
    question: "What are the common reasons for a US tourist visa refusal?",
    answer: "Common refusal reasons under Section 214(b) include: failure to demonstrate strong ties to your home country, insufficient evidence of financial means, a weak or unclear travel purpose, previous overstays or immigration violations, and inconsistencies in the application. TTEC assesses your profile honestly before you invest in fees — if your profile has significant risk factors, we will discuss them with you transparently and advise on how to strengthen your application or whether to proceed."
  },
  // ── General TTEC ──
  {
    question: "How does a TTEC consultation work?",
    answer: "A TTEC advisory consultation begins with a structured assessment of your background — academic qualifications, career goals, target country, course preferences, and timeline. Based on this, we provide personalised recommendations on the right destination, universities, courses, application route, and visa pathway. Consultations are conducted via WhatsApp, phone, or video call. The initial advisory session is £50 and is credited towards any further service you book with us."
  },
  {
    question: "How do I pay for TTEC services?",
    answer: "TTEC accepts payment via bank transfer (UK bank account), and we can advise on suitable payment methods for clients in Nigeria and West Africa. All fees are confirmed in writing before any work begins — we do not request payment until you have a written service agreement from us. We never ask for payment via informal channels (gift cards, cash apps, etc.)."
  },
  {
    question: "What do I receive when I use a TTEC service?",
    answer: "Depending on the service, you receive: a written service agreement before work begins, a personalised action plan, document checklists tailored to your profile, draft personal statements and application materials for your review and approval, preparation guidance and mock sessions, and ongoing communication throughout the process. All of your documents remain yours — we never retain originals."
  },
  {
    question: "What is the difference between the Advisory Consultation and the Premium Journey Package?",
    answer: "The Initial Advisory Consultation (£50) is a standalone session — ideal if you want expert guidance on your options before committing to a full service. The Premium Journey Package (£900) is a comprehensive end-to-end service covering university search, admissions, visa readiness, accommodation, and pre-departure support. It is best suited to students who want full support from start to finish. Individual services (admission support, visa guidance, etc.) can also be booked separately — we recommend starting with the advisory consultation so we can recommend the right level of support for your situation."
  },
  {
    question: "Do you offer hotel booking assistance?",
    answer: "Yes. We provide hotel sourcing and booking support for both UK and USA travel. For visa applications, we can help obtain fully refundable hotel reservation letters (a required supporting document for many visitor and tourist visa applications). For confirmed travellers, we source suitable options matching your budget, city, and purpose of visit. Our service fee is £50 per booking assisted; the hotel costs are paid directly by you to the property."
  },
  {
    question: "What is a CAS letter?",
    answer: "CAS stands for Confirmation of Acceptance for Studies. It is an electronic document issued by your UK university once you have accepted an unconditional offer and paid any required deposit. It contains a unique reference number that you MUST have before applying for a student visa."
  },
  {
    question: "Can I apply for UK admission without meeting all the requirements?",
    answer: "Universities may offer 'Conditional' admission if you are pending a final result (like WAEC, NECO, or degree transcript). We can help you secure a conditional offer and guide you on exactly how to meet the conditions for full acceptance."
  }
];

export default function Faq() {
  React.useEffect(() => {
    document.title = "FAQ – TTEC Tahban Travel & Education Consultant";
  }, []);

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <div className="bg-primary pt-24 pb-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-white/80">
            Clear, honest answers to the most common questions about UK visas, admissions, and how we work.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-3xl -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-border">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-primary hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 font-bold text-primary hover:bg-secondary/90 transition-colors">
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
