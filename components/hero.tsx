'use client';

import { CanvasBackground } from './hero/background';
import { HeroContent } from './hero/hero-content';
import { ScrollIndicator } from './hero/scroll-indicator';

export const Hero = () => {
   return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
         <CanvasBackground />
         <HeroContent />
         <ScrollIndicator />
      </section>
   );
};
