import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactInfo } from './types/types';
import { ContactInfoItem } from './contact-info-item';

export const ContactInfoList = () => {
   const contactInfo: ContactInfo[] = [
      {
         icon: <Mail className="h-6 w-6 text-primary" />,
         title: 'Email',
         value: 'mumtazmert@gmail.com',
         link: 'mailto:mumtazmert@gmail.com',
      },
      {
         icon: <Phone className="h-6 w-6 text-primary" />,
         title: 'Phone',
         value: '+90 544 530 36 49',
         link: 'tel:+905445303649',
      },
      {
         icon: <MapPin className="h-6 w-6 text-primary" />,
         title: 'Location',
         value: 'Istanbul / Turkey',
         link: 'https://maps.google.com/?q=Istanbul,Turkey',
      },
   ];

   return (
      <div className="space-y-6">
         {contactInfo.map((item, index) => (
            <ContactInfoItem key={index} item={item} />
         ))}
      </div>
   );
};
