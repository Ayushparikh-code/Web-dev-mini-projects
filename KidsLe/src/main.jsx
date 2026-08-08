
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import '@/Components/custom-scrollbar.css'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  // <BrowserRouter>

    <App />
    // </BrowserRouter>
)
