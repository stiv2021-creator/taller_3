import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FavoritesProvider } from './features/auth/hooks/FavoritesContext.jsx'
import { BuysProvider } from './features/auth/hooks/BuysContext.jsx'

createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
  <StrictMode>
  <BuysProvider>
    <App />
  </BuysProvider>
  </StrictMode>
  </FavoritesProvider>,
  
)
