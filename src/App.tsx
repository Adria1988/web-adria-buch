import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationTab, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchiveSection } from './components/ArchiveSection';
import { ProjectGrid } from './components/ProjectGrid';
import { AboutSection } from './components/AboutSection';
import { AiRestorationLab } from './components/AiRestorationLab';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('inicio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleNavigate = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#E4E2E1] selection:bg-[#F7BD48]/30 selection:text-[#F7BD48]">
      
      {/* Navigation Header */}
      <Navbar 
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentTab === 'inicio' && (
            <motion.div
              key="inicio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onNavigate={handleNavigate} />
              <ArchiveSection onNavigate={handleNavigate} />
              
              {/* Featured Showcase on Home */}
              <div className="border-b border-[#F7BD48]/10">
                <ProjectGrid 
                  onSelectProject={setSelectedProject}
                  onOpenConsultation={() => setConsultationOpen(true)}
                />
              </div>

              {/* Preview Bio Callout on Home */}
              <div className="border-b border-[#F7BD48]/10 bg-[#1B1B1B]/40">
                <AboutSection 
                  onNavigate={handleNavigate}
                  onOpenConsultation={() => setConsultationOpen(true)}
                />
              </div>

              <ContactSection onOpenConsultation={() => setConsultationOpen(true)} />
            </motion.div>
          )}

          {currentTab === 'proyectos' && (
            <motion.div
              key="proyectos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20"
            >
              <ProjectGrid 
                onSelectProject={setSelectedProject}
                onOpenConsultation={() => setConsultationOpen(true)}
              />
            </motion.div>
          )}

          {currentTab === 'sobre-mi' && (
            <motion.div
              key="sobre-mi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20"
            >
              <AboutSection 
                onNavigate={handleNavigate}
                onOpenConsultation={() => setConsultationOpen(true)}
              />
            </motion.div>
          )}

          {currentTab === 'restauracion-ia' && (
            <motion.div
              key="restauracion-ia"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20"
            >
              <AiRestorationLab />
            </motion.div>
          )}

          {currentTab === 'contacto' && (
            <motion.div
              key="contacto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20"
            >
              <ContactSection onOpenConsultation={() => setConsultationOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <ConsultationModal 
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

    </div>
  );
}

export default App;
