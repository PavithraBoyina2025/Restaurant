
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Restaurant/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Restaurant/login"
  },
  {
    "renderMode": 2,
    "route": "/Restaurant/home"
  },
  {
    "renderMode": 2,
    "route": "/Restaurant/menu"
  },
  {
    "renderMode": 2,
    "route": "/Restaurant/booking"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4989, hash: '28a767d5b50be369b407fd4d30c4919d89ce994d75ecd0e84b0c39045895f1d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: 'e66360a782665415be9c29441623de3dba9c58c5f5d71f8176edb95096bb7264', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18686, hash: 'f9beb0a142a01d897643cbf6ccf164c11b587696cab23aeeec3e7c63200e40a9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 19674, hash: 'fb599326409e1c5013e23c53adc424156c46caaba9986e4dc48987e93607768d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 27125, hash: '1ca46f8f2ee2f153754e00416397aec36d8f6d6e984685e79c8af4676ca33d34', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'booking/index.html': {size: 19603, hash: '0bad50c8e985a03abfbc522ab39d2effee12dae1dcaae77aadd1577ac217fdec', text: () => import('./assets-chunks/booking_index_html.mjs').then(m => m.default)},
    'styles-IG45FNYW.css': {size: 231634, hash: 'I3wd5rAhVIs', text: () => import('./assets-chunks/styles-IG45FNYW_css.mjs').then(m => m.default)}
  },
};
