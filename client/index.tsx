import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { AuthProvider } from './context/auth'
import './index.css'
import { MessageProvider } from './context/message'

function initializeReactApp() {
  const appContainer = document.getElementById('appContainer')
  if (!appContainer) throw new Error('No #appContainer found in DOM')
  const root = createRoot(appContainer)
  root.render(
    <BrowserRouter>
      <MessageProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </MessageProvider>
    </BrowserRouter>
  )
}

initializeReactApp()
