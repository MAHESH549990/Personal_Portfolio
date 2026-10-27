import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from '../From'
import CommentsFrom from '../CommentsForm'
import ShowComments from '../ShowComments'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
  <ShowComments/>
  </>
  // </StrictMode>,
)
