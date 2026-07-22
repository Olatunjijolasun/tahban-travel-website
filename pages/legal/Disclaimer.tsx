import React from 'react';

export default function Disclaimer() {
  React.useEffect(() => {
    document.title = "Disclaimer - Tahban Travel Consultant";
  }, []);

  return (
    <div className="w-full bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Disclaimer</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary">
          
          <h2>Independent Consultancy</h2>
          <p>
            Tahban Travel Consultant is an independent, private consulting firm. <strong>We are NOT a government agency</strong>, and we are not affiliated with, endorsed by, or partnered with UK Visas and Immigration (UKVI), the Home Office, or the UK Government.
          </p>

          <h2>Visa Decisions</h2>
          <p>
            The granting or refusal of a UK Visa is at the sole discretion of UK Visas and Immigration (UKVI). Tahban Travel Consultant provides expert advice, application preparation, and administrative support, but <strong>we cannot guarantee visa approval</strong>. Any claims of "guaranteed visas" by any agency are fraudulent and should be avoided.
          </p>

          <h2>University Admissions</h2>
          <p>
            Similarly, university admission decisions rest entirely with the academic institutions. We assist in finding the right match and preparing a strong application, but the final offer is granted by the university.
          </p>

          <h2>Information Accuracy</h2>
          <p>
            Immigration rules and university policies change frequently. While we make every effort to ensure the information on this website and provided during our consultations is accurate and up-to-date, we do not accept liability for errors, omissions, or changes in law that occur after advice has been given.
          </p>
        </div>
      </div>
    </div>
  );
}
