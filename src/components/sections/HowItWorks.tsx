import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Cadastre seu Projeto",
    description: "ONGs e comunidades descrevem projetos de energia limpa com metas, cronograma e impacto esperado.",
  },
  {
    icon: Users,
    title: "Receba Contribuições",
    description: "Pessoas e empresas podem doar ou investir em diferentes faixas de contribuição.",
  },
  {
    icon: Rocket,
    title: "Execute o Projeto",
    description: "Com a meta atingida, implemente o projeto e mantenha a comunidade atualizada.",
  },
  {
    icon: BarChart,
    title: "Compartilhe Resultados",
    description: "Publique relatórios de impacto, fotos e dados para mostrar a transformação realizada.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo simples e transparente do início ao fim
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative border-2 transition-all hover:border-primary hover:shadow-card">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
