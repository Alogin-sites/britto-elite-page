import { Lightbulb, Code, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Lightbulb,
    title: "Entendimento",
    description: "Analisamos suas necessidades, objetivos e público-alvo para criar a estratégia perfeita.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Construímos seu projeto com tecnologias modernas, design impecável e atenção aos detalhes.",
  },
  {
    icon: Rocket,
    title: "Entrega",
    description: "Seu site vai ao ar otimizado, rápido e pronto para gerar resultados imediatos.",
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 border-b border-primary/10" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Como Trabalho
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e eficiente, do conceito ao lançamento
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className={`hidden md:block absolute top-16 left-0 right-0 h-px bg-primary/20 transition-all duration-1500 origin-left ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                 style={{ transitionDelay: isVisible ? '400ms' : '0ms' }} />

            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`relative text-center space-y-6 hover-lift group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: isVisible ? `${index * 200 + 300}ms` : '0ms' }}
                  >
                    {/* Icon Container */}
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                      <div className="relative w-32 h-32 mx-auto border-2 border-primary bg-background flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                        <Icon 
                          className={`w-12 h-12 group-hover:scale-110 transition-all duration-800 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'}`}
                          style={{ transitionDelay: isVisible ? `${index * 200 + 500}ms` : '0ms' }}
                        />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      0{index + 1}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
