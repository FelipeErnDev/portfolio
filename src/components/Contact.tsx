import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, MapPin, Award } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/FelipeErnDev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/felipe-ern/" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "felipeern.dev@gmail.com" },
  { icon: Phone, label: "Telefone", value: "+55 (47) 99246-0619" },
  { icon: MapPin, label: "Localização", value: "Rio do Sul - SC, Brasil" },
];

const certificates = [
  { title: "React", issuer: "Rocketseat", year: "2023" },
  { title: "Redux + Zustand - React", issuer: "Rocketseat", year: "2024" },
  { title: "Next.js App Router e Testes - React", issuer: "Rocketseat", year: "2024" },
  { title: "Full-Stack", issuer: "Rocketseat", year: "2024" },
];

export function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos trabalhar juntos no seu próximo projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Formulário de Contato */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Seu nome"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full gradient-primary text-white">
                <Mail className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Informações</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">Redes Sociais</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Certificados */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-12">Certificados & Cursos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-6 hover-scale">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}