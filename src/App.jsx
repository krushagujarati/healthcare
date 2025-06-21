import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorFinder from './pages/DoctorFinder';
import Booking from './pages/Booking';
import HospitalLocator from './pages/HospitalLocator';
import Login from './pages/Login';
import Register from './pages/Register';
//import Profile from './pages/Profile';
import HospitalEmbed from './components/hospitalembed';
import NotFound from './pages/NotFound';

//import ProtectedRoute from './components/ProtectedRoute';
import './styles/global.css';
import DoctorProfile from './components/Docprofile';


export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorFinder />} />
          <Route path="/booking/:doctorId" element={<Booking />} />
          <Route path="/hospitals" element={<HospitalLocator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/profile/:id" element={<DoctorProfile />} />
          
          <Route path="/hospitalembed" element={<HospitalEmbed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
