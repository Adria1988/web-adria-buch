import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface NavbarProps {
  currentTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'proyectos', label: 'PROYECTOS' },
    { id: 'sobre-mi', label: 'SOBRE MÍ' },
    { id: 'restauracion-ia', label: 'LABORATORIO IA' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[#F7BD48]/20 bg-[#121212]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => { onNavigate('inicio'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#F7BD48] to-[#B8860B] p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#121212] flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-[#F7BD48] text-xl">history_edu</span>
            </div>
          </div>
          <div>
            <span className="block font-serif-caslon font-bold text-lg text-[#E4E2E1] tracking-wider group-hover:text-[#F7BD48] transition-colors">
              ADRIÀ BUCH
            </span>
            <span className="block font-mono-code text-[10px] text-[#A8A29E] tracking-widest uppercase">
              ARQUEOLOGÍA DIGITAL & AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-sm text-xs font-mono-code tracking-widest transition-all relative ${
                  isActive
                    ? 'text-[#F7BD48] font-semibold bg-[#F7BD48]/10 border-b-2 border-[#F7BD48]'
                    : 'text-[#E4E2E1]/70 hover:text-[#E4E2E1] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 bg-[#F7BD48] hover:bg-[#e0a83b] text-[#121212] font-mono-code text-xs font-bold tracking-wider rounded-sm shadow-md hover:shadow-[#F7BD48]/20 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            CONTACTAR
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E4E2E1] hover:text-[#F7BD48] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#F7BD48]/20 bg-[#121212] px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-sm text-sm font-mono-code tracking-widest flex items-center justify-between ${
                currentTab === item.id
                  ? 'text-[#F7BD48] bg-[#F7BD48]/10 font-bold border-l-2 border-[#F7BD48]'
                  : 'text-[#E4E2E1]/80 hover:bg-white/5'
              }`}
            >
              <span>{item.label}</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </button>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#F7BD48] text-[#121212] font-mono-code text-xs font-bold tracking-widest text-center rounded-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              CONTACTAR
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
