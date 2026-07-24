import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import { ComparisonSlider } from './ComparisonSlider';
import { getAssetUrl } from '../utils/assets';

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject, onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Reconstrucción 3D', 'Arqueología Urbana', 'Restauración IA', 'Fotogrametría 3D'];

  const filteredProjects = activeFilter === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Title */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-sm bg-[#F7BD48]/10 text-[#F7BD48] font-mono-code text-xs tracking-widest uppercase border border-[#F7BD48]/20">
          ARCHIVO DE PRESERVACIÓN DIGITAL
        </span>
        <h1 className="font-serif-caslon text-3xl sm:text-5xl font-bold text-[#E4E2E1]">
          Proyectos & Yacimientos Reconstruidos
        </h1>
        <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed">
          Explora los trabajos de reconstrucción tridimensional, análisis cromático y restauración de archivos históricos dirigidos por Adrià Buch.
        </p>
      </div>

      {/* Archive Grid Filter Tabs */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-serif-caslon text-2xl font-bold text-[#E4E2E1]">
            Catálogo Completo de Trabajos
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-sm font-mono-code text-xs transition-all ${
                  activeFilter === cat
                    ? 'bg-[#F7BD48] text-[#121212] font-bold shadow-md'
                    : 'glass-panel text-[#A8A29E] hover:text-[#E4E2E1] hover:border-[#F7BD48]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-panel rounded-sm overflow-hidden border-[#F7BD48]/20 glass-panel-hover flex flex-col justify-between group"
            >
              <div className="relative h-72 sm:h-[340px] overflow-hidden bg-[#121212]">
                {project.imageCurrent && project.imageReconstructed ? (
                  <ComparisonSlider 
                    imageCurrent={project.imageCurrent}
                    imageReconstructed={project.imageReconstructed}
                    labelCurrent="ESTADO ACTUAL"
                    labelReconstructed="RECONSTRUCCIÓN IA"
                    className="w-full h-full border-none rounded-none"
                    imageClassName="object-cover object-center"
                  />
                ) : (
                  <img 
                    src={getAssetUrl(project.imageReconstructed || project.imageCurrent)} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.endsWith('.webp')) {
                        target.src = target.src.replace('.webp', '.jpg');
                      }
                    }}
                  />
                )}
                
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-[#121212]/80 backdrop-blur-md text-[#F7BD48] font-mono-code text-[10px] tracking-wider uppercase border border-[#F7BD48]/30 z-10 pointer-events-none">
                  {project.category}
                </span>

                {project.dateReport && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-sm bg-[#F7BD48] text-[#121212] font-mono-code text-[10px] font-bold z-10 pointer-events-none">
                    {project.dateReport}
                  </span>
                )}
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif-caslon text-xl font-bold text-[#E4E2E1] group-hover:text-[#F7BD48] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono-code text-[11px] text-[#A8A29E]">
                    {project.chronology}
                  </p>
                  <p className="text-xs text-[#A8A29E] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 bg-[#121212] hover:bg-[#F7BD48] hover:text-[#121212] text-[#F7BD48] font-mono-code text-xs font-bold tracking-widest uppercase border border-[#F7BD48]/30 rounded-sm transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <span>DETALLES TÉCNICOS</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
