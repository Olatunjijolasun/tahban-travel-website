import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/2348102164542?text=Hello%20Tahban%2C%20I%20need%20help%20with%20my%20UK%20application"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20b858] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-primary text-sm font-medium py-2 px-4 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-border pointer-events-none">
        Chat with us!
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-8 border-transparent border-l-white"></div>
      </div>
    </motion.a>
  );
};
