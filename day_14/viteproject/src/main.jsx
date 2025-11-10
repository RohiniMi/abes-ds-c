import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Body from './App.jsx'
import ImageSlider from './ImageSlider.jsx'
import ImageRotation from './ImageRotation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>
)
