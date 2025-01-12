
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/emmanuel-mendez.github.io/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 1567, hash: 'fc77e036fb7e105f8db921a3afa7d63b4f7048312d0c3c1c48f6650e41c95ee4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1474, hash: 'cb6d93154623e6d52cc940121f702f4dbf855983346e0d0f943eafa405c1e5fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EA7WBCFI.css': {size: 1175, hash: 'kcUK+TLi3co', text: () => import('./assets-chunks/styles-EA7WBCFI_css.mjs').then(m => m.default)}
  },
};
