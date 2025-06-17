import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Hello from './Hello.jsx'
import Football from './football.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById("hello")).render(
  <StrictMode>
    <Hello/>
    <Football/>
  </StrictMode>
)