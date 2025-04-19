'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MotionWrapper } from './motion-wrapper';

export const HeroContent = () => {
   return (
      <div className="container mx-auto px-4 z-10 pt-16">
         <div className="max-w-3xl mx-auto text-center">
            <MotionWrapper
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="mb-6"
            >
               <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                  Frontend Developer
               </span>
            </MotionWrapper>

            <MotionWrapper
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-4xl md:text-6xl font-bold mb-6 text-glow"
            >
               <h1>Building Digital Experiences with Code</h1>
            </MotionWrapper>

            <MotionWrapper
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-xl text-slate-300 mb-8"
            >
               <p>
                  I create modern web applications with cutting-edge technologies and a focus on performance,
                  accessibility, and user experience.
               </p>
            </MotionWrapper>

            <MotionWrapper
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-4 justify-center"
            >
               <Link href="#projects">
                  <Button size="lg" className="bg-primary hover:bg-primary/80 text-white w-full sm:w-auto">
                     View Projects
                  </Button>
               </Link>
               <Link href="#contact">
                  <Button
                     size="lg"
                     variant="outline"
                     className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                  >
                     Contact Me
                  </Button>
               </Link>
            </MotionWrapper>
         </div>
      </div>
   );
};
