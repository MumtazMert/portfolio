import { motion } from 'framer-motion';
import { Skill } from './types/types';

export const SkillCard = ({ skill }: { skill: Skill }) => {
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.6 },
      },
   };

   return (
      <motion.div
         variants={itemVariants}
         className="bg-[#1a1a1a] rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-[#2a2a2a]"
      >
         <div className="flex items-center mb-4">
            <div className="p-2 bg-[#252525] rounded-md mr-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.category}</h3>
         </div>
         <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech, techIndex) => (
               <span key={techIndex} className="px-3 py-1 bg-[#252525] text-sm rounded-full text-slate-300">
                  {tech}
               </span>
            ))}
         </div>
      </motion.div>
   );
};
