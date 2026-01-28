import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    year: "2025",
    duration: "6 meses - Atualmente",
    title: "Desenvolvedor Full Stack",
    company: "Reconecta - Remoto",
    description: `Atuei no desenvolvimento de soluções internas, automações e sistemas completos, com
foco em eficiência operacional, aumento de conversão e resolução de problemas reais do
negócio, utilizando diferentes stacks e integrações via API.`,
    tags: ["Nest.js", "PostgreSQL", "React.js", "Tailwind CSS", "Next.js", "Git", "Docker", "TypeScript" ],
  },
  {
    year: "2023",
    duration: "2 anos e 8 meses",
    title: "Desenvolvedor Front End",
    company: "Apresenta.me - Híbrido",
    description: "Responsável pelo desenvolvimento e manutenção de sites personalizados para imobiliárias, garantindo performance, escalabilidade e usabilidade.",
    tags: ["JavaScript", "PostgreSQL", "Vue.js", "Tailwind CSS", "Node.js", "Git"],
  },
  {
    year: "2023",
    duration: "3 anos e 1 mes - Atualmente",
    title: "Desenvolvedor Full Stack",
    company: "NovaPixel Sistemas - Remoto",
    description: "Desenvolvimento de aplicações web complexas, integração de APIs e otimização de performance.",
    tags: ["TypeScript", "PostgreSQL", "Docker", "React", "Tailwind CSS", "Node.js", "Express", 'Git'],
  },
  {
    year: "2022",
    duration: "7 meses",
    title: "Analista de migração de dados",
    company: "H3ven - Gateway de pagamentos - Remoto",
    description: "Atuando na transição e integração de bancos de dados legados para novas arquiteturas, garantindo integridade, consistência e confiabilidade das informações durante o processo de troca de sistemas.",
    tags: ["MySQL", "Node.js", "JavaScript"],
  },
  {
    year: "2021",
    duration: "1 ano e 7 meses",
    title: "Técnico de suporte em TI",
    company: "Escalasoft - Remoto",
    description: "Início da carreira profissional, Suporte ao cliente para ERP onde tive introdução as APIs REST, Postman e MySQL.",
    tags: ["Atendimento ao cliente", "Postman", "MySQL"],
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">Minha Trajetória</h2>
          <p className="text-xl text-muted-foreground">
            A evolução da minha carreira profissional
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-slide-in-left ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-primary ring-4 ring-background z-10" />

                <Card className="ml-16 md:ml-0 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-4">
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {exp.year}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {exp.duration}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}