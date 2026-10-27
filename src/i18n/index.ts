import en from './en.json';
import vi from './vi.json';

export type SupportedLanguage = 'en' | 'vi';

const translations: Record<SupportedLanguage, any> = {
  en,
  vi,
};

const STORAGE_KEY = 'ai_explorer_lang';

let currentLanguage: SupportedLanguage = (localStorage.getItem(STORAGE_KEY) as SupportedLanguage) || 'en';
const listeners: Array<(lang: SupportedLanguage) => void> = [];

export function getLanguage(): SupportedLanguage {
  return currentLanguage;
}

export function setLanguage(lang: SupportedLanguage): void {
  if (lang !== 'en' && lang !== 'vi') return;
  currentLanguage = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  listeners.forEach((callback) => callback(lang));
}

export function onLanguageChange(callback: (lang: SupportedLanguage) => void): () => void {
  listeners.push(callback);
  return () => {
    const idx = listeners.indexOf(callback);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

export function t(path: string): string {
  const keys = path.split('.');
  let current: any = translations[currentLanguage];

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      // Fallback to English if key missing
      let fallback: any = translations.en;
      for (const fKey of keys) {
        if (fallback && typeof fallback === 'object' && fKey in fallback) {
          fallback = fallback[fKey];
        } else {
          return path;
        }
      }
      return typeof fallback === 'string' ? fallback : path;
    }
  }

  return typeof current === 'string' ? current : path;
}
