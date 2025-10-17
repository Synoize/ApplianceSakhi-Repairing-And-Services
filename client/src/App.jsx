import './App.css'
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AppContext } from './context/AppContext';
import { AppLayout } from './layout/AppLayout';
import { AdminLayout } from './layout/AdminLayout';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Admin/Dashboard';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import BookServices from './pages/BookServices';

function App() {
  const { token } = useContext(AppContext)

  return (
    <div className='container mx-auto'>
      <ToastContainer />

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        {!token ? (
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/book-services" element={<BookServices/>} />
          </Route>
        ) : (
          <Route path="/" element={<AdminLayout />}>
            <Route path={'/'} element={<Dashboard />} />
            <Route path={'/my-profile'} element={<Dashboard />} />
            <Route path={'/about-us'} element={<Dashboard />} />
            <Route path={'/partner'} element={<Dashboard />} />
            <Route path={'/contact-us'} element={<Dashboard />} />
            <Route path={'/privacy-policy'} element={<Dashboard />} />
          </Route>
        )}

      </Routes>

    </div>
  )
}

export default App
