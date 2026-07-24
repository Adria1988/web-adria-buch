import React, { useState } from 'react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Banner Callout matching user's HTML prompt */}
      <div className="relative glass-panel rounded-sm p-8 sm:p-12 border-[#F7BD48]/40 overflow-hidden text-center space-y-6 bg-gradient-to-br from-[#121212] via-[#1B1B1B] to-[#121212]">
        <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none" />
        
        <span className="inline-block px-3 py-1 rounded-sm bg-[#F7BD48]/10 text-[#F7BD48] font-mono-code text-xs tracking-widest uppercase border border-[#F7BD48]/20">
          COLABORACIÓN & PROYECTOS
        </span>

        <h2 className="font-serif-caslon text-3xl sm:text-5xl font-bold text-[#E4E2E1] max-w-3xl mx-auto leading-tight">
          ¿Quieres ver cómo quedaría tu marca o yacimiento?
        </h2>

        <p className="text-sm sm:text-base text-[#A8A29E] max-w-xl mx-auto font-sans leading-relaxed">
          Ya sea para la recreación 3D de un sitio arqueológico o para una campaña publicitaria impulsada por Inteligencia Artificial de la mano de IABrandStudio.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-[#F7BD48] hover:bg-[#e0a83b] text-[#121212] font-mono-code text-xs font-bold tracking-widest uppercase rounded-sm shadow-xl flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span>CONTACTA CONMIGO</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-8 glass-panel p-8 rounded-sm border-[#F7BD48]/20">
          <div>
            <span className="font-mono-code text-xs text-[#F7BD48] tracking-widest uppercase block mb-2">
              // CANALES DIRECTOS
            </span>
            <h3 className="font-serif-caslon text-2xl font-bold text-[#E4E2E1]">
              Adrià Buch
            </h3>
            <p className="font-mono-code text-xs text-[#A8A29E] mt-1">
              AdTech Developer en Grupo Godó • Co-fundador IABrandStudio
            </p>
          </div>

          <div className="space-y-4 font-mono-code text-xs text-[#E4E2E1]/90">
            <div className="flex items-center gap-3 p-3 bg-[#121212] rounded-sm border border-white/5">
              <span className="material-symbols-outlined text-[#F7BD48]">location_on</span>
              <div>
                <span className="text-[#A8A29E] block text-[10px]">UBICACIÓN</span>
                <span>Barcelona, Cataluña (España)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#121212] rounded-sm border border-white/5">
              <span className="material-symbols-outlined text-[#F7BD48]">mail</span>
              <div>
                <span className="text-[#A8A29E] block text-[10px]">EMAIL PROFESIONAL</span>
                <span>adria.buch@chronos-ai.dev</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#121212] rounded-sm border border-white/5">
              <span className="material-symbols-outlined text-[#F7BD48]">school</span>
              <div>
                <span className="text-[#A8A29E] block text-[10px]">FORMACIÓN & AFILIACIÓN</span>
                <span>Universitat de Barcelona (UB) • Grupo Godó</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#F7BD48]/10 space-y-2">
            <span className="font-mono-code text-[11px] text-[#A8A29E] uppercase block">REDES PROFESIONALES</span>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 glass-panel text-xs text-[#F7BD48] hover:bg-[#F7BD48] hover:text-[#121212] font-mono-code rounded-sm transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 glass-panel text-xs text-[#F7BD48] hover:bg-[#F7BD48] hover:text-[#121212] font-mono-code rounded-sm transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-sm border-[#F7BD48]/20">
          <h3 className="font-serif-caslon text-2xl font-bold text-[#E4E2E1] mb-6">
            Enviar Mensaje
          </h3>

          {sent ? (
            <div className="py-12 text-center space-y-3 bg-[#121212] p-6 rounded-sm border border-[#F7BD48]">
              <span className="material-symbols-outlined text-4xl text-[#F7BD48]">mark_email_read</span>
              <h4 className="font-serif-caslon text-xl font-bold text-[#E4E2E1]">Mensaje Enviado</h4>
              <p className="text-xs text-[#A8A29E]">
                Gracias por escribir. Adrià responderá a tu consulta lo antes posible.
              </p>
              <button 
                onClick={() => setSent(false)} 
                className="mt-2 text-xs font-mono-code text-[#F7BD48] underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                  NOMBRE *
                </label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48]"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                  CORREO ELECTRÓNICO *
                </label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu.correo@ejemplo.com"
                  className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48]"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                  MENSAJE *
                </label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe tu consulta sobre proyectos de arqueología, reconstrucción 3D o AdTech..."
                  className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#F7BD48] hover:bg-[#e0a83b] text-[#121212] font-mono-code text-xs font-bold tracking-widest uppercase rounded-sm transition-colors"
              >
                ENVIAR MENSAJE DIRECTO
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
