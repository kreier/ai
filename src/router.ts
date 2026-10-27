import { renderHomePage } from './modules/home';
import { renderFoundationsPage } from './modules/foundations';
import { renderTrainingPage } from './modules/training';
import { renderTransformerPage } from './modules/transformer';
import { renderFrontierPage } from './modules/frontier';
import { renderHardwarePage } from './modules/hardware';
import { renderLabPage } from './modules/lab';

export type RoutePath = '/' | '/foundations' | '/training' | '/transformer' | '/frontier' | '/hardware' | '/lab';

const routes: Record<string, () => HTMLElement> = {
  '/': renderHomePage,
  '/foundations': renderFoundationsPage,
  '/training': renderTrainingPage,
  '/transformer': renderTransformerPage,
  '/frontier': renderFrontierPage,
  '/hardware': renderHardwarePage,
  '/lab': renderLabPage,
};

let currentRoute: RoutePath = '/';
const listeners: Array<(route: RoutePath) => void> = [];

export function getRoute(): RoutePath {
  const hash = window.location.hash.slice(1);
  if (hash in routes) {
    return hash as RoutePath;
  }
  return '/';
}

export function navigateTo(path: string): void {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  window.location.hash = `#${cleanPath}`;
}

export function initRouter(onRoute: (pageElement: HTMLElement) => void): void {
  function handleHashChange() {
    currentRoute = getRoute();
    const renderFn = routes[currentRoute] || routes['/'];
    onRoute(renderFn());
    window.scrollTo({ top: 0, behavior: 'smooth' });
    listeners.forEach(cb => cb(currentRoute));
  }

  window.addEventListener('hashchange', handleHashChange);
  // Initial load
  handleHashChange();
}

export function onRouteChanged(callback: (route: RoutePath) => void): () => void {
  listeners.push(callback);
  return () => {
    const idx = listeners.indexOf(callback);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}
