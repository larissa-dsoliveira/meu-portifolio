import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { dadosPerfil } from '@/dados/perfil';

export default function Rodape() {
  const whatsappUrl = `https://wa.me/${dadosPerfil.links.whatsappNumero}?text=${dadosPerfil.whatsappMensagem}`;

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-roxoPrincipal/20 text-center text-xs text-purple-300/60 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-left space-y-1">
          <p className="text-white font-bold text-sm">{dadosPerfil.nomeCompleto}</p>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans">
          <a
            href={`mailto:${dadosPerfil.links.email}`}
            className="text-purple-200 hover:text-roxoDestaque transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-roxoDestaque" />
            {dadosPerfil.links.email}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp
          </a>
        </div>

        <p className="text-[11px] text-roxoDestaque">
          Desenvolvido com C#/.NET, React & Tailwind CSS • Inspiração Dainai
        </p>

      </div>
    </footer>
  );
}

