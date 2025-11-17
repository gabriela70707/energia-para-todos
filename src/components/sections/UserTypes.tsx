import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Heart, Handshake } from "lucide-react";

const userTypes = [
  {
    icon: Heart,
    title: "ONGs e Comunidades",
    description: "Cadastre projetos de energia limpa e receba financiamento para transformar sua comunidade.",
    features: [
      "Crie campanhas de arrecadação",
      "Gerencie projetos e relatórios",
      "Acompanhe o progresso em tempo real",
      "Receba selos e reconhecimento",
    ],
    cta: "Cadastrar Projeto",
    color: "primary",
  },
  {
    icon: Handshake,
    title: "Doadores Individuais",
    description: "Contribua com projetos sustentáveis e acompanhe o impacto positivo de cada real doado.",
    features: [
      "Explore projetos por região",
      "Escolha valores de contribuição",
      "Receba certificados e recompensas",
      "Participe de rankings e desafios",
    ],
    cta: "Começar a Doar",
    color: "secondary",
  },
  {
    icon: Building2,
    title: "Empresas e Investidores",
    description: "Patrocine projetos ESG e integre resultados aos seus relatórios de sustentabilidade.",
    features: [
      "Visibilidade e branding",
      "Métricas de impacto detalhadas",
      "Integração com relatórios ESG",
      "Reconhecimento institucional",
    ],
    cta: "Área Corporativa",
    color: "accent",
  },
];

export const UserTypes = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Para Quem é Esta Plataforma?
          </h2>
          <p className="text-lg text-muted-foreground">
            Junte-se à comunidade de pessoas e organizações comprometidas com energia limpa
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {userTypes.map((type, index) => {
            const Icon = type.icon;
            const colorClass = type.color === "primary" ? "text-primary" : 
                             type.color === "secondary" ? "text-secondary" : 
                             "text-accent";
            
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-${type.color}/10`}>
                    <Icon className={`h-7 w-7 ${colorClass}`} />
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mb-6 space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`mt-0.5 h-1.5 w-1.5 rounded-full bg-${type.color}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={type.color === "primary" ? "default" : "outline"}
                  >
                    {type.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
