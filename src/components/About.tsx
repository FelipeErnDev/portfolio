import { Card } from "@/components/ui/card";
import {
  Code2,
  Palette,
  Zap,
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Criação de aplicações web modernas e responsivas com as melhores tecnologias.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Interfaces intuitivas e visualmente atraentes que encantam os usuários.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Otimização e melhores práticas para aplicações rápidas e eficientes.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar soluções elegantes para problemas
            complexos
          </p>
        </div>

        {/* Card de Perfil */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-card to-muted/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-primary">
              <AvatarImage src="/95653582.jfif" alt="Foto de perfil de Felipe Ern" />
              <AvatarFallback className="text-2xl">FE</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">Felipe Ern</h3>
                <p className="text-xl text-primary font-semibold">
                  Desenvolvedor Full Stack
                </p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experiência</p>
                    <p className="font-semibold">3 anos</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cargo Atual</p>
                    <p className="font-semibold">Full Stack Developer</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Formação</p>
                    <p className="font-semibold">
                      Cursando Sistemas de informação - UNIDAVI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Profile() {
  return (
    <Avatar className="h-24 w-24">
      {/* Se a imagem está em public/, use o caminho absoluto começando com / */}
      <AvatarImage src="/95653582.jfif" alt="Foto de perfil de Felipe Ern" />
      {/* Mostra as iniciais se a imagem não carregar */}
      <AvatarFallback>FE</AvatarFallback>
    </Avatar>
  );
}
