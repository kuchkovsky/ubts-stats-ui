export const HOME = '/';

export const SIGN_IN = '/signin';

export const STATS = '/plot';

export const UPLOAD_STATS = '/upload';

const routes = [
  {
    path: STATS,
    name: 'Статистика',
  },
  {
    path: UPLOAD_STATS,
    name: 'Надіслати дані',
  },
];

export const deriveHeaderFromPath = path => {
  const currentRoute = routes.find(route => (
    route.path && route.path === path
  ) || (
    route.pathRegex && new RegExp(route.pathRegex).test(path)
  ));
  return currentRoute ? currentRoute.name : 'UBTS Stats';
};
