import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { listaProjetos } from '@/dados/projetos';

export default function SecaoProjetos({ aoSelecionarProjeto }) {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-roxoPrincipal/20">
      <div className="space-y-12">

        <div className="text-center space-y-3">
          <span className="text-roxoDestaque font-mono text-xs tracking-wider uppercase">Seção 03</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-roxoDestaque bg-clip-text text-transparent">
            Projetos Públicos no GitHub
          </h2>
          <p className="text-purple-200/70 text-sm max-w-2xl mx-auto">
            Repositórios de código aberto e projetos acadêmicos desenvolvidos na UFMT. Clique no card para ver detalhes ou no ícone do GitHub para acessar o código.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listaProjetos.map((proj) => (
            <div
              key={proj.id}
              onClick={() => aoSelecionarProjeto && aoSelecionarProjeto(proj)}
              className="group p-6 bg-roxoCard/80 border border-roxoPrincipal/30 hover:border-roxoDestaque/80 rounded-2xl space-y-4 backdrop-blur-xl transition-all cursor-pointer hover:scale-[1.02] shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-roxoPrincipal/10 text-roxoDestaque border border-roxoPrincipal/30">
                    {proj.distintivo || proj.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    {proj.linkGithub && (
                      <a
                        href={proj.linkGithub}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-roxoFundo/80 hover:bg-roxoPrincipal/40 text-purple-300 hover:text-white transition-colors"
                        title="Ver no GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <ArrowUpRight className="w-5 h-5 text-purple-400 group-hover:text-roxoDestaque group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-roxoDestaque transition-colors font-mono">
                    {proj.titulo || proj.title}
                  </h3>
                  <p className="text-xs text-purple-200/70 mt-2 leading-relaxed">
                    {proj.resumo || proj.summary}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-roxoPrincipal/10">
                {(proj.tecnologias || proj.techs || []).map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-roxoFundo text-purple-300 border border-roxoPrincipal/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}