
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './dashboard.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <div className='mainContainer'>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
