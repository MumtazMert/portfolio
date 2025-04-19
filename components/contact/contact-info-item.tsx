import { motion } from 'framer-motion';
import { ContactInfo } from './types/types';

export const ContactInfoItem = ({ item }: { item: ContactInfo }) => {
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.6 },
      },
   };

   return (
      <motion.div variants={itemVariants} className="flex items-start">
         <div className="p-3 bg-[#1a1a1a] rounded-md mr-4">{item.icon}</div>
         <div>
            <h4 className="text-lg font-medium">{item.title}</h4>
            <a href={item.link} className="text-slate-300 hover:text-primary transition-colors">
               {item.value}
            </a>
         </div>
      </motion.div>
   );
};
