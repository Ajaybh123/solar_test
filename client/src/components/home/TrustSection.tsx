import { ShieldCheck, Award, Users, Star } from "lucide-react";

export function TrustSection() {
  const trustItems = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      title: "MNRE Approved Vendor",
      desc: "Certified by Govt. of India"
    },
    {
      icon: <Award className="h-10 w-10 text-secondary" />,
      title: "25 Years Warranty",
      desc: "Guaranteed Performance"
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: "500+ Installations",
      desc: "Happy Customers Across India"
    },
    {
      icon: <Star className="h-10 w-10 text-secondary" />,
      title: "5 Star Rated",
      desc: "Top Quality Service"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mb-4 p-4 rounded-full bg-[#002B5B]/5 group-hover:bg-[#002B5B] transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#002B5B] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}