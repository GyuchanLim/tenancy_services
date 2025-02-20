import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router";
import { Footer, Navbar } from '@components/layout'
import TenancyPage from './tenancy/tenancyPage'
import HomePage from './homePage'
import '@stylesheets/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Navbar />
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
