import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from '@components/layout/footer'
import TenancyPage from './tenancy/tenancyPage'
import HomePage from './homePage'
import '@stylesheets/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Routes>
          <Route path="/tenancy" element={<TenancyPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

    <Footer />
  </StrictMode>,
)
