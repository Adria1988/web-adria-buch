import React from 'react';
import { Project } from '../types';
import { ComparisonSlider } from './ComparisonSlider';
import { getAssetUrl, handleImageError } from '../utils/assets';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenConsultation }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#121212]/90 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl glass-panel bg-[#121212] rounded-sm border border-[#F7BD48]/30 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header Bar */}
        <div className="p-4 sm:p-6 border-b border-[#F7BD48]/20 flex items-center justify-between bg-[#1B1B1B]/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-sm bg-[#F7BD48]/10 text-[#F7BD48] font-mono-code text-[11px] font-bold tracking-wider uppercase border border-[#F7BD48]/20">
              {project.category}
            </span>
            <span className="font-mono-code text-xs text-[#A8A29E]">
              {project.chronology}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-sm glass-panel hover:bg-[#F7BD48] hover:text-[#121212] text-[#E4E2E1] flex items-center justify-center transition-colors"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Location */}
          <div className="space-y-2">
            <h2 className="font-serif-caslon text-2xl sm:text-4xl font-bold text-[#E4E2E1]">
              {project.title}
            </h2>
            <p className="font-mono-code text-xs text-[#F7BD48] tracking-widest uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>{project.location}</span>
            </p>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code text-[#A8A29E]">
              <span className="flex items-center gap-1 text-[#F7BD48]">
                <span className="material-symbols-outlined text-sm">tune</span>
                Haz Scroll a través de la historia y la Inteligencia Artificial:
              </span>
              <span>HD 3D NEURAL RENDER</span>
            </div>
            <ComparisonSlider 
              imageCurrent={project.imageCurrent}
              imageReconstructed={project.imageReconstructed}
              className="aspect-[4/5] sm:aspect-[800/897] w-full max-h-[600px] mx-auto shadow-2xl"
            />
          </div>

          {/* Project Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.highlights.map((h, i) => (
              <div key={i} className="p-4 glass-panel rounded-sm space-y-1">
                <span className="font-mono-code text-[10px] text-[#A8A29E] tracking-widest uppercase block">
                  {h.label}
                </span>
                <span className="font-mono-code text-base font-bold text-[#F7BD48] block">
                  {h.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description, Story & Full Technical Analysis */}
          <div className="space-y-6 pt-4 border-t border-[#F7BD48]/10">
            {project.story ? (
              <div className="space-y-8">
                {/* Story Main Intro Header */}
                <div className="p-6 rounded-sm bg-gradient-to-r from-[#F7BD48]/10 via-[#1B1B1B] to-[#121212] border border-[#F7BD48]/30 shadow-lg space-y-3">
                  <h3 className="font-serif-caslon text-xl sm:text-2xl font-bold text-[#F7BD48] flex items-center gap-2">
                    {project.story.headline}
                  </h3>
                  {project.story.guideText && (
                    <p className="text-sm text-[#E4E2E1] leading-relaxed font-sans">
                      {project.story.guideText}
                    </p>
                  )}
                  
                  {/* Guide list */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-sans text-xs">
                    <div className="p-3 bg-[#121212]/80 rounded border border-[#F7BD48]/20 flex items-start gap-2 text-[#E4E2E1]">
                      <span className="text-base">1️⃣</span>
                      <div>
                        <strong className="text-[#F7BD48] block">Primera Imagen (Real):</strong>Impresionante hallazgo arqueológico en su estado ruinoso actual.
                      </div>
                    </div>
                    <div className="p-3 bg-[#121212]/80 rounded border border-[#F7BD48]/20 flex items-start gap-2 text-[#E4E2E1]">
                      <span className="text-base">2️⃣</span>
                      <div>
                        <strong className="text-[#F7BD48] block">Segunda Imagen (IA):</strong> Recreación hiperrealista con el color, el vapor y la vida cotidiana en Pompeya.
                      </div>
                    </div>
                    <div className="p-3 bg-[#121212]/80 rounded border border-[#F7BD48]/20 flex items-start gap-2 text-[#E4E2E1]">
                      <span className="text-base">3️⃣</span>
                      <div>
                        <strong className="text-[#F7BD48] block">Vídeo Animado (IA):</strong> Reanimación en movimiento de la escena cobrando vida.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Points Grid */}
                <div className="space-y-4">
                  <h4 className="font-serif-caslon text-lg font-bold text-[#E4E2E1] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#F7BD48]">search</span>
                    Miren el nivel de detalle y la historia que ocultan estas ruinas:
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.story.storyPoints.map((pt, idx) => (
                      <div 
                        key={idx}
                        className="p-4 bg-[#1B1B1B] rounded-sm border border-[#F7BD48]/20 space-y-2 hover:border-[#F7BD48]/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-sm font-bold text-[#F7BD48]">
                          <span className="text-lg">{pt.emoji || "📍"}</span>
                          <span>{pt.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed">
                          {pt.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion & CTA */}
                {project.story.conclusion && (
                  <div className="p-5 rounded-sm bg-[#121212] border-l-4 border-[#F7BD48] space-y-2 shadow-md">
                    <p className="text-sm font-serif-caslon italic text-[#E4E2E1] leading-relaxed">
                      "{project.story.conclusion}"
                    </p>
                    {project.story.callToAction && (
                      <p className="text-xs font-mono-code text-[#F7BD48] pt-2 border-t border-white/5">
                        {project.story.callToAction}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <>
                <div>
                  <h3 className="font-serif-caslon text-lg font-bold text-[#E4E2E1] mb-2">
                    Resumen del Hallazgo
                  </h3>
                  <p className="text-sm text-[#E4E2E1]/90 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {project.structures && (
                  <div className="p-4 rounded-sm bg-white/5 border-l-2 border-[#F7BD48]">
                    <span className="font-mono-code text-xs font-bold text-[#F7BD48] block mb-1">
                      ESTRUCTURAS REGISTRADAS
                    </span>
                    <p className="text-xs text-[#A8A29E]">
                      {project.structures}
                    </p>
                  </div>
                )}

                {project.fullAnalysis && (
                  <div>
                    <h3 className="font-serif-caslon text-lg font-bold text-[#E4E2E1] mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F7BD48] text-base">microscope</span>
                      Análisis Estratigráfico & Reconstrucción IA
                    </h3>
                    <p className="text-sm text-[#A8A29E] leading-relaxed font-sans bg-[#1B1B1B] p-4 rounded-sm border border-white/5">
                      {project.fullAnalysis}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Documentación Visual Completa (Imágenes y Vídeo) */}
            <div className="space-y-6 pt-6 border-t border-[#F7BD48]/20">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-caslon text-xl font-bold text-[#E4E2E1] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#F7BD48]">photo_library</span>
                  Documentación y Registros de Escena Completa
                </h3>
                <span className="font-mono-code text-xs text-[#A8A29E]">Soportes Arqueológicos & IA</span>
              </div>

              <div className="space-y-8">
                {/* 1. Imagen Actual (thermopilum_actual) */}
                {project.imageCurrent && (
                  <div className="space-y-2 bg-[#1B1B1B]/80 p-4 rounded-sm border border-[#F7BD48]/20 shadow-lg">
                    <div className="flex items-center justify-between text-xs font-mono-code text-[#F7BD48]">
                      <span className="font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">history</span>
                        1. ESTADO ACTUAL (RUINAS HALLADAS)
                      </span>
                      <span className="text-[#A8A29E]">FOTO COMPLETA DE REGISTRO</span>
                    </div>
                    <div className="w-full bg-[#121212] rounded-sm overflow-hidden flex items-center justify-center p-2 border border-white/5">
                      <img 
                        src={getAssetUrl(project.imageCurrent)} 
                        alt={`${project.title} - Estado Actual`} 
                        className="w-full h-auto max-h-[750px] object-contain rounded-sm shadow-md"
                        onError={(e) => handleImageError(e)}
                      />
                    </div>
                    <p className="text-xs text-[#A8A29E] font-sans">
                      Captura fotográfica completa sin recorte del estado actual de conservación de la estructura en la Regio V de Pompeya.
                    </p>
                  </div>
                )}

                {/* 2. Imagen Creada (Roman_thermopolium_reconstruction) */}
                {project.imageReconstructed && (
                  <div className="space-y-2 bg-[#1B1B1B]/80 p-4 rounded-sm border border-[#F7BD48]/20 shadow-lg">
                    <div className="flex items-center justify-between text-xs font-mono-code text-[#F7BD48]">
                      <span className="font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                        2. RECONSTRUCCIÓN FOTORREALISTA POR IA
                      </span>
                      <span className="text-[#A8A29E]">VISTA HIPERREALISTA DE ÉPOCA</span>
                    </div>
                    <div className="w-full bg-[#121212] rounded-sm overflow-hidden flex items-center justify-center p-2 border border-white/5">
                      <img 
                        src={getAssetUrl(project.imageReconstructed)} 
                        alt={`${project.title} - Reconstrucción IA`} 
                        className="w-full h-auto max-h-[750px] object-contain rounded-sm shadow-md"
                        onError={(e) => handleImageError(e)}
                      />
                    </div>
                    <p className="text-xs text-[#A8A29E] font-sans">
                      Imagen reconstruida en alta resolución mostrando la estructura completa, la vivacidad de los frescos y la vida cotidiana en el siglo I d.C.
                    </p>
                  </div>
                )}

                {/* 3. Vídeo Reconstrucción */}
                {project.videoUrl && (
                  <div className="space-y-2 bg-[#1B1B1B]/80 p-4 rounded-sm border border-[#F7BD48]/30 shadow-xl">
                    <div className="flex items-center justify-between text-xs font-mono-code text-[#F7BD48]">
                      <span className="font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">videocam</span>
                        3. REANIMACIÓN CINEMATOGRÁFICA EN VÍDEO (IA)
                      </span>
                      <span className="text-[#A8A29E]">REPRESENTACIÓN DINÁMICA DE LA ESCENA</span>
                    </div>
                    <div className="w-full bg-[#121212] rounded-sm overflow-hidden border border-[#F7BD48]/30 flex justify-center p-2">
                      <video 
                        src={getAssetUrl(project.videoUrl)} 
                        controls 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-auto max-h-[750px] object-contain rounded-sm"
                      />
                    </div>
                    <p className="text-xs text-[#A8A29E] font-sans">
                      Reconstrucción en movimiento de la interacción de los ciudadanos en el Thermopolium del Gallo con simulación de vapor y atmósfera romana.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#F7BD48]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono-code text-xs text-[#A8A29E]">
              CRONOGRAMA Y MODELO VALIDADO POR ADRIÀ BUCH
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 glass-panel text-[#E4E2E1] font-mono-code text-xs font-semibold rounded-sm hover:bg-white/10"
              >
                CERRAR
              </button>
              <button
                onClick={() => { onClose(); onOpenConsultation(); }}
                className="w-1/2 sm:w-auto px-6 py-2.5 bg-[#F7BD48] text-[#121212] font-mono-code text-xs font-bold rounded-sm hover:bg-[#e0a83b] transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                <span>AGENDAR PROYECTO SIMILAR</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
