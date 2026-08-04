import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'
import Inicio from './pages/Inicio'
import Masoneria from './pages/Masoneria'
import Historia from './pages/Historia'
import HistoriaGlobal from './pages/HistoriaGlobal'
import Identidad from './pages/Identidad'
import Crecimiento from './pages/Crecimiento'
import Ingreso from './pages/Ingreso'
import FranciscoHuerta from './pages/FranciscoHuerta'
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'

function Layout() {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <>
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/"                element={<Inicio />} />
        <Route path="/masoneria"       element={<Masoneria />} />
        <Route path="/historia"        element={<Historia />} />
        <Route path="/historia-global" element={<HistoriaGlobal />} />
        <Route path="/identidad"       element={<Identidad />} />
        <Route path="/crecimiento"     element={<Crecimiento />} />
        <Route path="/ingreso"         element={<Ingreso />} />
        <Route path="/logia"           element={<FranciscoHuerta />} />
        <Route path="/admin/login"     element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!isAdmin && <Footer />}
      <ScrollToTop />
      <PageLoader />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  )
}
