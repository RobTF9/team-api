import React, { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthenticationForm from '../../components/AuthenticationForm'
import { useAuthContext } from '../../context/auth'

const SignUp = () => {
  const { signUp, authLoading } = useAuthContext()
  const [details, setDetails] = useState<Email & Username & Password>({
    email: '',
    username: '',
    password: '',
  })

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return (
    <>
      <h1>Sign up</h1>
      <AuthenticationForm details={details} submit={() => signUp(details)} onChange={onChange} />
      <NavLink to="/signin">Sign in</NavLink>
    </>
  )
}

export default SignUp
