/// <reference types="vite/client" />
import React from 'react';

export const getAssetUrl = (path: string | undefined): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${cleanBase}${cleanPath}`;
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackPath?: string
) => {
  const target = e.currentTarget;
  // Prevent infinite error loops
  const attempt = parseInt(target.dataset.errorAttempt || '0', 10);
  if (attempt >= 2) return;
  target.dataset.errorAttempt = String(attempt + 1);

  if (fallbackPath) {
    target.src = getAssetUrl(fallbackPath);
    return;
  }

  const currentSrc = target.src;
  if (currentSrc.includes('/public/images/')) {
    target.src = currentSrc.replace('/public/images/', '/images/');
    return;
  }

  if (currentSrc.endsWith('.webp')) {
    target.src = currentSrc.replace(/\.webp$/, '.jpg');
  } else if (currentSrc.endsWith('.jpg')) {
    target.src = currentSrc.replace(/\.jpg$/, '.jpeg');
  } else if (currentSrc.endsWith('.jpeg')) {
    target.src = currentSrc.replace(/\.jpeg$/, '.jpg');
  }
};
