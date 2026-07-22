import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'wouter';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tahban-cookie-consent');
    if (!consent) {
      // Delay showing it slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tahban-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('tahban-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl bg-white shadow-2xl rounded-2xl border border-border p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-muted-foreground flex-1">
              We use cookies to improve your experience on our site and to analyze web traffic. 
              By clicking "Accept", you agree to our use of cookies. 
              Read our <Link href="/legal/privacy" className="text-primary underline">Privacy Policy</Link> for more details.
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none" onClick={handleDecline}>
                Decline
              </Button>
              <Button className="flex-1 md:flex-none" onClick={handleAccept}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
