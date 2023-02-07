import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'

const NotAuthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default NotAuthenticated
