import React from 'react';
import { NavigationTab } from '../types';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="border-t border-[#F7BD48]/20 bg-[#121212] py-12 px-4 sm:px-6 lg:px-8 text-[#A8A29E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Brand */}
        <div className="md:col-span-5 space-y-2">
          <span className="font-serif-caslon font-bold text-xl text-[#E4E2E1] tracking-wider block">
            ADRIÀ BUCH
          </span>
          <p className="font-mono-code text-xs text-[#A8A29E] max-w-sm">
            Reconstrucción Arqueológica Digital & Preservación con Inteligencia Artificial.
          </p>
          <span className="font-mono-code text-[11px] text-[#F7BD48] block pt-1">
            Graduado en Historia (UB) & AdTech Developer (Grupo Godó)
          </span>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 flex flex-wrap gap-4 font-mono-code text-xs">
          <button onClick={() => onNavigate('inicio')} className="hover:text-[#F7BD48] transition-colors">
            INICIO
          </button>
          <button onClick={() => onNavigate('proyectos')} className="hover:text-[#F7BD48] transition-colors">
            PROYECTOS
          </button>
          <button onClick={() => onNavigate('sobre-mi')} className="hover:text-[#F7BD48] transition-colors">
            SOBRE MÍ
          </button>
          <button onClick={() => onNavigate('restauracion-ia')} className="hover:text-[#F7BD48] transition-colors">
            LABORATORIO IA
          </button>
          <button onClick={onOpenConsultation} className="text-[#F7BD48] font-bold hover:underline">
            CONSULTORÍA
          </button>
        </div>

        {/* Copyright */}
        <div className="md:col-span-3 text-left md:text-right font-mono-code text-[11px]">
          <p>© {new Date().getFullYear()} Adrià Buch.</p>
          <p className="text-[#F7BD48]/60 mt-1">Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};
