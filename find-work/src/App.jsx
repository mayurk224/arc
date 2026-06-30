import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import AuthPage from './components/auth'
import Jobs from './components/jobs'
import NotFoundPage from './components/notFound'
import ProtectedRoute from './components/protectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />
      <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App