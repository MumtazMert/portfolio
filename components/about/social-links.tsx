import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText } from 'lucide-react';
import { SocialLink } from './types/types';

export const SocialLinks = () => {
   const socialLinks: SocialLink[] = [
      {
         href: '',
         label: 'Download CV',
         icon: <FileText className="mr-2 h-4 w-4" />,
      },
      {
         href: 'https://github.com/MumtazMert',
         label: 'GitHub',
         icon: <Github className="mr-2 h-4 w-4" />,
      },
      {
         href: 'https://www.linkedin.com/in/mumtazmert/',
         label: 'LinkedIn',
         icon: <Linkedin className="mr-2 h-4 w-4" />,
      },
   ];

   return (
      <div className="flex flex-wrap gap-4">
         {socialLinks.map((link, index) => (
            <a
               key={index}
               href={link.href}
               target={link.href ? '_blank' : undefined}
               rel={link.href ? 'noopener noreferrer' : undefined}
            >
               <Button
                  className={
                     link.label === 'Download CV'
                        ? 'bg-primary hover:bg-primary/80'
                        : 'border-primary text-primary hover:bg-primary/10'
                  }
                  variant={link.label === 'Download CV' ? 'default' : 'outline'}
               >
                  {link.icon}
                  {link.label}
               </Button>
            </a>
         ))}
      </div>
   );
};
