'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { MotionWrapper } from '@/components/projects/motion-wrapper';
import { SectionHeader } from '@/components/projects/section-header';
import { ProjectList } from '@/components/projects/project-list';
import { ViewAllButton } from '@/components/projects/view-all-button';

export const Projects = () => {
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });

   return (
      <section id="projects" className="py-20 bg-[#0a0a0a]">
         <div className="container mx-auto px-4">
            <SectionHeader />
            <MotionWrapper isInView={isInView} ref={ref}>
               <ProjectList />
            </MotionWrapper>
            <ViewAllButton />
         </div>
      </section>
   );
};
