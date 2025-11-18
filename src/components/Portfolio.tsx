import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import PortfolioBackground3D from "./PortfolioBackground3D";
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
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="portfolio"
      className="relative py-32 border-b border-primary/10 overflow-hidden"
      ref={ref}
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <PortfolioBackground3D />
        </Canvas>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div
            className={`text-center space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="inline-block px-4 py-1 border border-primary/20 mb-4">
              <span className="text-sm tracking-widest text-muted-foreground">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Projetos <span className="text-gradient">Modernos</span>
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-12 h-[2px] bg-primary" />
              <div className="w-2 h-2 border border-primary rotate-45" />
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interfaces premium que combinam{" "}
              <span className="text-foreground font-semibold">
                design excepcional
              </span>{" "}
              com{" "}
              <span className="text-foreground font-semibold">
                código limpo
              </span>
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                onClick={() => setSelectedProject(project)}
                style={{
                  transitionDelay: isVisible ? `${index * 100 + 300}ms` : "0ms",
                }}
              >
                <div className="relative overflow-hidden border border-primary/20 aspect-[16/9] bg-background hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center gap-4">
                    <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-block px-3 py-1 border border-primary/30 text-xs tracking-wider">
                        {project.category.toUpperCase()}
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="w-12 h-[1px] bg-primary mx-auto" />
                    </div>
                    <Button
                      variant="outline"
                      className="gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Demo
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
          className="fixed inset-0 bg-background/98 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full border border-primary/30 bg-background p-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 border border-primary/20 hover:bg-primary/10 hover:border-primary transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative overflow-hidden border border-primary/20">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full aspect-video object-cover object-center"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>

              <div className="space-y-6 pt-4">
                <div className="space-y-3">
                  <div className="inline-block px-4 py-1 border border-primary/30 text-sm tracking-wider">
                    {selectedProject.category.toUpperCase()}
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-[2px] bg-primary" />
                    <div className="w-2 h-2 border border-primary rotate-45" />
                  </div>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  className="gap-2 group"
                  onClick={() => window.open(selectedProject.demoUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  Visualizar Projeto
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
