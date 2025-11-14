import { useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Site Corporativo Premium",
    category: "Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Landing Page Conversion",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "E-commerce Minimalista",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Portfolio Designer",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Site Institucional",
    category: "Website",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Landing Page SaaS",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-32 border-b border-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Portfólio
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Projetos selecionados que demonstram excelência em design e código
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden border border-primary/20 aspect-[4/3] hover:border-primary transition-colors duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full border border-primary/20 bg-background p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-primary/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full aspect-video object-cover grayscale mb-6"
            />
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">{selectedProject.category}</div>
              <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
