import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock, Calendar, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const SERVICE_OPTIONS = [
  { value: 'Advisory / General Consultation',                    label: 'Advisory Services',                              fee: '£25'  },
  { value: 'School Search Report & Top 3 Schools',               label: 'School Search Report & Top 3',                   fee: '£100' },
  { value: 'UK Visa Application Guide',                          label: 'UK Visa Application Guide',                      fee: '£150' },
  { value: 'USA Tourist Visa (B-2) Guidance',                    label: 'USA Tourist Visa (B-2)',                         fee: '£200' },
  { value: 'Full Admission Support (School Search + Visa Guide + Admission)', label: 'Full Admission Support — Full Package', fee: '£350' },
  { value: 'Student Accommodation Assistance',                   label: 'Student Accommodation',                          fee: '£50'  },
  { value: 'Hotel Booking Assistance',                           label: 'Hotel Booking',                                  fee: '£50'  },
  { value: 'Air Flight Booking Assistance',                      label: 'Air Flight Booking',                             fee: '£50'  },
  { value: 'General Enquiry',                                    label: 'General Enquiry',                                fee: null   },
];

const APPT_SERVICES = [
  'Advisory Session',
  'School Search Consultation',
  'UK Admission Support',
  'UK Visa Application Guidance',
  'USA Tourist Visa Guidance',
  'Student Accommodation Assistance',
  'Hotel Booking',
  'Air Flight Booking',
  'General Consultation',
];

export default function Contact() {
  React.useEffect(() => { document.title = "Contact Us - Tahban Travel & Education Consultancy"; }, []);

  const [msgSent, setMsgSent] = useState(false);
  const [apptSent, setApptSent] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  /* ── "Send us a message" — builds a pre-filled mailto: ── */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name    = fd.get('name')    as string;
    const email   = fd.get('email')   as string;
    const phone   = fd.get('phone')   as string;
    const service = fd.get('service') as string;
    const message = fd.get('message') as string;

    const serviceInfo = SERVICE_OPTIONS.find(s => s.value === service);
    const feeNote = serviceInfo?.fee ? `\nService fee: ${serviceInfo.fee}` : '';

    const subject = encodeURIComponent(
      service && service !== 'General Enquiry'
        ? `Enquiry — ${service}`
        : `General Enquiry from ${name}`
    );
    const body = encodeURIComponent(
      `Dear Tahban Team,\n\n` +
      `I am writing to enquire about your services.\n\n` +
      `--- My Details ---\n` +
      `Name:    ${name}\n` +
      `Email:   ${email}\n` +
      `Phone:   ${phone}\n` +
      `Service: ${service || 'Not specified'}${feeNote}\n\n` +
      `--- My Message ---\n${message}\n\n` +
      `Please get back to me at your earliest convenience.\n\nKind regards,\n${name}`
    );

    window.open(`mailto:TahbanTradingVentures@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setMsgSent(true);
  };

  /* ── Appointment booking — existing mailto: approach ── */
  const handleAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name    = fd.get('appt-name')    as string;
    const email   = fd.get('appt-email')   as string;
    const date    = fd.get('appt-date')    as string;
    const time    = fd.get('appt-time')    as string;
    const service = fd.get('appt-service') as string;
    const notes   = fd.get('appt-notes')   as string;

    const subject = encodeURIComponent(`Appointment Request — ${service}`);
    const body = encodeURIComponent(
      `Dear Tahban Team,\n\nI would like to book a consultation appointment.\n\n` +
      `Name: ${name}\nEmail: ${email}\nPreferred Date: ${date}\nPreferred Time: ${time} (Nigeria/UK time)\n` +
      `Service of Interest: ${service}\nAdditional Notes: ${notes || 'None'}\n\n` +
      `Please confirm availability at your earliest convenience.\n\nKind regards,\n${name}`
    );

    window.open(`mailto:TahbanTradingVentures@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setApptSent(true);
  };

  const selectedFee = SERVICE_OPTIONS.find(s => s.value === selectedService)?.fee;

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary pt-24 pb-32 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-white/80">
            Whether you're ready to start your application or just have a few questions, our team in Lagos and the United Kingdom is here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Forms column ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Send a message */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
              {msgSent ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-primary text-xl mb-2">Email Ready!</h3>
                  <p className="text-muted-foreground mb-4">
                    Your email client opened with a pre-filled message. Hit <strong>Send</strong> and we'll get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setMsgSent(false)}>Send another message</Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-2">Send us a message</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill in the form — clicking <strong>"Send Email"</strong> opens your email app with everything pre-filled. Just hit send.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (with country code)</Label>
                        <Input id="phone" name="phone" placeholder="+234 800 000 0000" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service of Interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select a service...</option>
                          {SERVICE_OPTIONS.map(s => (
                            <option key={s.value} value={s.value}>
                              {s.label}{s.fee ? ` — ${s.fee}` : ''}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service fee callout */}
                    {selectedFee && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-secondary/10 border border-secondary/30 rounded-xl px-5 py-3 flex items-center gap-3"
                      >
                        <span className="text-2xl font-serif font-bold text-secondary">{selectedFee}</span>
                        <span className="text-sm text-muted-foreground">consultation fee for this service. We'll confirm the full details when we reply.</span>
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your situation and what you'd like help with..."
                        className="min-h-[140px]"
                        required
                      />
                    </div>

                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex gap-3 text-sm text-muted-foreground">
                      <Send className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>
                        Clicking <strong>"Send Email"</strong> opens your email app (Gmail, Outlook, etc.) with your message pre-filled and addressed to{' '}
                        <span className="text-primary font-medium">TahbanTradingVentures@gmail.com</span>. Simply press Send.
                      </span>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                      <Send className="w-4 h-4 mr-2" /> Send Email
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Appointment Booking */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary">Book an Appointment</h2>
                  <p className="text-sm text-muted-foreground">Schedule a consultation — we'll confirm via email or WhatsApp within 24 hours.</p>
                </div>
              </div>

              {apptSent ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-primary text-xl mb-2">Request Sent!</h3>
                  <p className="text-muted-foreground mb-4">Your appointment email is ready to send. We'll confirm your slot within 24 hours by email or WhatsApp.</p>
                  <Button variant="outline" onClick={() => setApptSent(false)}>Book another appointment</Button>
                </div>
              ) : (
                <form onSubmit={handleAppointment} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="appt-name">Full Name</Label>
                      <Input id="appt-name" name="appt-name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appt-email">Your Email</Label>
                      <Input id="appt-email" name="appt-email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="appt-date">Preferred Date</Label>
                      <Input id="appt-date" name="appt-date" type="date" min={new Date().toISOString().split('T')[0]} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appt-time">Preferred Time</Label>
                      <select id="appt-time" name="appt-time" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required>
                        <option value="">Select a time...</option>
                        {['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appt-service">Service Required</Label>
                    <select id="appt-service" name="appt-service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required>
                      <option value="">Select a service...</option>
                      {APPT_SERVICES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appt-notes">Additional Notes (optional)</Label>
                    <Textarea id="appt-notes" name="appt-notes" placeholder="Any context that will help us prepare for your consultation..." className="min-h-[80px]" />
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 flex gap-3">
                    <Calendar className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Clicking <strong>"Request Appointment"</strong> opens your email app with the request pre-filled. We'll confirm your booking by email or WhatsApp within 24 hours.</p>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full">
                    <Calendar className="w-5 h-5 mr-2" /> Request Appointment
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* ── Contact Info sidebar ── */}
          <div className="space-y-6">
            <div className="bg-primary text-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-serif font-bold text-xl mb-6 text-secondary">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Principal Consultant — UK (Call)</p>
                    <a href="tel:+447721709440" className="text-lg font-medium hover:text-secondary transition-colors">+44 7721 709440</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Lagos Agent — Nigeria (WhatsApp)</p>
                    <a href="https://wa.me/2348102164542" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-[#25D366] transition-colors">+234 810 216 4542</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Email</p>
                    <a href="mailto:TahbanTradingVentures@gmail.com" className="text-sm font-medium hover:text-secondary transition-colors break-all">TahbanTradingVentures@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium mb-1">Business Hours</p>
                    <p className="text-sm font-medium">Mon – Fri, 9:00 AM – 9:00 PM</p>
                    <p className="text-xs text-white/50 mt-0.5">UK & Nigeria time zones covered</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-serif font-bold text-xl mb-4 text-primary">Our Presence</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-secondary"/> 🇳🇬 Lagos, Nigeria</h4>
                  <p className="text-xs text-muted-foreground mb-2">Local Agent — in-person appointments via WhatsApp</p>
                  <iframe title="Lagos Office Map" src="https://maps.google.com/maps?q=Victoria+Island,Lagos,Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed" className="w-full h-32 rounded-lg border-0 bg-muted" loading="lazy"></iframe>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-secondary"/> 🇬🇧 Bedfordshire, UK</h4>
                  <p className="text-xs text-muted-foreground mb-2">Principal Consultant — Olatunji T. Jolasun</p>
                  <iframe title="Bedfordshire UK Map" src="https://maps.google.com/maps?q=LU2,Luton,Bedfordshire,UK&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-32 rounded-lg border-0 bg-muted" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
