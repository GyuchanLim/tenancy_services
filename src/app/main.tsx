import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from '@components/layout/footer'
import MarketRent from './marketRent.tsx'
import '@stylesheets/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <MarketRent />
      <Footer />
    </QueryClientProvider>
  </StrictMode>,
)
