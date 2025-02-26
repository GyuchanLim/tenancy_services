import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router";
import { Footer, Navbar } from '@components/layout'
import { HomePage, MarketRent } from '@pages/index'
import '@stylesheets/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market_rent" element={<MarketRent />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

    <Footer />
  </StrictMode>,
)
