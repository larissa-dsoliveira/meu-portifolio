import React, { useState } from 'react';
import SecaoHero from '@/componentes/layout/SecaoHero';
import SecaoTecnologias from '@/componentes/secoes/SecaoTecnologias';
import SecaoLinhaDoTempo from '@/componentes/secoes/SecaoLinhaDoTempo';
import SecaoProjetos from '@/componentes/secoes/SecaoProjetos';
import SecaoFormacao from '@/componentes/secoes/SecaoFormacao';
import ModalDetalhesProjeto from '@/componentes/layout/ModalDetalhesProjeto';
import Rodape from '@/componentes/layout/Rodape';

export default function App() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <div className="min-h-screen bg-roxoFundo text-purple-100 font-sans selection:bg-fuchsia-500 selection:text-white relative overflow-x-hidden">

      {/* Luzes de Fundo Estilo Dainai */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-roxoPrincipal/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-[650px] h-[650px] bg-roxoVibrante/12 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 left-10 w-[450px] h-[450px] bg-roxoDestaque/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Estrutura das Seções */}
      <main>
        <SecaoHero />
        <SecaoTecnologias />
        <SecaoLinhaDoTempo />
        <SecaoProjetos aoSelecionarProjeto={setProjetoSelecionado} />
        <SecaoFormacao />
      </main>

      {/* Modal de Detalhes dos Projetos */}
      {projetoSelecionado && (
        <ModalDetalhesProjeto
          projeto={projetoSelecionado}
          aoFechar={() => setProjetoSelecionado(null)}
        />
      )}

      {/* Rodapé do Site */}
      <Rodape />
    </div>
  );
}
