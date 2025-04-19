import { Brain, MessageSquare, Sparkles } from 'lucide-react';
import { AIProjectCard } from './ai-project-card';
import { AIProject } from './types/types';

export const AIProjectList = () => {
   const aiProjects: AIProject[] = [
      {
         title: 'Lorem ipsum',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
         image: '/placeholder.svg?height=400&width=600',
         tags: ['OpenAI', 'React', 'Node.js', 'WebSockets'],
         liveUrl: 'example',
         githubUrl: 'example',
         icon: <MessageSquare className="h-10 w-10 text-primary" />,
      },
      {
         title: 'Lorem ipsum',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
         image: '/placeholder.svg?height=400&width=600',
         tags: ['Stable Diffusion', 'Next.js', 'TypeScript', 'Tailwind CSS'],
         liveUrl: 'example',
         githubUrl: 'example',
         icon: <Sparkles className="h-10 w-10 text-primary" />,
      },
      {
         title: 'Lorem ipsum',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
         image: '/placeholder.svg?height=400&width=600',
         tags: ['Machine Learning', 'Python', 'React', 'D3.js'],
         liveUrl: 'example',
         githubUrl: 'example',
         icon: <Brain className="h-10 w-10 text-primary" />,
      },
   ];

   return (
      <>
         {aiProjects.map((project, index) => (
            <AIProjectCard key={index} project={project} />
         ))}
      </>
   );
};
