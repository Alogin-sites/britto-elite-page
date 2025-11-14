import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Vamos criar seu site moderno e elegante?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Transforme sua presença digital com um projeto premium que gera resultados
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 text-xl font-bold group border-2 border-primary shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-500"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                Falar no WhatsApp
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-primary/10">
            <div className="space-y-2">
              <div className="text-3xl font-bold">Rápido</div>
              <div className="text-sm text-muted-foreground">Entrega ágil</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">Premium</div>
              <div className="text-sm text-muted-foreground">Design único</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">Suporte</div>
              <div className="text-sm text-muted-foreground">Sempre disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
