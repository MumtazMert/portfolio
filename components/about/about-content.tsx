import { motion } from 'framer-motion';
import { SocialLinks } from './social-links';

export const AboutContent = () => {
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.8 },
      },
   };
   const passionate =
      "I'm a passionate frontend developer with expertise in building modern web\n" +
      '                    applications. With a strong foundation in frontend technologies, I create\n' +
      '                    seamless digital experiences that solve real-world problems.';
   const journey =
      'My journey in software development began over a year ago, and since then,\n' +
      "                    I've worked on a diverse range of projects from e-commerce platforms to\n" +
      '                    data visualization tools.';
   const hobby =
      "When I'm not coding, you can find me exploring new technologies,\n" +
      '                    contributing to open-source projects, or sharing my knowledge through\n' +
      '                    technical writing and mentoring.';

   return (
      <div className="space-y-8">
         <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-slate-300 mb-4">{passionate}</p>
            <p className="text-slate-300 mb-4">{journey}</p>
            <p className="text-slate-300">{hobby}</p>
         </motion.div>
         <motion.div variants={itemVariants}>
            <SocialLinks />
         </motion.div>
      </div>
   );
};
