import React from 'react';
import { ARCHITECT_BIO } from '../data/projects';
import { NavigationTab } from '../types';
import { getAssetUrl } from '../utils/assets';

interface AboutSectionProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header Badge */}
      <div className="text-center space-y-4">
        <span className="inline-block px-3 py-1 rounded-sm bg-[#F7BD48]/10 text-[#F7BD48] font-mono-code text-xs tracking-widest uppercase border border-[#F7BD48]/20">
          PERFIL PROFESIONAL
        </span>
        <h1 className="font-serif-caslon text-3xl sm:text-5xl font-bold text-[#E4E2E1]">
          Conviviendo entre dos Mundos
        </h1>
        <p className="max-w-2xl mx-auto text-base text-[#A8A29E] font-sans leading-relaxed">
          {ARCHITECT_BIO.bioSummary}
        </p>
      </div>

      {/* Main Grid: Portrait & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Architect Image / Hologram */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-[#F7BD48] to-[#B8860B] opacity-30 blur group-hover:opacity-60 transition-opacity" />
          <div className="relative rounded-sm overflow-hidden border border-[#F7BD48]/40 bg-[#121212]">
            <img 
              src={getAssetUrl('/images/adria_buch_retrato.jpeg')} 
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.includes('adria_buch_retrato.jpeg')) {
                  target.src = getAssetUrl('/images/adria_buch.webp');
                }
              }}
              alt="Adrià Buch - Programador & Arqueólogo"
              className="w-full h-[500px] object-cover object-top filter contrast-105 hover:contrast-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-sm border-[#F7BD48]/30">
              <span className="font-serif-caslon text-lg font-bold text-[#E4E2E1] block">
                {ARCHITECT_BIO.name}
              </span>
              <span className="font-mono-code text-xs text-[#F7BD48] block mt-0.5">
                {ARCHITECT_BIO.role}
              </span>
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-[#A8A29E]">
                <span>{ARCHITECT_BIO.company}</span>
                <span className="text-[#F7BD48] font-bold">AdTech & UB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Content & Dual Core */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-4 rounded-sm bg-[#F7BD48]/5 border-l-2 border-[#F7BD48] font-mono-code text-xs text-[#F7BD48] flex items-center gap-3">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>ESTADO ACTUAL: {ARCHITECT_BIO.currentPosition} en {ARCHITECT_BIO.company}</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#E4E2E1]/90 leading-relaxed font-sans">
            {ARCHITECT_BIO.bioFull.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Dual Profile Core Cards */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 glass-panel rounded-sm border-[#F7BD48]/20">
              <div className="flex items-center gap-2 text-[#F7BD48] font-mono-code text-xs font-bold uppercase mb-2">
                <span className="material-symbols-outlined text-sm">code</span>
                <span>NÚCLEO TÉCNICO</span>
              </div>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                {ARCHITECT_BIO.dualProfileCore.tech}
              </p>
            </div>

            <div className="p-5 glass-panel rounded-sm border-[#F7BD48]/20">
              <div className="flex items-center gap-2 text-[#F7BD48] font-mono-code text-xs font-bold uppercase mb-2">
                <span className="material-symbols-outlined text-sm">campaign</span>
                <span>ESTRATEGIA DE CAMPAÑA</span>
              </div>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                {ARCHITECT_BIO.dualProfileCore.strategy}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('proyectos')}
              className="px-6 py-3 bg-[#F7BD48] text-[#121212] font-mono-code text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-[#e0a83b] transition-colors flex items-center gap-2"
            >
              <span>VER ARCHIVO DE PROYECTOS</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 glass-panel text-[#E4E2E1] hover:text-[#F7BD48] font-mono-code text-xs font-bold tracking-widest uppercase rounded-sm border border-[#F7BD48]/30 transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">event</span>
              <span>AGENDAR CONSULTORÍA</span>
            </button>
          </div>
        </div>
      </div>

      {/* Academic Foundation Section */}
      <div className="pt-12 border-t border-[#F7BD48]/10 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-mono-code text-xs text-[#F7BD48] tracking-widest uppercase">
            // RAÍCES ACADÉMICAS Y ARQUEOLÓGICAS
          </span>
          <h2 className="font-serif-caslon text-2xl sm:text-3xl font-bold text-[#E4E2E1]">
            Cimientos Históricos y Tecnológicos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECT_BIO.academicFoundation.map((item, idx) => (
            <div key={idx} className="p-6 glass-panel rounded-sm space-y-3 relative overflow-hidden group">
              <span className="font-mono-code text-3xl font-bold text-[#F7BD48]/20 group-hover:text-[#F7BD48]/50 transition-colors block">
                0{idx + 1}
              </span>
              <h3 className="font-serif-caslon text-lg font-bold text-[#E4E2E1]">
                {item.title}
              </h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Aerial Image & Quote */}
      <div className="relative rounded-sm overflow-hidden border border-[#F7BD48]/30 my-12">
        <img 
          src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=2000" 
          alt="Excavación arqueológica"
          className="w-full h-[320px] object-cover filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent flex items-center p-8 sm:p-12">
          <div className="max-w-2xl space-y-4">
            <span className="material-symbols-outlined text-4xl text-[#F7BD48]">format_quote</span>
            <blockquote className="font-serif-caslon text-xl sm:text-2xl font-bold text-[#E4E2E1] leading-snug">
              "La Inteligencia Artificial no es un reemplazo de la historia; es la lente definitiva a través de la cual preservamos y experimentamos nuestra herencia."
            </blockquote>
            <cite className="block font-mono-code text-xs text-[#F7BD48] not-italic tracking-widest uppercase">
              — ADRIÀ BUCH
            </cite>
          </div>
        </div>
      </div>

    </div>
  );
};
