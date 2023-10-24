/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StepProvider, PointsProvider } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PointsProvider>
      <StepProvider>
        <App />
      </StepProvider>
    </PointsProvider>
  </React.StrictMode>
)
