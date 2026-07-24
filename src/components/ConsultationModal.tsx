import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Reconstrucción 3D de Yacimientos',
    date: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      service: 'Reconstrucción 3D de Yacimientos',
      date: '',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-xl glass-panel bg-[#121212] rounded-sm border border-[#F7BD48]/40 shadow-2xl p-6 sm:p-8 space-y-6 my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F7BD48]/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#F7BD48]">calendar_month</span>
            <h2 className="font-serif-caslon text-xl font-bold text-[#E4E2E1]">
              Agendar Consultoría con Adrià Buch
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#A8A29E] hover:text-[#E4E2E1]"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F7BD48]/20 text-[#F7BD48] flex items-center justify-center mx-auto border border-[#F7BD48]">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="font-serif-caslon text-2xl font-bold text-[#E4E2E1]">
              Solicitud de Consultoría Registrada
            </h3>
            <p className="text-sm text-[#A8A29E] max-w-md mx-auto">
              Gracias, <strong className="text-[#E4E2E1]">{formData.name}</strong>. Nos pondremos en contacto contigo en breve a través de <strong className="text-[#F7BD48]">{formData.email}</strong> para confirmar los detalles de la sesión.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#F7BD48] text-[#121212] font-mono-code text-xs font-bold uppercase rounded-sm"
            >
              FINALIZAR
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                NOMBRE COMPLETO *
              </label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej. Dra. Elena Martí"
                className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                  CORREO ELECTRÓNICO *
                </label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@museo.org"
                  className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48]"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                  INSTITUCIÓN / EMPRESA
                </label>
                <input 
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Museo Arqueológico"
                  className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                  TIPO DE SERVICIO *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48]"
                >
                  <option value="Reconstrucción 3D de Yacimientos">Reconstrucción 3D de Yacimientos</option>
                  <option value="Consultoría IA en Museos">Consultoría IA en Museos</option>
                  <option value="Restauración de Archivos Históricos">Restauración de Archivos Históricos</option>
                  <option value="AdTech & Campañas Culturales">AdTech & Campañas Culturales</option>
                  <option value="Conferencia / Taller">Conferencia / Taller</option>
                </select>
              </div>

              <div>
                <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                  FECHA TENTATIVA
                </label>
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48]"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono-code text-xs text-[#A8A29E] mb-1">
                DETALLES DEL PROYECTO O CONSULTA
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Breve descripción del yacimiento, piezas a digitalizar o presupuesto estimado."
                className="w-full bg-[#121212] border border-[#F7BD48]/30 rounded-sm px-3 py-2 text-sm text-[#E4E2E1] focus:outline-none focus:border-[#F7BD48] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#F7BD48] hover:bg-[#e0a83b] text-[#121212] font-mono-code text-xs font-bold tracking-widest uppercase rounded-sm shadow-md"
            >
              CONFIRMAR SOLICITUD DE REUNIÓN
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
