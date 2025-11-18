import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import portfolioDj from "@/assets/portfolio-dj.png";
import portfolioAdvogado from "@/assets/portfolio-advogado.png";
import portfolioPetshop from "@/assets/portfolio-petshop.png";

const projects = [
  {
    id: 1,
    title: "DJ Luna",
    category: "Landing Page",
    image: portfolioDj,
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Dr. Advocacia",
    category: "Website",
    image: portfolioAdvogado,
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Pets",
    category: "Website",
    image: portfolioPetshop,
    demoUrl: "#",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-32 border-b border-primary/10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
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
                className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                onClick={() => setSelectedProject(project)}
                style={{ transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms' }}
              >
                <div className="relative overflow-hidden border border-primary/20 aspect-[16/9] hover:border-primary transition-colors duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">{project.category}</div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
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
              className="w-full aspect-video object-cover mb-6"
            />
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">{selectedProject.category}</div>
                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
              </div>
              <Button 
                variant="default" 
                className="gap-2"
                onClick={() => window.open(selectedProject.demoUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
