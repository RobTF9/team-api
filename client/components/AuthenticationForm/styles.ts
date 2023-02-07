import styled from 'styled-components'

export const AuthenticationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  & > label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    text-transform: capitalize;

    p {
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
    }
  }

  button {
    margin: 1rem 0;
  }
`
