'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './types/types';

export const MobileMenu = ({
   isOpen,
   setIsOpen,
   links,
}: {
   isOpen: boolean;
   setIsOpen: (open: boolean) => void;
   links: NavLink[];
}) => {
   return (
      <>
         <button
            className="md:hidden text-slate-300 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
         >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 right-0 top-16 md:hidden bg-[#121212]/95 backdrop-blur-md z-50"
               >
                  <nav className="container mx-auto px-4 py-4">
                     <ul className="flex flex-col space-y-4">
                        {links.map((link) => (
                           <li key={link.href}>
                              <Link
                                 href={link.href}
                                 className="block text-slate-300 hover:text-primary transition-colors duration-300"
                                 onClick={() => setIsOpen(false)}
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};
