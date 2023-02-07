import React from 'react'
import Layout from '../components/Layout'
import { useAuthContext } from '../context/auth'
import Authenticated from './authenticated'
import NotAuthenticated from './notAuthenticated'

const Router = () => {
  const { authenticated } = useAuthContext()
  if (authenticated == null) return <h1>Loading...</h1>
  return <Layout>{authenticated ? <Authenticated /> : <NotAuthenticated />}</Layout>
}

export default Router
