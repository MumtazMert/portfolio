'use client';

import { ArrowDown } from 'lucide-react';
import { MotionWrapper } from './motion-wrapper';

export const ScrollIndicator = () => {
   return (
      <MotionWrapper
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
            duration: 0.8,
            delay: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 0.5,
         }}
         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
         <ArrowDown className="text-primary animate-bounce" size={32} />
      </MotionWrapper>
   );
};
