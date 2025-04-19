'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { MotionWrapper } from '@/components/about/motion-wrapper';
import { AboutImage } from '@/components/about/about-image';
import { AboutContent } from '@/components/about/about-content';

export const About = () => {
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });

   return (
      <section id="about" className="py-20 bg-[#0a0a0a]">
         <div className="container mx-auto px-4">
            <MotionWrapper isInView={isInView} ref={ref}>
               <AboutImage />
               <AboutContent />
            </MotionWrapper>
         </div>
      </section>
   );
};
