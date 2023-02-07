import React, { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthenticationForm from '../../components/AuthenticationForm'
import { useAuthContext } from '../../context/auth'

const SignIn = () => {
  const { signIn, authLoading } = useAuthContext()
  const [details, setDetails] = useState<Email & Password>({
    email: '',
    password: '',
  })

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return (
    <>
      <h1>Sign in</h1>
      <AuthenticationForm details={details} submit={() => signIn(details)} onChange={onChange} />
      <NavLink to="/">Sign up</NavLink>
    </>
  )
}

export default SignIn
