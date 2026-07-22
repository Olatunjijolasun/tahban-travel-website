import React from 'react';

export default function Terms() {
  React.useEffect(() => {
    document.title = "Terms & Conditions - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. General</h2>
          <p>
            By using the services of Tahban Travel Consultant, you agree to be bound by these terms and conditions. We reserve the right to amend these terms at any time.
          </p>

          <h2>2. Service Scope</h2>
          <p>
            Tahban Travel Consultant provides advisory and administrative assistance for UK university admissions and UK visa applications. We are an independent consultancy and are not affiliated with UK Visas and Immigration (UKVI) or the UK Government.
          </p>

          <h2>3. Client Responsibilities</h2>
          <p>
            You agree to provide accurate, truthful, and complete information and documentation required for your applications. We are not liable for any application refusal resulting from fraudulent, incomplete, or inaccurate documents provided by you.
          </p>

          <h2>4. Fees and Payments</h2>
          <p>
            Our consultancy fees are separate from any fees charged by universities, UKVI, or the NHS. Consultancy fees are agreed upon after initial consultation and must be paid as per the agreed schedule. Fees paid to UKVI or universities are subject to their respective refund policies.
          </p>

          <h2>5. No Guarantee of Outcome</h2>
          <p>
            While we strive to maximize your chances of success, we do not and cannot guarantee the approval of any visa application or university admission. Decisions are made solely by the respective authorities (UKVI or the University).
          </p>
        </div>
      </div>
    </div>
  );
}
