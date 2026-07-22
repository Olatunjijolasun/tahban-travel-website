import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    document.title = "Blog - Tahban Travel Consultant";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  return (
    <div className="w-full bg-background min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-8 font-serif text-4xl font-bold">
        T
      </div>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Insights & Updates</h1>
      <p className="text-xl text-muted-foreground mb-10">Our blog is currently under construction. Check back soon for expert articles on UK visas, studying abroad, and relocation.</p>
      
      <div className="bg-white p-8 rounded-2xl border border-border shadow-sm max-w-md w-full">
        <h2 className="text-lg font-bold text-primary mb-2">Get Notified</h2>
        <p className="text-sm text-muted-foreground mb-6">Subscribe to our newsletter to know when we launch.</p>
        
        {submitted ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg text-sm font-medium border border-green-200">
            Thank you! We'll let you know when our first article drops.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-secondary text-primary hover:bg-secondary/90">
              Notify Me
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
