import { ContactInfo } from './types/types';
import { ContactInfoItem } from './contact-info-item';

export const ContactInfoList = ({ items }: { items: ContactInfo[] }) => {
   return (
      <div className="space-y-6">
         {items.map((item, index) => (
            <ContactInfoItem key={index} item={item} />
         ))}
      </div>
   );
};
