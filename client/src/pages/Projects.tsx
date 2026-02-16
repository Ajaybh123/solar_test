import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MapPin } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      img: "/images/project-residential.png",
      title: "5kW Residential Villa",
      location: "Surat, Gujarat",
      capacity: "5kW",
      year: "2023",
      category: "residential"
    },
    {
      id: 2,
      img: "/images/project-commercial.png",
      title: "Manufacturing Unit Solar Roof",
      location: "Jaipur, Rajasthan",
      capacity: "20kW",
      year: "2023",
      category: "commercial"
    },
    {
      id: 3,
      img: "/images/project-industrial.png",
      title: "Ground Mounted Solar Farm",
      location: "Ahmedabad, Gujarat",
      capacity: "100kW",
      year: "2022",
      category: "industrial"
    },
    {
      id: 4,
      img: "/images/hero-solar.png",
      title: "Modern Home Installation",
      location: "New Delhi",
      capacity: "8kW",
      year: "2024",
      category: "residential"
    },
    {
      id: 5,
      img: "/images/project-commercial.png",
      title: "Corporate Office Tower",
      location: "Bengaluru, Karnataka",
      capacity: "50kW",
      year: "2023",
      category: "commercial"
    },
    {
      id: 6,
      img: "/images/project-industrial.png",
      title: "Textile Mill Solar Plant",
      location: "Surat, Gujarat",
      capacity: "200kW",
      year: "2022",
      category: "industrial"
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <div className="bg-[#002B5B] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful solar installations across India.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                onClick={() => setFilter("all")}
                variant={filter === "all" ? "default" : "outline"}
                className={filter === "all" ? "bg-[#002B5B] hover:bg-[#002B5B]/90" : ""}
              >
                All Projects
              </Button>
              <Button 
                onClick={() => setFilter("residential")}
                variant={filter === "residential" ? "default" : "outline"}
                className={filter === "residential" ? "bg-[#002B5B] hover:bg-[#002B5B]/90" : ""}
              >
                Residential
              </Button>
              <Button 
                onClick={() => setFilter("commercial")}
                variant={filter === "commercial" ? "default" : "outline"}
                className={filter === "commercial" ? "bg-[#002B5B] hover:bg-[#002B5B]/90" : ""}
              >
                Commercial
              </Button>
              <Button 
                onClick={() => setFilter("industrial")}
                variant={filter === "industrial" ? "default" : "outline"}
                className={filter === "industrial" ? "bg-[#002B5B] hover:bg-[#002B5B]/90" : ""}
              >
                Industrial
              </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-[#002B5B] text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-[#002B5B] mb-2">{project.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-100 pt-3 mt-3">
                        <div>
                          <span className="block text-gray-400 text-xs uppercase">Capacity</span>
                          <span className="font-bold text-[#002B5B]">{project.capacity}</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-gray-400 text-xs uppercase">Year</span>
                          <span className="font-bold text-[#002B5B]">{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}