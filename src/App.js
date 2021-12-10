import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NewGradient from './pages/NewGradient'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="new" element={<NewGradient />} />
      <Route path="edit/:gradientId" element={<Home />} />
    </Routes>
  )
}

export default App
