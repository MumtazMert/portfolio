import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar/navbar';
import { About } from '@/app/pages/about';
import { Projects } from '@/app/pages/projects';
import { Skills } from '@/app/pages/skills';
import { AIProjects } from '@/app/pages/ai-projects';
import { Contact } from '@/app/pages/contact';
import { Footer } from '@/components/footer';

export default function Home() {
   return (
      <main className="min-h-screen">
         <Navbar />
         <Hero />
         <About />
         <Skills />
         <Projects />
         <AIProjects />
         <Contact />
         <Footer />
      </main>
   );
}
