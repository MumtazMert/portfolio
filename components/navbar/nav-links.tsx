import Link from 'next/link';
import { NavLink } from './types/types';

export const NavLinks = ({ links }: { links: NavLink[] }) => {
   return (
      <nav className="hidden md:block">
         <ul className="flex space-x-8">
            {links.map((link) => (
               <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-primary transition-colors duration-300">
                     {link.label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};
