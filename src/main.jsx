import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/global'
import { DrinksProvider } from './hooks/DrinksContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DrinksProvider >
      <App />
    </DrinksProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
