'use client';

import { motion, MotionProps } from 'framer-motion';
import { forwardRef } from 'react';

export const MotionWrapper = forwardRef<
   HTMLDivElement,
   { children: React.ReactNode; className?: string } & MotionProps
>(({ children, className, ...motionProps }, ref) => {
   return (
      <motion.div ref={ref} className={className} {...motionProps}>
         {children}
      </motion.div>
   );
});

MotionWrapper.displayName = 'MotionWrapper';
