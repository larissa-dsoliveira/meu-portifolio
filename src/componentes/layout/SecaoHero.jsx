import React from 'react';
import {
  Sparkles,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Download,
  GraduationCap,
  User
} from 'lucide-react';
import { dadosPerfil } from '@/dados/perfil';

export default function SecaoHero() {
  const whatsappUrl = `https://wa.me/${dadosPerfil.links.whatsappNumero}?text=${dadosPerfil.whatsappMensagem}`;

  return (
    <section id="hero" className="pt-12 sm:pt-16 pb-20 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      
      {/* Coluna da Esquerda: Textos, Títulos e Ações */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-roxoCard border border-roxoPrincipal/40 text-roxoDestaque text-xs font-semibold shadow-inner shadow-roxoPrincipal/20">
          <Sparkles className="w-4 h-4 text-roxoDestaque animate-pulse" />
          <span>{dadosPerfil.cargo}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          {dadosPerfil.nome} <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-purple-200 to-roxoDestaque bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]">
            {dadosPerfil.sobrenome}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
          {dadosPerfil.subtitulo}
        </p>

        {/* Botões de Contato & Ações */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
          
          <a
            href={dadosPerfil.links.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-roxoCard border border-roxoPrincipal/30 hover:border-roxoDestaque text-purple-200 hover:text-white flex items-center gap-2 transition-all hover:scale-105 shadow-md"
          >
            <Github className="w-4 h-4 text-roxoDestaque" />
            <span>GitHub</span>
          </a>

          <a
            href={dadosPerfil.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-roxoCard border border-roxoPrincipal/30 hover:border-roxoDestaque text-purple-200 hover:text-white flex items-center gap-2 transition-all hover:scale-105 shadow-md"
          >
            <Linkedin className="w-4 h-4 text-roxoDestaque" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${dadosPerfil.links.email}`}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-roxoCard border border-roxoPrincipal/30 hover:border-roxoDestaque text-purple-200 hover:text-white flex items-center gap-2 transition-all hover:scale-105 shadow-md"
          >
            <Mail className="w-4 h-4 text-roxoDestaque" />
            <span>E-mail</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 flex items-center gap-2 transition-all hover:scale-105 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href="#"
            download={dadosPerfil.links.curriculoPdf}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-roxoPrincipal to-roxoVibrante hover:from-purple-600 hover:to-fuchsia-600 text-white flex items-center gap-2 transition-all hover:scale-105 shadow-md shadow-roxoPrincipal/30"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Baixar Currículo</span>
          </a>

          <a
            href={dadosPerfil.links.lattes}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-roxoCard border border-fuchsia-500/40 hover:border-fuchsia-400 text-fuchsia-300 flex items-center gap-2 transition-all hover:scale-105 shadow-md"
          >
            <GraduationCap className="w-4 h-4 text-fuchsia-400" />
            <span>Baixar Currículo Lattes</span>
          </a>
        </div>

        {/* Badges Rápidos */}
        <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-purple-300/70 font-mono">
          {dadosPerfil.badgesRapidos.map((badge, idx) => (
            <span key={idx} className="px-3 py-1 rounded-md bg-roxoCard border border-roxoPrincipal/20">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Coluna da Direita: Card Dainai Roxo com Apresentação Profissional Integrada */}
      <div className="w-full lg:w-[480px] flex-shrink-0 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-roxoPrincipal via-roxoVibrante to-roxoDestaque rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
        
        <div className="relative bg-roxoCard/95 border border-roxoPrincipal/40 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-5">
          
          <div className="flex items-center justify-between border-b border-roxoPrincipal/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-roxoPrincipal to-roxoVibrante p-0.5 shadow-md shadow-roxoPrincipal/30">
                <div className="w-full h-full bg-roxoFundo rounded-[10px] flex items-center justify-center font-bold text-roxoDestaque text-lg">
                  {dadosPerfil.iniciais}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{dadosPerfil.nomeCompleto}</h3>
                <p className="text-xs text-roxoDestaque font-mono">{dadosPerfil.cargo}</p>
              </div>
            </div>
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" title="Disponível para Projetos" />
          </div>

          {/* Apresentação Profissional */}
          <div className="space-y-3 bg-roxoFundo/80 border border-roxoPrincipal/30 rounded-xl p-4 text-xs text-purple-200/90 leading-relaxed">
            <h4 className="font-bold text-xs flex items-center gap-1.5 text-roxoDestaque">
              <User className="w-4 h-4 text-roxoDestaque" /> Apresentação Profissional
            </h4>
            {dadosPerfil.apresentacao.map((paragrafo, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 gap-3 text-left">
            {dadosPerfil.estatisticas.map((stat, idx) => (
              <div key={idx} className="bg-roxoFundo/80 border border-roxoPrincipal/20 rounded-xl p-3">
                <div className="text-xl font-black text-roxoDestaque font-mono">{stat.valor}</div>
                <div className="text-[11px] text-purple-200/70">{stat.rotulo}</div>
              </div>
            ))}
          </div>

          {/* Snippet C# */}
          <div className="bg-[#0b0616] border border-roxoPrincipal/30 rounded-xl p-3 font-mono text-[11px] space-y-1 text-purple-200/90 shadow-inner">
            <div className="text-roxoDestaque font-bold">// Perfil C# / .NET</div>
            <div><span className="text-fuchsia-400">public class</span> <span className="text-purple-300">LarissaOliveira</span> &#123;</div>
            <div className="pl-4"><span className="text-fuchsia-400">public string</span> Role =&gt; <span className="text-emerald-300">"Back-End & Full-Stack"</span>;</div>
            <div className="pl-4"><span className="text-fuchsia-400">public string</span> Ecosystem =&gt; <span className="text-emerald-300">".NET 10 / React / DDD"</span>;</div>
            <div>&#125;</div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs">
            <span className="text-purple-300/70">Status:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
              {dadosPerfil.status}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

