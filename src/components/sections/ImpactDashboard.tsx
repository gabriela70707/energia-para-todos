import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Leaf, Users, Zap } from "lucide-react";

const monthlyData = [
  { month: "Jan", projetos: 12, arrecadado: 450 },
  { month: "Fev", projetos: 18, arrecadado: 680 },
  { month: "Mar", projetos: 25, arrecadado: 920 },
  { month: "Abr", projetos: 31, arrecadado: 1150 },
  { month: "Mai", projetos: 42, arrecadado: 1580 },
  { month: "Jun", projetos: 55, arrecadado: 2100 },
];

const categoryData = [
  { name: "Educação", value: 35, color: "hsl(158, 64%, 52%)" },
  { name: "Comunidade", value: 30, color: "hsl(217, 91%, 60%)" },
  { name: "Cooperativas", value: 25, color: "hsl(43, 96%, 56%)" },
  { name: "Outros", value: 10, color: "hsl(215, 16%, 47%)" },
];

const impactStats = [
  {
    icon: Zap,
    label: "Energia Gerada",
    value: "2.4 MWh",
    description: "Energia limpa produzida",
    trend: "+23%",
  },
  {
    icon: Users,
    label: "Pessoas Impactadas",
    value: "15.8k",
    description: "Beneficiados diretamente",
    trend: "+31%",
  },
  {
    icon: Leaf,
    label: "CO₂ Evitado",
    value: "340 ton",
    description: "Emissões reduzidas",
    trend: "+18%",
  },
  {
    icon: TrendingUp,
    label: "Projetos Ativos",
    value: "127",
    description: "Em execução",
    trend: "+42%",
  },
];

export const ImpactDashboard = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nosso Impacto em Números
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparência total sobre os resultados alcançados pela plataforma
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary">{stat.trend}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-1 text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Line Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Crescimento de Projetos</CardTitle>
              <CardDescription>Evolução mensal de projetos e arrecadação (em milhares R$)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="projetos" 
                    stroke="hsl(158, 64%, 52%)" 
                    strokeWidth={2}
                    name="Projetos"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="arrecadado" 
                    stroke="hsl(217, 91%, 60%)" 
                    strokeWidth={2}
                    name="Arrecadado (k)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Arrecadação Mensal</CardTitle>
              <CardDescription>Volume arrecadado por mês (em milhares R$)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Bar dataKey="arrecadado" fill="hsl(158, 64%, 52%)" radius={[8, 8, 0, 0]} name="Arrecadado (k)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Distribuição por Categoria</CardTitle>
              <CardDescription>Porcentagem de projetos por tipo de iniciativa</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
                <ResponsiveContainer width="100%" height={300} className="max-w-sm">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="h-4 w-4 rounded-sm" 
                        style={{ backgroundColor: category.color }}
                      />
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-muted-foreground">{category.value}% dos projetos</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
