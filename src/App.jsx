
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './dashboard.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import './styles.css'
import AboutUs from './AboutUs.jsx'
import Courses from './Courses.jsx'
import Admissions from './Admissions.jsx'
import ContactUs from './ContactUs.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className='mainContainer'>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
