import React from 'react';
import { Link } from 'wouter';

export default function Privacy() {
  React.useEffect(() => {
    document.title = "Privacy Policy - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>
            Tahban Travel Consultant ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website or use our services.
          </p>

          <h2>2. The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data:</strong> includes bank account and payment card details (processed securely).</li>
            <li><strong>Application Data:</strong> includes passport copies, academic transcripts, employment records, and other documents necessary for visa or admission processing.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., processing your visa application).</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, and other third parties who have a business need to know.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
            <br />
            <strong>Email:</strong> TahbanTradingVentrures@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
