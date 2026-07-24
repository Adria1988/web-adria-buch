import React, { useState, useRef, useCallback } from 'react';
import { getAssetUrl } from '../utils/assets';

interface ComparisonSliderProps {
  imageCurrent: string;
  imageReconstructed: string;
  labelCurrent?: string;
  labelReconstructed?: string;
  className?: string;
  imageClassName?: string;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  imageCurrent,
  imageReconstructed,
  labelCurrent = "ESTADO ACTUAL (RUINAS)",
  labelReconstructed = "RECONSTRUCCIÓN IA",
  className = "",
  imageClassName = "object-cover object-center"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden select-none rounded-md border border-[#F7BD48]/30 group cursor-ew-resize bg-[#121212] ${className}`}
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* Background Image: Reconstructed (Right side) */}
      <img 
        src={getAssetUrl(imageReconstructed)} 
        alt={labelReconstructed}
        className={`w-full h-full block pointer-events-none ${imageClassName}`}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src.endsWith('.webp')) {
            target.src = target.src.replace('.webp', '.jpg');
          } else if (target.src.endsWith('.jpg')) {
            target.src = target.src.replace('.jpg', '.jpeg');
          }
        }}
      />

      {/* Foreground Image Clipped: Current / Ruins (Left side) */}
      <img 
        src={getAssetUrl(imageCurrent)} 
        alt={labelCurrent}
        className={`absolute inset-0 w-full h-full pointer-events-none ${imageClassName}`}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src.endsWith('.webp')) {
            target.src = target.src.replace('.webp', '.jpg');
          } else if (target.src.endsWith('.jpg')) {
            target.src = target.src.replace('.jpg', '.jpeg');
          }
        }}
        style={{ 
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      />

      {/* Laser Scanline Effect */}
      <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none" />

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-[#121212]/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-[#F7BD48]/30 font-mono-code text-[10px] text-[#F7BD48] tracking-widest z-10 pointer-events-none">
        {labelCurrent}
      </div>
      <div className="absolute top-3 right-3 bg-[#121212]/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-[#F7BD48]/30 font-mono-code text-[10px] text-[#E4E2E1] tracking-widest z-10 pointer-events-none">
        {labelReconstructed}
      </div>

      {/* Divider Bar & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-[#F7BD48] shadow-[0_0_12px_#F7BD48] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#121212] border-2 border-[#F7BD48] flex items-center justify-center shadow-2xl text-[#F7BD48]">
          <span className="material-symbols-outlined text-sm">unfold_more</span>
        </div>
      </div>
    </div>
  );
};
