import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from '../context/auth'
import QueryContext from '../context/query'
import Items from './pages/items'

const Authenticated = () => {
  const { signOut } = useAuthContext()
  return (
    <QueryContext>
      <div>
        <header>
          <h1>Authenticated</h1>
          <button onClick={signOut}>Sign out</button>
        </header>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </QueryContext>
  )
}

export default Authenticated
