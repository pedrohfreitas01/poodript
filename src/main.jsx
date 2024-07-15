import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/globalStyle.jsx'
import Routes from "./routes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle></GlobalStyle>
  </React.StrictMode>
);
