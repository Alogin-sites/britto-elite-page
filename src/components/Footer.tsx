import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Alex Britto</h3>
              <p className="text-muted-foreground">
                Desenvolvedor Web especializado em sites e landing pages premium.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </a>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </a>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfólio
                </a>
              </nav>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary/20 flex items-center justify-center hover-invert transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary/20 flex items-center justify-center hover-invert transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary/20 flex items-center justify-center hover-invert transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground">
            <p>© {currentYear} Alex Britto. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
