import { Code2, Sparkles, ShoppingCart, Building2, Palette, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Code2,
    title: "Sites Profissionais",
    description: "Sites corporativos completos com design moderno e funcionalidade impecável.",
  },
  {
    icon: Sparkles,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em resultados e experiência premium.",
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Presença digital profissional para empresas e organizações.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas online modernas, rápidas e otimizadas para vendas.",
  },
  {
    icon: Palette,
    title: "UI Minimalista",
    description: "Design clean e elegante que valoriza sua marca.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Sites ultra-rápidos com tecnologias de ponta.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-32 border-b border-primary/10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Serviços
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções digitais premium para cada necessidade
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group border border-primary/20 p-8 hover-invert cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms' }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-primary/20 group-hover:border-background transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground group-hover:text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
