import { Lightbulb, Code, Rocket } from "lucide-react";

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
  return (
    <section className="py-32 border-b border-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
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
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-primary/20" />

            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative text-center space-y-6 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Icon Container */}
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-primary/10 blur-xl" />
                      <div className="relative w-32 h-32 mx-auto border-2 border-primary bg-background flex items-center justify-center">
                        <Icon className="w-12 h-12" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="text-6xl font-bold text-primary/20">
                      0{index + 1}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
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
