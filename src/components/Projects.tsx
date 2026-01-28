import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Sistema para Garagem de Veículos",
    description: "Estou desenvolvendo um sistema completo para gerenciar uma garagem de veículos, incluindo funcionalidades para cadastro, manutenção e controle de estoque e site personalizado.",
    images: ["/CAPT1.png", "/CAPT2.png", "/CAPT3.png", "/CAPT4.png", "/CAPT5.png", "/CAPT6.png", "/CAPT7.png", "/CAPT8.png", "/CAPT9.png"],
    tags: ["Nest.js", "Next.js", "PostgreSQL", "Tailwind", "Prisma", "TypeScript",],
    github: "",
    demo: "https://car-connect.pablopscheidt.dev/garagem-alto-vale",
  },
  {
    title: "Sistema de ocorrências [Jira/ClickUp]",
    description: `O sistema centralizou demandas
internas, melhorou a organização do time e trouxe maior visibilidade sobre gargalos
operacionais.`,
    images: ["/CAP1.png", "/CAP2.png", "/CAP3.png", "/CAP4.png"],
    tags: ["React", "Tailwind", "Nest.js", "Express", "PostgreSQL", "TypeScript"],
    github: "https://github.com/FelipeErnDev/Sistema-Ocorrencias",
    demo: "",
  },
  {
    title: "GitHub Clone",
    description: "Este projeto permite explorar perfis do GitHub, exibir seus repositórios e favoritos, além de oferecer funcionalidades de busca e exibição de detalhes dos repositórios.",
    image: "/github.png",
    tags: ["React", "Tailwind", "Zustand", "Vite", "GitHub API"],
    github: "https://github.com/FelipeErnDev/GitHub-Clone",
    demo: "https://projeto-git-hub-k6ch.vercel.app/",
  },
  {
    title: "Salão Maria's",
    description: "Um site para um salão de beleza, com agendamento de serviços e gerenciamento de clientes.",
    image: "/salaomarias.png",
    tags: ["React", "Tailwind", "Zustand", "Vite", "Node.js", "Express", "PostgreSQL"],
    github: "",
    demo: "https://salaomarias.net/",
  },
  {
    title: "Sistema de Gestão de Riscos",
    description: "Esta aplicação permite gerenciar áreas de risco, incidentes e alertas de forma eficiente. Abaixo você encontra uma visão geral dos recursos do sistema e como utilizá-los.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["PHP", "Blade", "CSS", "JavaScript"],
    github: "https://github.com/FelipeErnDev/Risk-area-rsl",
    demo: "",
  },
  {
    title: "Painel da Plataforma de Pagamentos",
    description: "Um painel para gerenciamento de uma plataforma de pagamentos, com recursos para administrar usuários, transações e muito mais.",
    image: "/hevenpay.png",
    tags: ["PHP", "Laravel", "MySQL", "Vue.js", "Tailwind", "Vite"],
    github: "",
    demo: "",
  },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 overflow-hidden bg-muted">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Carousel ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">Projetos em Destaque</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const hasGithub = Boolean(project.github?.trim());
            const hasDemo = Boolean(project.demo?.trim());
            const hasImages = "images" in project;
            return (
              <Card
                key={project.title}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {hasImages ? (
                  <ImageCarousel images={project.images} />
                ) : (
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {(hasGithub || hasDemo) && (
                    <div className="flex gap-2 pt-2">
                      {hasGithub && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      )}
                      {hasDemo && (
                        <Button size="sm" className="flex-1 gradient-primary text-white" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
