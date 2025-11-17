import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Users, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Painéis Solares para Escola Rural",
    location: "Interior de Minas Gerais",
    description: "Instalação de sistema fotovoltaico para fornecer energia limpa a 300 alunos.",
    raised: 45000,
    goal: 80000,
    backers: 124,
    category: "Educação",
    image: "🌞",
  },
  {
    id: 2,
    title: "Biodigestor Comunitário",
    location: "Zona Rural do Paraná",
    description: "Projeto de biodigestor para gerar energia a partir de resíduos orgânicos.",
    raised: 28000,
    goal: 50000,
    backers: 89,
    category: "Comunidade",
    image: "♻️",
  },
  {
    id: 3,
    title: "Turbinas Eólicas em Cooperativa",
    location: "Litoral de Santa Catarina",
    description: "Implementação de mini turbinas eólicas para comunidade pesqueira.",
    raised: 62000,
    goal: 100000,
    backers: 203,
    category: "Cooperativa",
    image: "💨",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça iniciativas que estão transformando comunidades através da energia limpa
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const progress = (project.raised / project.goal) * 100;
            
            return (
              <Card key={project.id} className="group overflow-hidden shadow-card transition-all hover:shadow-card-hover">
                <div className="flex h-48 items-center justify-center bg-gradient-card text-8xl">
                  {project.image}
                </div>
                
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-xs">{project.location}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-semibold text-primary">
                        R$ {project.raised.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-muted-foreground">
                        de R$ {project.goal.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.backers} apoiadores</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-semibold">{Math.round(progress)}%</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full">Ver Projeto</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};
