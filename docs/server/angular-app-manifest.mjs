
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
    'index.csr.html': {size: 4989, hash: '11947ff8faa4f7e9c49221da128bb12e41038bf736c178c45edab35cfe31acf1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: 'dcfcb7aba02023ca53ceeeb07d49bf34f251be874f48800e3e4ddf45d9a0952b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18686, hash: '3b0f41d1660d43fa3773c38849056a0b6738aba5cd1e1fd9c0b1f07feb466d7a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 27125, hash: '86afe26c1dbf4c8e587a3e0e82ef8cd6969e95be27f810129aea828e287962ee', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'booking/index.html': {size: 19622, hash: '2edd7fa73d3c50bd1449d6afd3053dcc31c41afdeedf91f0abb03ddedf70b2d9', text: () => import('./assets-chunks/booking_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 19660, hash: 'bcda265cb7675cd54ffe01eca426024a852d0e41486647e6e6e5a8de0081c9b0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-IG45FNYW.css': {size: 231634, hash: 'I3wd5rAhVIs', text: () => import('./assets-chunks/styles-IG45FNYW_css.mjs').then(m => m.default)}
  },
};
