import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const testimonials = [
  {
    name: "Hassan O.",
    role: "Postgraduate Student",
    story: "I had been refused a UK study visa previously due to a minor financial documentation error. Tahban Travel reviewed my new application with a fine-tooth comb. Their attention to the 28-day rule was incredible. I'm now in my second semester at Leeds.",
    tag: "Study Visa"
  },
  {
    name: "Mrs. Abiodun T.",
    role: "Mother visiting children",
    story: "At 62, I was anxious about the process of applying to visit my daughter who just had a baby in London. Mr. Jolasun was so patient. He helped organise all my property and business documents to prove my ties to Nigeria. My 6-month visitor visa was approved in two weeks.",
    tag: "Visit Visa"
  },
  {
    name: "Abiola M.",
    role: "Career Changer",
    story: "I wanted to pivot from banking to IT via a UK Master's. The School Search report Tahban provided was an eye-opener. They found a university with a conversion course that fit my budget perfectly. The admission support was seamless.",
    tag: "School Search & Admission"
  },
  {
    name: "The Adesoye Family",
    role: "Family Attending Graduation",
    story: "Applying for four people at once was daunting. Tahban handled our family visit visa applications flawlessly. They made sure the sponsorship letters were drafted correctly. We all made it to our son's graduation!",
    tag: "Visit Visa"
  },
  {
    name: "Oluwatoyin A.",
    role: "Medical Professional",
    story: "I needed a UK Standard Visitor visa to sit for my Professional and Linguistic Assessments Board (PLAB) 2 examination in the United Kingdom. The outcome was extremely important for my medical career. Tahban understood the urgency and the specific requirements for medical professionals travelling for the General Medical Council (GMC) licensing assessment. They provided a highly professional and reliable service throughout the process.",
    tag: "Visit Visa"
  },
  {
    name: "Oluwaseun T.",
    role: "Undergraduate Student",
    story: "Tahban's advisory session saved me. I thought I needed a foundation year, but they assessed my WAEC and found a university that accepted me directly into year one. That saved me an entire year of tuition fees.",
    tag: "Advisory Services"
  },
  {
    name: "Samuel F.",
    role: "Tourist",
    story: "I just wanted to take a well-deserved holiday to London. Tahban guided me on how to present my business accounts and tax documents properly so UKVI wouldn't doubt my intention to return. Approved without hassle.",
    tag: "Visit Visa"
  },
  {
    name: "Damilola J.",
    role: "MSc Adult Nursing Student",
    story: "Transitioning into an MSc Adult Nursing programme as a non-nursing graduate seemed challenging, especially understanding the Recognition of Prior Learning (RPL) requirements and preparing the right evidence for admission. Tahban provided clear guidance, supported my RPL preparation, and helped me navigate the university application and visa process without needing to start a new undergraduate nursing degree. Their professional support made the entire journey much simpler and more manageable.",
    tag: "Admission & Visa"
  }
];

export default function Testimonials() {
  React.useEffect(() => {
    document.title = "Success Stories – TTEC Tahban Travel & Education Consultant";
  }, []);

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <div className="bg-primary pt-24 pb-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Success Stories</h1>
          <p className="text-lg text-white/80">
            Real people. Real journeys. Read how we've helped students, families, and professionals achieve their UK dreams.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-10 h-10 text-secondary/30" />
                <div className="bg-muted text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.tag}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1 italic mb-6">
                "{testimonial.story}"
              </p>
              <div className="border-t border-border pt-4 mt-auto">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-6">Will you be our next success story?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Your situation is unique, and so is our approach. Let's discuss how we can help you navigate your UK journey safely and successfully.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold h-14 px-10 rounded-full">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
