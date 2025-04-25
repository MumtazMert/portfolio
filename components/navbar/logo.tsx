import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
   return (
      <Link href="/" className="text-2xl font-bold text-primary text-glow">
         <Image src="/logo.svg" alt="Portfolio Logo" width={100} height={100} />
      </Link>
   );
};
