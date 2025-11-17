# 📖 Documentação - Energia Para Todos

## 🌟 Descrição do Projeto

**Energia Para Todos** é uma plataforma de crowdfunding especializada em projetos de energia renovável, conectando comunidades que precisam de energia limpa com pessoas e empresas dispostas a financiar essas iniciativas.

### Objetivos

- **Democratizar o acesso à energia limpa**: Viabilizar projetos de energia renovável em comunidades carentes através de financiamento coletivo
- **Promover transparência**: Oferecer acompanhamento completo do uso dos recursos arrecadados
- **Engajar a sociedade**: Criar uma comunidade de doadores e investidores sociais comprometidos com sustentabilidade
- **Conectar stakeholders**: Facilitar a parceria entre ONGs, doadores individuais e empresas interessadas em ESG

### Funcionalidades Principais

#### Para ONGs e Comunidades:
- ✅ Cadastro e gerenciamento de projetos de energia renovável
- 📊 Dashboard com progresso de arrecadação em tempo real
- 📝 Upload de relatórios e atualizações para doadores
- 🏆 Sistema de conquistas e selos de reconhecimento

#### Para Doadores:
- 🔍 Exploração de projetos com filtros por região, tipo e status
- 💰 Múltiplas faixas de contribuição com recompensas
- 📈 Acompanhamento do impacto gerado pelas doações
- 🎮 Gamificação com ranking de doadores e selos

#### Para Empresas:
- 🏢 Área corporativa para patrocínio de projetos
- 📊 Métricas de impacto para relatórios ESG
- 🌱 Visibilidade e branding associado a causas sustentáveis
- 📄 Exportação de dados para relatórios de sustentabilidade

## 📊 Elementos Estatísticos Utilizados

A plataforma utiliza diversos elementos estatísticos para visualização de dados e transparência:

### 1. Gráficos Implementados

#### 📈 Gráfico de Linhas (Line Chart)
- **Localização**: Dashboard de Impacto
- **Dados visualizados**: 
  - Crescimento mensal de projetos
  - Evolução da arrecadação (em milhares de R$)
- **Biblioteca**: Recharts
- **Interatividade**: Tooltip com valores detalhados, legenda interativa

```typescript
// Exemplo de dados do gráfico de linhas
const monthlyData = [
  { month: "Jan", projetos: 12, arrecadado: 450 },
  { month: "Fev", projetos: 18, arrecadado: 680 },
  // ... dados mensais
];
```

#### 📊 Gráfico de Barras (Bar Chart)
- **Localização**: Dashboard de Impacto
- **Dados visualizados**: Volume mensal de arrecadação
- **Estilo**: Barras com cantos arredondados
- **Cores**: Utiliza paleta de cores do tema (verde sustentável)

#### 🥧 Gráfico de Pizza (Pie Chart)
- **Localização**: Dashboard de Impacto
- **Dados visualizados**: Distribuição de projetos por categoria
- **Categorias**:
  - Educação (35%)
  - Comunidade (30%)
  - Cooperativas (25%)
  - Outros (10%)
- **Características**: Labels com porcentagens, legenda lateral com cores

### 2. Cards de Estatísticas (KPIs)

Métricas-chave exibidas em cards visuais:

| Métrica | Valor | Descrição | Tendência |
|---------|-------|-----------|-----------|
| ⚡ Energia Gerada | 2.4 MWh | Energia limpa produzida | +23% |
| 👥 Pessoas Impactadas | 15.8k | Beneficiados diretamente | +31% |
| 🌱 CO₂ Evitado | 340 ton | Emissões reduzidas | +18% |
| 📈 Projetos Ativos | 127 | Em execução | +42% |

### 3. Barras de Progresso

- **Localização**: Cards de projetos em destaque
- **Função**: Mostrar percentual de arrecadação em relação à meta
- **Estilo**: Animadas com gradiente de cores

### 4. Medidas Estatísticas Utilizadas

- **Valores Absolutos**: Número de projetos, valor arrecadado, pessoas impactadas
- **Percentuais**: Taxa de crescimento, distribuição por categoria, progresso de metas
- **Séries Temporais**: Evolução mensal de projetos e arrecadação
- **Proporções**: Distribuição de projetos por tipo de iniciativa

### 5. Componentes de Visualização

Todos os gráficos utilizam a biblioteca **Recharts** integrada com o sistema de design:

```typescript
// Exemplo de configuração do tema nos gráficos
<Tooltip 
  contentStyle={{ 
    backgroundColor: "hsl(var(--card))", 
    border: "1px solid hsl(var(--border))",
    borderRadius: "var(--radius)"
  }} 
/>
```

## 🚀 Tutorial para Iniciantes

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Download Node.js](https://nodejs.org/)
- **npm** (geralmente vem com Node.js)
- **Git** - [Download Git](https://git-scm.com/)

Para verificar se estão instalados, execute no terminal:

```bash
node --version
npm --version
git --version
```

### Passo 1: Clonar o Repositório

Abra o terminal e execute:

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre na pasta do projeto
cd energiabem
```

### Passo 2: Instalar Dependências

Instale todas as bibliotecas necessárias:

```bash
npm install
```

⏳ Este processo pode levar alguns minutos.

### Passo 3: Iniciar o Servidor de Desenvolvimento

Execute o comando:

```bash
npm run dev
```

Você verá uma mensagem similar a:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Passo 4: Abrir no Navegador

Abra seu navegador e acesse:

```
http://localhost:5173/
```

🎉 Pronto! A plataforma EnergiaBem está rodando localmente.

### Estrutura de Pastas

```
energiabem/
├── src/
│   ├── components/
│   │   ├── sections/          # Seções da página principal
│   │   │   ├── Hero.tsx       # Seção hero principal
│   │   │   ├── FeaturedProjects.tsx  # Projetos em destaque
│   │   │   ├── ImpactDashboard.tsx   # Dashboard com gráficos
│   │   │   ├── HowItWorks.tsx        # Como funciona
│   │   │   ├── UserTypes.tsx         # Tipos de usuários
│   │   │   └── Footer.tsx            # Rodapé
│   │   └── ui/                # Componentes de UI (shadcn)
│   ├── pages/
│   │   └── Index.tsx          # Página principal
│   ├── index.css              # Estilos globais e design system
│   └── main.tsx               # Ponto de entrada da aplicação
├── public/                     # Arquivos estáticos
├── index.html                  # HTML principal
├── tailwind.config.ts          # Configuração do Tailwind CSS
└── package.json                # Dependências do projeto
```

### Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Recharts** - Biblioteca de gráficos para React
- **Lucide React** - Ícones modernos
- **React Router** - Roteamento de páginas

### Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Visualizar build de produção
npm run preview

# Verificar erros de lint
npm run lint
```

### Próximos Passos

Após rodar o projeto, você pode:

1. **Explorar o código**: Navegue pelos arquivos em `src/components/sections/`
2. **Personalizar o design**: Modifique as cores em `src/index.css`
3. **Adicionar funcionalidades**: Implemente backend com Lovable Cloud
4. **Editar conteúdo**: Altere textos e imagens nos componentes

### Solução de Problemas Comuns

#### Erro: "Port 5173 is already in use"

Outro processo está usando a porta. Você pode:
- Fechar o processo anterior
- Ou usar outra porta: `npm run dev -- --port 3000`

#### Erro na instalação de dependências

```bash
# Limpe o cache do npm e reinstale
rm -rf node_modules package-lock.json
npm install
```

#### Erro de TypeScript

Certifique-se de estar usando Node.js 18+:

```bash
node --version
```

### Suporte e Documentação Adicional

- **Lovable Docs**: [docs.lovable.dev](https://docs.lovable.dev/)
- **React Docs**: [react.dev](https://react.dev/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)
- **Recharts**: [recharts.org](https://recharts.org/)

---

## 📝 Notas Adicionais

### Design System

A plataforma utiliza um design system completo baseado em variáveis CSS:

- **Cores primárias**: Verde sustentável (`--primary`)
- **Cores secundárias**: Azul confiança (`--secondary`)
- **Cores de destaque**: Amarelo energia (`--accent`)
- **Modo escuro**: Suporte completo com variáveis `.dark`

### Acessibilidade

- Componentes semânticos (header, main, section, footer)
- Atributos ARIA onde necessário
- Suporte a navegação por teclado
- Contraste de cores adequado (WCAG AA)

### Performance

- Lazy loading de imagens
- Componentes otimizados
- Build otimizado com Vite
- CSS otimizado com Tailwind

---

**Desenvolvido com ❤️ para um futuro mais sustentável**
