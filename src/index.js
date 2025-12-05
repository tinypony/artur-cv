import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

const container = document.getElementById('app')
const root = createRoot(container)
// Use React.createElement instead of JSX here to avoid parser issues during build
root.render(React.createElement(App))
