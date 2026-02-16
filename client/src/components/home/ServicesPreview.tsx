import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Building2, Factory, ArrowRight } from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-[#002B5B]" />,
      title: "Residential Rooftop",
      desc: "Save up to 80% on home electricity bills with 40% subsidy.",
      link: "/services"
    },
    {
      icon: <Building2 className="h-12 w-12 text-[#002B5B]" />,
      title: "Commercial Solar",
      desc: "Reduce overhead costs for offices, schools, and hospitals.",
      link: "/services"
    },
    {
      icon: <Factory className="h-12 w-12 text-[#002B5B]" />,
      title: "Industrial Plants",
      desc: "High-efficiency solar plants for factories and industries.",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#002B5B] mb-4">Our Solar Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide end-to-end solar solutions tailored for homes, businesses, and industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left group">
              <div className="mb-6 p-4 inline-block rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-[#002B5B] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <Link href={service.link}>
                <a className="inline-flex items-center text-[#002B5B] font-bold hover:text-secondary transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-[#002B5B] text-white hover:bg-[#002B5B]/90 px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}