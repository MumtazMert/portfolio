'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

export const MotionWrapper = forwardRef<HTMLDivElement, { children: React.ReactNode; isInView: boolean }>(
   ({ children, isInView }, ref) => {
      const containerVariants = {
         hidden: { opacity: 0 },
         visible: {
            opacity: 1,
            transition: {
               staggerChildren: 0.1,
            },
         },
      };

      return (
         <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
         >
            {children}
         </motion.div>
      );
   }
);

MotionWrapper.displayName = 'MotionWrapper';
