import { ProjectCard } from './project-card';
import { Project } from './types/types';

export const ProjectList = () => {
   const projects: Project[] = [
      {
         title: 'Word Game',
         description: 'An online word game with sequential play, using Supabase as the database.',
         image: '/oynama-ulen.png',
         tags: ['React', 'TypeScript', 'Vite', 'Supabase'],
         liveUrl: 'https://oynama-ulen2.vercel.app/',
         githubUrl: 'https://github.com/MumtazMert/OynamaUlen2',
      },
      {
         title: 'example',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         image: '/placeholder.svg?height=400&width=600',
         tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
         liveUrl: 'exapmle',
         githubUrl: 'example',
      },
      {
         title: 'example',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         image: '/placeholder.svg?height=400&width=600',
         tags: ['D3.js', 'React', 'Express', 'Redis'],
         liveUrl: 'example',
         githubUrl: 'example',
      },
   ];

   return (
      <>
         {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
         ))}
      </>
   );
};
