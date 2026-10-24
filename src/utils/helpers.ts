import type { CollectionEntry } from 'astro:content';
import { clsx } from 'clsx';

export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]) {
  return clsx(inputs);
}

export function formatDate(date: Date | string, options: Intl.DateTimeFormatOptions = {}) {
  const d = new Date(date);
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }).format(d);
}

export function formatDateShort(date: Date | string) {
  const d = new Date(date);
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'short'
  }).format(d);
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '…';
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

export function generateId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getProjectTypeColor(type: string): string {
  const colors: Record<string, string> = {
    web: 'badge-primary',
    mobile: 'badge-accent',
    cloud: 'badge-success',
    architecture: 'badge-warning',
    consulting: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    ai: 'bg-pink-500/10 border-pink-500/30 text-pink-400'
  };
  return colors[type] || 'badge';
}

export function getRoleColor(role: string): string {
  const colors: Record<string, string> = {
    lead: 'badge-accent',
    senior: 'badge-primary',
    founder: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    consultant: 'badge-success',
    cto: 'bg-orange-500/10 border-orange-500/30 text-orange-400'
  };
  return colors[role] || 'badge';
}