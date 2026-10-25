import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ProductTab from './ProductTab.jsx'
// import Event from './Event.jsx'
import LikeButton from './LinkeButton.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <LikeButton/>
  </>
  // </StrictMode>,
)
