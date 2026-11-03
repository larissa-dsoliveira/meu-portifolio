import React from 'react';
import { listaExperiencias } from '@/dados/experiencias';

export default function SecaoLinhaDoTempo() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-roxoPrincipal/20">
      <div className="space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-roxoDestaque font-mono text-xs tracking-wider uppercase">Seção 02</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-roxoDestaque bg-clip-text text-transparent">
            Linha do Tempo de Experiências
          </h2>
          <p className="text-purple-200/70 text-sm max-w-2xl mx-auto">
            Trajetória em órgãos governamentais, startups de tecnologia e universidade.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-roxoPrincipal/40 space-y-10 max-w-4xl mx-auto">
          {listaExperiencias.map((item, idx) => {
            const cor = item.corDot || '#c084fc';
            return (
              <div key={idx} className="relative group">
                {/* Marcador luminoso da linha do tempo */}
                <div
                  style={{ backgroundColor: cor, boxShadow: `0 0 12px ${cor}` }}
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-roxoFundo group-hover:scale-125 transition-transform"
                />
                
                <div className="p-6 bg-roxoCard/90 border border-roxoPrincipal/30 hover:border-roxoDestaque/60 rounded-2xl space-y-3 backdrop-blur-xl transition-all shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-roxoPrincipal/20 pb-2.5">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-roxoDestaque transition-colors">
                        {item.cargo}
                      </h3>
                      <p className="text-xs text-roxoDestaque font-medium">
                        {item.empresa}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-roxoFundo border border-roxoPrincipal/30 text-xs font-mono text-purple-200">
                      {item.periodo}
                    </span>
                  </div>

                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    {item.descricao}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono text-roxoDestaque">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-0.5 rounded bg-roxoFundo border border-roxoPrincipal/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

