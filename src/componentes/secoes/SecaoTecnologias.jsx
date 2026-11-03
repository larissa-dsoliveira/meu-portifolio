import React, { useState } from 'react';
import { categoriasTecnologias, listaTecnologias } from '@/dados/tecnologias';

export default function SecaoTecnologias() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('all');

  const tecnologiasFiltradas = (categoriaAtiva === 'all' || categoriaAtiva === 'todos')
    ? listaTecnologias
    : listaTecnologias.filter(item => item.categoria === categoriaAtiva || item.cat === categoriaAtiva);

  return (
    <section id="tecnologias" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-roxoPrincipal/20">
      <div className="space-y-10">

        <div className="text-center space-y-3">
          <span className="text-roxoDestaque font-mono text-xs tracking-wider uppercase">Seção 01</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-roxoDestaque bg-clip-text text-transparent">
            Conhecimentos & Tech Stack
          </h2>
          <p className="text-purple-200/70 text-sm max-w-2xl mx-auto">
            Tecnologias e metodologias organizadas por área de domínio e aplicação diária.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categoriasTecnologias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${categoriaAtiva === cat.id
                ? 'bg-gradient-to-r from-roxoPrincipal to-roxoVibrante text-white shadow-lg shadow-roxoPrincipal/30'
                : 'bg-roxoCard text-purple-300 border border-roxoPrincipal/20 hover:border-roxoDestaque/50'
                }`}
            >
              {cat.label || cat.rotulo}
            </button>
          ))}
        </div>

        {/* Grid de Tecnologias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tecnologiasFiltradas.map((tech, idx) => {
            const Icone = tech.icone || tech.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-roxoCard/80 border border-roxoPrincipal/30 hover:border-roxoDestaque/60 rounded-2xl space-y-3 backdrop-blur-xl transition-all hover:scale-[1.02] group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-roxoFundo border border-roxoPrincipal/30 text-roxoDestaque group-hover:scale-110 transition-transform">
                    {Icone && <Icone className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-roxoPrincipal/10 text-roxoDestaque border border-roxoPrincipal/30">
                    {tech.level || tech.nivel}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-roxoDestaque transition-colors">
                    {tech.name || tech.nome}
                  </h3>
                  <p className="text-xs text-purple-300/70 mt-1">{tech.desc || tech.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

