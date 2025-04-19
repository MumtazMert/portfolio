'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MotionWrapper } from '@/components/contact/motion-wrapper';
import { SectionHeader } from '@/components/contact/section-header';
import { ContactInfoList } from '@/components/contact/contact-info-list';
import { SocialLinks } from '@/components/contact/social-links';

export const Contact = () => {
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   return (
      <section id="contact" className="py-20 bg-[#0a0a0a]">
         <div className="container mx-auto px-4">
            <SectionHeader />
            <MotionWrapper isInView={isInView}>
               <motion.div
                  ref={ref}
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="space-y-8"
               >
                  <h3 className="text-2xl font-semibold">Contact Information</h3>
                  <p className="text-slate-300">
                     Feel free to reach out through any of the following channels. I&apos;m always open to discussing
                     new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <ContactInfoList />
                  <SocialLinks />
               </motion.div>
            </MotionWrapper>
         </div>
      </section>
   );
};
