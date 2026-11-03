export const listaProjetos = [
  {
    id: 'aspirador-ia-busca-largura',
    titulo: 'AspiradorIABuscaLargura',
    categoria: 'Inteligência Artificial & Algoritmos',
    distintivo: 'Acadêmico / UFMT',
    destaque: true,
    resumo: 'Algoritmo de Busca em Largura (BFS) aplicado ao problema clássico do mundo do aspirador de pó para resolução de estados e navegação autônoma.',
    tecnologias: ['C#', '.NET', 'Inteligência Artificial', 'Busca em Largura (BFS)', 'Algoritmos'],
    linkGithub: 'https://github.com/larissa-dsoliveira/AspiradorIABuscaLargura',
    detalhes: {
      arquitetura: 'Implementação em C# focada em teoria dos grafos e busca em espaço de estados. Aplicação de estrutura de dados em fila (Queue) para exploração sistemática por níveis.',
      pontosFortes: [
        'Projeto desenvolvido para a disciplina de Inteligência Artificial da UFMT.',
        'Mapeamento completo do espaço de estados do ambiente do aspirador.',
        'Garantia de encontrar o caminho mais curto até o estado de limpeza completo.',
        'Código limpo e estruturado em C# com foco em desempenho algorítmico.'
      ],
      papelCargo: 'Desenvolvedora'
    }
  },
  {
    id: 'fastapi-guild-star-wars',
    titulo: 'FastAPI-Guild-Star-Wars',
    categoria: 'Back-End & APIs REST',
    distintivo: 'Tópicos Especiais / UFMT',
    destaque: true,
    resumo: 'Sistema de gerenciamento de contratos de Caçadores de Recompensa construído com FastAPI e arquitetura MVC para a atividade de Tópicos Especiais.',
    tecnologias: ['Python', 'FastAPI', 'Padrão MVC', 'REST API', 'JSON Schema'],
    linkGithub: 'https://github.com/larissa-dsoliveira/FastAPI-Guild-Star-Wars',
    detalhes: {
      arquitetura: 'Arquitetura baseada no padrão MVC (Model-View-Controller) com endpoints assíncronos em FastAPI, validação de dados via Pydantic e documentação automática Swagger/ReDoc.',
      pontosFortes: [
        'Modelagem de contratos, recompensas e alvos temáticos do universo Star Wars.',
        'Separação clara de responsabilidades seguindo o padrão MVC.',
        'Validação rigorosa de esquemas de entrada e saída.',
        'Documentação interativa gerada automaticamente pelo FastAPI.'
      ],
      papelCargo: 'Desenvolvedora Back-End'
    }
  },
  {
    id: 'machine-learning',
    titulo: 'machine-learning',
    categoria: 'Data Science & IA',
    distintivo: 'Repositório Forked',
    destaque: false,
    resumo: 'Estudos, modelos e algoritmos de aprendizado de máquina em Python explorando técnicas de classificação, regressão e análise de dados.',
    tecnologias: ['Python', 'Machine Learning', 'Data Science', 'Scikit-Learn', 'Jupyter'],
    linkGithub: 'https://github.com/larissa-dsoliveira/machine-learning',
    detalhes: {
      arquitetura: 'Repositório de experimentos com modelos de Machine Learning, pré-processamento de datasets e avaliação de métricas de desempenho.',
      pontosFortes: [
        'Modelos supervisionados de inteligência artificial.',
        'Análise e tratamento de dados com bibliotecas ecossistêmicas de Python.',
        'Documentação de scripts e rotinas de treino.'
      ],
      papelCargo: 'Desenvolvedora / Pesquisadora'
    }
  }
];