import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/globalStyle.jsx'
import Home from './pages/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle></GlobalStyle>
  </React.StrictMode>,
)
