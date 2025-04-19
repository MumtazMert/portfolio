'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { MotionWrapper } from '@/components/skills/motion-wrapper';
import { SectionHeader } from '@/components/skills/section-header';
import { SkillList } from '@/components/skills/skill-list';

export const Skills = () => {
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   return (
      <section id="skills" className="py-20 bg-[#121212]">
         <div className="container mx-auto px-4">
            <SectionHeader />
            <MotionWrapper isInView={isInView} ref={ref}>
               <SkillList />
            </MotionWrapper>
         </div>
      </section>
   );
};
