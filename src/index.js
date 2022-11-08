import React from 'react'
import { createRoot } from 'react-dom/client'

// @unocss-include
// import 'uno.css'
// import 'virtual:uno.css'

import App from './App'

document.addEventListener('DOMContentLoaded', render)

function render ({ target }) {
  const root = createRoot(target.getElementById('app'))
  root.render(<App />)
}
