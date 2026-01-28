import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  
  const resumeUrl = `${import.meta.env.BASE_URL}CURRICULO-NOVO.pdf`;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold">
          Olá, eu sou{" "}
          <span className="gradient-text">Felipe Ern</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Criando experiências digitais incríveis através de código limpo e design elegante
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="gradient-primary text-white hover:opacity-90 transition-opacity"
            onClick={() => scrollToSection("projects")}
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("about")}
          >
            Sobre Mim
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              Abrir Currículo
            </a>
          </Button>
        </div>
        
        <div className="pt-12 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}