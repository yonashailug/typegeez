import { defineConfig, presetAttributify, presetIcons } from 'unocss'

import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetUno()
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        * {
          color: ${theme.colors.gray?.[700] ?? '#333'};
          padding: 0;
          margin: 0;
        }
        body {
          height: 100vh;
        }
        button, input {
          font-size: inherit;
          color: inherit;
          line-height: inherit;
          font-family: inherit;
        }
        code, kbd, pre, samp {
          font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
          font-size: 1em;
        }
        div {
          display: flex;
          flex-direction: column;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        .divider, [divider=""] {
          border-bottom: 1px solid;
        }
        .border-base, .divider, [border~=base], [divider=""] {
          border-color: rgba(107,114,128,.1);
        }
        blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
          margin: 0;
        }
      `
    }
  ],
  shortcuts: {
    btn: 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700'
  }
})
