import React, { createContext, useContext, useEffect, useState } from 'react'
import { get, post } from '../data/fetch'
import { useMessageContext } from './message'

interface AuthContext {
  signIn: (details: Email & Password) => void
  signUp: (details: Email & Password & Username) => void
  signOut: () => void
  authenticated?: boolean
  authLoading: boolean
}

const authContext = createContext<AuthContext>({
  authenticated: false,
  authLoading: false,
  signIn: () => null,
  signUp: () => null,
  signOut: () => null,
})

export const useAuthContext = (): AuthContext => useContext(authContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showMessage } = useMessageContext()

  const [authLoading, setAuthLoading] = useState(false)
  const [authenticated, setAuthenticated] = useState<boolean | undefined>()

  async function signIn(details: Email & Password) {
    setAuthLoading(true)
    const response = await post<Email & Password, ServerReponse>('/auth/signin', details)
    if (response.auth) setAuthenticated(response.auth)
    if (!response.auth && response.message)
      if (!response.auth && response.message) {
        setAuthenticated(response.auth)
        showMessage(response.message)
      }
    setAuthLoading(false)
  }

  async function signUp(details: Email & Password & Username) {
    setAuthLoading(true)
    const response = await post<Email & Password & Username, ServerReponse>('/auth/signup', details)
    if (response.auth) setAuthenticated(response.auth)
    if (!response.auth && response.message) {
      setAuthenticated(response.auth)
      showMessage(response.message)
    }
    setAuthLoading(false)
  }

  async function signOut() {
    const response = await get<ServerReponse>('/auth/signout')
    setAuthenticated(response.auth)
    if (response.message) showMessage(response.message)
  }

  async function checkAuth() {
    const response = await get<ServerReponse>('/auth')
    setAuthenticated(response.auth)
    if (response.message) showMessage(response.message)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <authContext.Provider value={{ authLoading, signIn, signOut, signUp, authenticated }}>
      {children}
    </authContext.Provider>
  )
}
