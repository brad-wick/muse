import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/landing-page'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página inicial */}
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
