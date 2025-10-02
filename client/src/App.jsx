import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css'
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className='container mx-auto'>
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Home />} />
        <Route path={'/my-profile'} element={<Home />} />
        <Route path={'/about'} element={<Home />} />
        <Route path={'/partner'} element={<Home />} />
        <Route path={'/contact'} element={<Home />} />
        <Route path={'/privacy-policy'} element={<Home />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
