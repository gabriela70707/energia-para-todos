import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            Energia Limpa para Todos
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Financie Projetos de
            <span className="block text-accent"> Energia Renovável</span>
          </h1>
          
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Conectamos comunidades que precisam de energia limpa com pessoas e empresas 
            dispostas a transformar o futuro através de projetos sustentáveis.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Explorar Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
              Criar Projeto
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"></div>
    </section>
  );
};
