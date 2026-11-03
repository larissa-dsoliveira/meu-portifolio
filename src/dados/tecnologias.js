import {
  Server,
  Database,
  Layers,
  Code2,
  Globe,
  Sparkles,
  Laptop,
  LayoutGrid,
  Cpu,
  Zap,
  Terminal,
  Workflow,
  Activity
} from 'lucide-react';

export const categoriasTecnologias = [
  { id: 'all', label: 'Todas as Habilidades', rotulo: 'Todas as Habilidades' },
  { id: 'backend', label: 'Back-End & Arquitetura', rotulo: 'Back-End & Arquitetura' },
  { id: 'frontend', label: 'Front-End & UX', rotulo: 'Front-End & UX' },
  { id: 'devops', label: 'DevOps & Banco de Dados', rotulo: 'DevOps & Banco de Dados' },
  { id: 'cms', label: 'CMS & Pesquisa', rotulo: 'CMS & Pesquisa' }
];

export const listaTecnologias = [
  { name: 'C# / .NET 10', nome: 'C# / .NET 10', cat: 'backend', categoria: 'backend', level: 'Avançado', nivel: 'Avançado', desc: 'APIs RESTful, Microsserviços, Async/Await', descricao: 'APIs RESTful, Microsserviços, Async/Await', icon: Server, icone: Server, color: 'from-purple-500 to-indigo-600' },
  { name: 'Entity Framework Core', nome: 'Entity Framework Core', cat: 'backend', categoria: 'backend', level: 'Avançado', nivel: 'Avançado', desc: 'LINQ, AsNoTracking, Migration, Performance', descricao: 'LINQ, AsNoTracking, Migration, Performance', icon: Database, icone: Database, color: 'from-purple-600 to-fuchsia-600' },
  { name: 'Domain-Driven Design (DDD)', nome: 'Domain-Driven Design (DDD)', cat: 'backend', categoria: 'backend', level: 'Avançado', nivel: 'Avançado', desc: 'Camadas de Domínio, Aplicação e Infraestrutura', descricao: 'Camadas de Domínio, Aplicação e Infraestrutura', icon: Layers, icone: Layers, color: 'from-violet-500 to-purple-700' },
  { name: 'ASP.NET MVC & Clean Architecture', nome: 'ASP.NET MVC & Clean Architecture', cat: 'backend', categoria: 'backend', level: 'Avançado', nivel: 'Avançado', desc: 'Desacoplamento, SOLID e Injeção de Dependência', descricao: 'Desacoplamento, SOLID e Injeção de Dependência', icon: Code2, icone: Code2, color: 'from-purple-600 to-pink-600' },

  { name: 'React.js', nome: 'React.js', cat: 'frontend', categoria: 'frontend', level: 'Avançado', nivel: 'Avançado', desc: 'Single Page Applications, State, Custom Hooks', descricao: 'Single Page Applications, State, Custom Hooks', icon: Globe, icone: Globe, color: 'from-purple-400 to-fuchsia-500' },
  { name: 'Tailwind CSS', nome: 'Tailwind CSS', cat: 'frontend', categoria: 'frontend', level: 'Avançado', nivel: 'Avançado', desc: 'Layouts Responsivos, UI Modernas & Design Systems', descricao: 'Layouts Responsivos, UI Modernas & Design Systems', icon: Sparkles, icone: Sparkles, color: 'from-fuchsia-400 to-pink-500' },
  { name: 'JavaScript (ES6+) & HTML5/CSS3', nome: 'JavaScript (ES6+) & HTML5/CSS3', cat: 'frontend', categoria: 'frontend', level: 'Avançado', nivel: 'Avançado', desc: 'Manipulação de DOM, Fetch, Flexbox & Grid', descricao: 'Manipulação de DOM, Fetch, Flexbox & Grid', icon: Laptop, icone: Laptop, color: 'from-violet-400 to-purple-600' },
  { name: 'UX/UI & Figma', nome: 'UX/UI & Figma', cat: 'frontend', categoria: 'frontend', level: 'Intermediário', nivel: 'Intermediário', desc: 'Prototipagem de Interfaces e Jornadas de Usuário', descricao: 'Prototipagem de Interfaces e Jornadas de Usuário', icon: LayoutGrid, icone: LayoutGrid, color: 'from-fuchsia-500 to-indigo-600' },

  { name: 'Docker & Containers', nome: 'Docker & Containers', cat: 'devops', categoria: 'devops', level: 'Intermediário', nivel: 'Intermediário', desc: 'Isolamento de Ambientes e Imagens', descricao: 'Isolamento de Ambientes e Imagens', icon: Cpu, icone: Cpu, color: 'from-purple-500 to-indigo-700' },
  { name: 'Azure DevOps & CI/CD', nome: 'Azure DevOps & CI/CD', cat: 'devops', categoria: 'devops', level: 'Intermediário', nivel: 'Intermediário', desc: 'Pipelines Automatizadas de Deploy e Boards', descricao: 'Pipelines Automatizadas de Deploy e Boards', icon: Zap, icone: Zap, color: 'from-fuchsia-600 to-pink-600' },
  { name: 'SQL Server, PostgreSQL & MySQL', nome: 'SQL Server, PostgreSQL & MySQL', cat: 'devops', categoria: 'devops', level: 'Avançado', nivel: 'Avançado', desc: 'Modelagem Relacional, Queries & Triggers', descricao: 'Modelagem Relacional, Queries & Triggers', icon: Database, icone: Database, color: 'from-purple-600 to-indigo-600' },
  { name: 'Git & GitHub (Code Review)', nome: 'Git & GitHub (Code Review)', cat: 'devops', categoria: 'devops', level: 'Avançado', nivel: 'Avançado', desc: 'Fluxos de Branching, Pull Requests & PR Reviews', descricao: 'Fluxos de Branching, Pull Requests & PR Reviews', icon: Terminal, icone: Terminal, color: 'from-pink-500 to-purple-600' },

  { name: 'WordPress Customizado', nome: 'WordPress Customizado', cat: 'cms', categoria: 'cms', level: 'Avançado', nivel: 'Avançado', desc: 'CPTs, Advanced Custom Fields (ACF) & PHP', descricao: 'CPTs, Advanced Custom Fields (ACF) & PHP', icon: Workflow, icone: Workflow, color: 'from-purple-500 to-fuchsia-600' },
  { name: 'Sistemas EduHealth & EdTech', nome: 'Sistemas EduHealth & EdTech', cat: 'cms', categoria: 'cms', level: 'Avançado', nivel: 'Avançado', desc: 'Simulações Virtuais e Plataformas de Ensino', descricao: 'Simulações Virtuais e Plataformas de Ensino', icon: Activity, icone: Activity, color: 'from-violet-500 to-purple-700' }
];
