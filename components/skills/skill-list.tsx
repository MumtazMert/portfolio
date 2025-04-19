import { Code, Database, Globe } from 'lucide-react';
import { SkillCard } from './skill-card';
import { Skill } from './types/types';

export const SkillList = () => {
   const skills: Skill[] = [
      {
         category: 'Frontend',
         icon: <Globe className="h-6 w-6 text-primary" />,
         technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Zustand',
            'React Query',
            'Redux',
         ],
      },
      {
         category: 'Backend',
         icon: <Code className="h-6 w-6 text-primary" />,
         technologies: ['Node.js', 'Express', 'Python', 'Django'],
      },
      {
         category: 'Database',
         icon: <Database className="h-6 w-6 text-primary" />,
         technologies: ['MongoDB', 'PostgreSQL', 'MySQL'],
      },
   ];

   return (
      <>
         {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
         ))}
      </>
   );
};
