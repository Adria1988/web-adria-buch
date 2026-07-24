import React from 'react';
import { NavigationTab } from '../types';

interface ArchiveSectionProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const ArchiveSection: React.FC<ArchiveSectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      number: "01",
      tag: "ARQUITECTURA",
      title: "Reconstrucción de Yacimientos",
      description: "Modelado 3D fotorrealista asistido por Inteligencia Artificial basado en datos de prospección estratigráfica y fotogrametría de alta resolución.",
      icon: "account_tree",
      action: "VER PROYECTOS 3D"
    },
    {
      number: "02",
      tag: "DINÁMICA",
      title: "Escenas Históricas en Vídeo",
      description: "Creación de vídeos y secuencias visuales que recrean cómo era la vida en los yacimientos históricos de forma clara, directa y envolvente.",
      icon: "movie",
      action: "EXPLORAR VÍDEOS"
    },
    {
      number: "03",
      tag: "PRESERVACIÓN",
      title: "Restauración de Fotografías",
      description: "Doy vida a fotografías y archivos antiguos aplicando un proceso preciso con Inteligencia Artificial para devolverles toda su nitidez y esplendor.",
      icon: "photo_prints",
      action: "IR AL LABORATORIO"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#F7BD48]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono-code text-xs text-[#F7BD48] tracking-widest uppercase block mb-2">
            // METODOLOGÍA CHRONOS
          </span>
          <h2 className="font-serif-caslon text-3xl sm:text-4xl font-bold text-[#E4E2E1]">
            El Archivo Digital
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#A8A29E] leading-relaxed">
          Preservación inmutable y reconstrucción algorítmica de yacimientos arqueológicos, estructuras ruinosas y patrimonio fotográfico amenazado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div 
            key={pillar.number}
            className="glass-panel p-8 rounded-sm glass-panel-hover flex flex-col justify-between relative group overflow-hidden"
          >
            {/* Top Bar Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F7BD48]/40 to-transparent group-hover:via-[#F7BD48] transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-code text-2xl font-bold text-[#F7BD48]/50 group-hover:text-[#F7BD48] transition-colors">
                  {pillar.number}
                </span>
                <span className="px-2.5 py-1 rounded-sm bg-[#F7BD48]/10 text-[#F7BD48] font-mono-code text-[10px] tracking-wider uppercase">
                  {pillar.tag}
                </span>
              </div>

              <div className="w-12 h-12 rounded-sm bg-[#121212] border border-[#F7BD48]/30 flex items-center justify-center text-[#F7BD48] mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
              </div>

              <h3 className="font-serif-caslon text-xl font-bold text-[#E4E2E1] mb-3 group-hover:text-[#F7BD48] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#A8A29E] leading-relaxed mb-8">
                {pillar.description}
              </p>
            </div>

            <button
              onClick={() => onNavigate(pillar.number === '03' ? 'restauracion-ia' : 'proyectos')}
              className="w-full py-3 bg-[#121212] hover:bg-[#F7BD48] hover:text-[#121212] text-[#F7BD48] font-mono-code text-xs font-bold tracking-widest uppercase border border-[#F7BD48]/30 rounded-sm transition-all flex items-center justify-center gap-2"
            >
              <span>{pillar.action}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
