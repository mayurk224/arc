import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import AuthPage from './components/auth'
import Jobs from './components/jobs'
import NotFoundPage from './components/notFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App