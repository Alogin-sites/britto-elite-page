import alexPhoto from "@/assets/alex-britto-photo.png";

const About = () => {
  return (
    <section id="about" className="py-32 border-b border-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="relative border border-primary/20 rounded-sm overflow-hidden aspect-square">
              <img
                src={alexPhoto}
                alt="Alex Britto - Desenvolvedor Web"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Desenvolvedor focado em criar <span className="text-foreground font-semibold">sites e landing pages</span> que
                convertem e impressionam.
              </p>
              <p>
                Especialista em <span className="text-foreground font-semibold">interfaces modernas</span>, combinando design
                minimalista com performance excepcional.
              </p>
              <p>
                Transformo ideias em experiências digitais elegantes que geram resultados reais para
                profissionais e empresas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2 border-r border-primary/20">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center space-y-2 border-r border-primary/20">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
