import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import requireAuth from './hoc/requireAuth'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import './index.css'
import './App.css'

const ProtectedDashboard = requireAuth(Dashboard)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  )
}

export default App
