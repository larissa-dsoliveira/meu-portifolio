import React from 'react';
import { X, Cpu, CheckCircle2 } from 'lucide-react';

export default function ModalDetalhesProjeto({ projeto, aoFechar }) {
  if (!projeto) return null;

  const detalhes = projeto.details || projeto.detalhes || {};
  const papel = detalhes.role || detalhes.papelCargo || '';
  const badge = projeto.badge || projeto.distintivo || '';
  const titulo = projeto.title || projeto.titulo || '';
  const arquitetura = detalhes.architecture || detalhes.arquitetura || '';
  const destaques = detalhes.highlights || detalhes.pontosFortes || [];
  const techs = projeto.techs || projeto.tecnologias || [];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={aoFechar}
    >
      <div
        className="bg-roxoCard border border-roxoPrincipal/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar no Canto Superior */}
        <button
          onClick={aoFechar}
          className="absolute top-4 right-4 p-2 text-purple-300 hover:text-white rounded-lg bg-roxoFundo hover:bg-roxoPrincipal/40 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cabeçalho do Projeto */}
        <div className="space-y-2">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-roxoPrincipal/20 text-roxoDestaque border border-roxoPrincipal/40">
            {badge} {papel ? `— ${papel}` : ''}
          </span>
          <h3 className="text-2xl font-bold text-white">{titulo}</h3>
        </div>

        {/* Detalhes de Arquitetura & Engenharia */}
        <div className="space-y-3 border-t border-roxoPrincipal/20 pt-4 text-xs sm:text-sm text-purple-200/90 leading-relaxed">
          <h4 className="font-bold text-roxoDestaque flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Arquitetura & Engenharia do Projeto
          </h4>
          <p>{arquitetura}</p>

          <h4 className="font-bold text-roxoDestaque flex items-center gap-2 pt-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Destaques & Entregas Realizadas
          </h4>
          <ul className="space-y-1.5 list-disc list-inside text-xs text-purple-200/80">
            {destaques.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Tags de Tecnologias */}
        <div className="pt-2 flex flex-wrap gap-2 border-t border-roxoPrincipal/20">
          {techs.map((t, idx) => (
            <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-roxoFundo text-roxoDestaque border border-roxoPrincipal/30">
              {t}
            </span>
          ))}
        </div>

        {/* Botão de Fechar no Rodapé */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={aoFechar}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-roxoPrincipal hover:bg-purple-600 text-white transition-colors"
          >
            Fechar Detalhes
          </button>
        </div>

      </div>
    </div>
  );
}

