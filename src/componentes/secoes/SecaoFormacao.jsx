import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { dadosGraduacao, listaCertificados } from '@/dados/formacao';

export default function SecaoFormacao() {
  return (
    <section id="certificados" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-roxoPrincipal/20">
      <div className="space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-roxoDestaque font-mono text-xs tracking-wider uppercase">Seção 04</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-roxoDestaque bg-clip-text text-transparent">
            Formação Acadêmica & Certificados
          </h2>
          <p className="text-purple-200/70 text-sm max-w-2xl mx-auto">
            Graduação em Bacharelado em Ciência da Computação e capacitações contínuas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card da Graduação UFMT */}
          <div className="p-6 bg-roxoCard/90 border border-roxoPrincipal/40 rounded-2xl space-y-3 backdrop-blur-xl shadow-xl col-span-1 md:col-span-2 lg:col-span-1">
            <div className="p-3 w-fit rounded-xl bg-roxoFundo border border-roxoPrincipal/30 text-roxoDestaque">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {dadosGraduacao.status}
              </span>
              <h3 className="font-bold text-white text-lg mt-2">{dadosGraduacao.titulo}</h3>
              <p className="text-xs text-purple-300/70">{dadosGraduacao.instituicao}</p>
            </div>
            <p className="text-xs text-purple-200/80 leading-relaxed pt-1">
              {dadosGraduacao.descricao}
            </p>
          </div>

          {/* Cards de Certificados */}
          {listaCertificados.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 bg-roxoCard/80 border border-roxoPrincipal/30 hover:border-roxoDestaque/60 rounded-2xl space-y-3 backdrop-blur-xl transition-all shadow-xl"
            >
              <div className="p-3 w-fit rounded-xl bg-roxoFundo border border-roxoPrincipal/30 text-purple-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-roxoPrincipal/20 text-roxoDestaque border border-roxoPrincipal/30">
                  {cert.categoria}
                </span>
                <h3 className="font-bold text-white text-base mt-2">{cert.titulo}</h3>
                <p className="text-xs text-purple-300/70">{cert.subtitulo}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

