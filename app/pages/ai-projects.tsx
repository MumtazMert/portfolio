'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { MotionWrapper } from '@/components/ai-projects/motion-wrapper';
import { SectionHeader } from '@/components/ai-projects/section-header';
import { AIProjectList } from '@/components/ai-projects/ai-project-list';
import { ViewAllButton } from '@/components/ai-projects/view-all-button';

export const AIProjects = () => {
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });

   return (
      <section id="ai-projects" className="py-20 bg-[#121212]">
         <div className="container mx-auto px-4">
            <SectionHeader />
            <MotionWrapper isInView={isInView} ref={ref}>
               <AIProjectList />
            </MotionWrapper>
            <ViewAllButton />
         </div>
      </section>
   );
};
