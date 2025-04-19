export const SectionHeader = () => {
   const explanation =
      "I've worked with a variety of technologies and frameworks to create robust\n" +
      "and scalable applications. Here are some of the key skills I've developed\n" +
      'over the years.';

   return (
      <div className="text-center mb-16">
         <h2 className="text-3xl font-bold mb-2">My Skills</h2>
         <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
         <p className="text-slate-300 max-w-2xl mx-auto">{explanation}</p>
      </div>
   );
};
