import React from 'react';
import { NavigationTab } from '../types';
import { getAssetUrl, handleImageError } from '../utils/assets';

interface HeroProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[85vh] pt-24 pb-16 flex items-center justify-center overflow-hidden border-b border-[#F7BD48]/20">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getAssetUrl('/images/Roman_thermopolium_reconstruction.webp')} 
          alt="Arqueología digital background"
          className="w-full h-full object-cover opacity-25 filter brightness-75 contrast-125"
          onError={(e) => handleImageError(e, '/images/thermopolium-reconstructed.webp')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-[#121212]/40" />
        <div className="absolute inset-0 scanline-overlay opacity-20" />
      </div>

      {/* Laser Scanning Line Effect */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F7BD48] to-transparent animate-laser z-10 pointer-events-none opacity-60" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Status Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-[#F7BD48]/30 font-mono-code text-[11px] text-[#F7BD48] tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#F7BD48] animate-pulse" />
          <span>ADRIÀ BUCH • REIMAGINANDO EL PASADO</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif-caslon text-4xl sm:text-6xl md:text-7xl font-bold text-[#E4E2E1] tracking-tight leading-[1.1]">
          Donde la Historia se encuentra con la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7BD48] via-[#e2a832] to-[#B8860B]">Inteligencia Artificial</span>.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E4E2E1]/80 font-sans leading-relaxed">
          Uniendo la investigación arqueológica tradicional con Inteligencia Artificial para devolver la vida al patrimonio histórico.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('proyectos')}
            className="w-full sm:w-auto px-8 py-4 bg-[#F7BD48] hover:bg-[#e0a83b] text-[#121212] font-mono-code font-bold text-xs tracking-widest uppercase rounded-sm shadow-xl hover:shadow-[#F7BD48]/25 transition-all flex items-center justify-center gap-3 group"
          >
            <span>EXPLORAR ARCHIVO</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>

          <button
            onClick={() => onNavigate('restauracion-ia')}
            className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/10 text-[#E4E2E1] font-mono-code text-xs font-semibold tracking-widest uppercase rounded-sm border border-[#F7BD48]/40 hover:border-[#F7BD48] transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm text-[#F7BD48]">auto_awesome</span>
            <span>LABORATORIO DE RESTAURACIÓN</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-4 glass-panel rounded-sm text-left">
            <span className="block font-mono-code text-2xl font-bold text-[#F7BD48]">100%</span>
            <span className="block font-mono-code text-[10px] text-[#A8A29E] tracking-widest mt-1">PRECISIÓN ESTRATIGRÁFICA</span>
          </div>
          <div className="p-4 glass-panel rounded-sm text-left">
            <span className="block font-mono-code text-2xl font-bold text-[#E4E2E1]">4K</span>
            <span className="block font-mono-code text-[10px] text-[#A8A29E] tracking-widest mt-1">RESOLUCIÓN NATIVA 3D</span>
          </div>
          <div className="p-4 glass-panel rounded-sm text-left">
            <span className="block font-mono-code text-2xl font-bold text-[#F7BD48]">Historia & Tecnología</span>
            <span className="block font-mono-code text-[10px] text-[#A8A29E] tracking-widest mt-1">METODOLOGÍA DUAL</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex flex-col items-center gap-2 text-[#A8A29E] animate-bounce">
          <span className="font-mono-code text-[10px] tracking-widest uppercase">DESCUBRIR</span>
          <span className="material-symbols-outlined text-sm text-[#F7BD48]">keyboard_arrow_down</span>
        </div>

      </div>
    </section>
  );
};
