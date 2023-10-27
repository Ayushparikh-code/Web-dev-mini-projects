import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// the above import is for minifies css bootstrap file.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
