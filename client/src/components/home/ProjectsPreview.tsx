import { Link } from "wouter";
import { MapPin } from "lucide-react";

export function ProjectsPreview() {
  const projects = [
    {
      img: "/images/project-residential.png",
      title: "5kW Home Installation",
      location: "New Delhi",
      type: "Residential"
    },
    {
      img: "/images/project-commercial.png",
      title: "20kW Factory Setup",
      location: "Jaipur, Rajasthan",
      type: "Commercial"
    },
    {
      img: "/images/project-industrial.png",
      title: "10kW Commercial Building",
      location: "Ahmedabad, Gujarat",
      type: "Commercial"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#002B5B] mt-2">Recent Projects</h2>
          </div>
          <Link href="/projects">
            <a className="text-[#002B5B] font-bold hover:text-secondary transition-colors underline decoration-2 underline-offset-4">
              View All Projects
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-secondary text-[#002B5B] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-1 text-secondary" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}