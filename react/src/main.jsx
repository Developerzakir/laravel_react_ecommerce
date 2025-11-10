import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/custom.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/css/placeholder-loading.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)