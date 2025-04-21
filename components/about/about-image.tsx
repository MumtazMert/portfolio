import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutImage = () => {
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.8 },
      },
   };

   return (
      <motion.div variants={itemVariants} className="relative">
         <div className="relative w-full aspect-square max-w-md mx-auto md:ml-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-[#151515] rounded-2xl overflow-hidden">
               <Image
                  src="/PP.png"
                  alt="Developer Portrait"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#151515] p-4 rounded-xl shadow-lg">
               <div className="text-4xl font-bold text-primary">1+</div>
               <div className="text-sm text-slate-300">Years Experience</div>
            </div>
         </div>
      </motion.div>
   );
};
