'use client';

import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';
import { NavLinks } from './nav-links';
import { NavLink } from './types/types';

export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   const navLinks: NavLink[] = [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#ai-projects', label: 'AI Projects' },
      { href: '#contact', label: 'Contact' },
   ];

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <header
         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#121212]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
         }`}
      >
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <Logo />
               <NavLinks links={navLinks} />
               <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={navLinks} />
            </div>
         </div>
      </header>
   );
};
