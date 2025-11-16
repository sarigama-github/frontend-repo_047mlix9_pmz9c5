import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Investors from './pages/Investors'
import FAQ from './pages/FAQ'
import DesignSystem from './pages/DesignSystem'
import ComponentsPage from './pages/Components'
import DemoHero from './pages/DemoHero'
import Docs from './pages/Docs'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/design" element={<DesignSystem />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/demo-hero" element={<DemoHero />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
