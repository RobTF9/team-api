import React, { ChangeEvent } from 'react'
import { AuthenticationFormWrapper } from './styles'

interface Props {
  details: {
    username?: string
    email: string
    password: string
  }
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  submit: () => void
}

const AuthenticationForm: React.FC<Props> = ({ details, submit, onChange }) => {
  return (
    <AuthenticationFormWrapper
      onSubmit={(event) => {
        event.preventDefault()
        submit()
      }}
    >
      {Object.entries(details).map(([key, value]) => (
        <label key={key}>
          <p>{key}</p>
          <input
            onChange={onChange}
            value={value}
            name={key}
            type={key === 'password' ? key : 'text'}
          />
        </label>
      ))}
      <button type="submit">Submit</button>
    </AuthenticationFormWrapper>
  )
}

export default AuthenticationForm
