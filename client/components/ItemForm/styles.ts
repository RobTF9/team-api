import styled from 'styled-components'

export const ItemFormWrapper = styled.form`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  padding: 2rem 0 0;
  border-top: 0.01rem solid rgba(0, 0, 0, 0.2);

  button {
    background-color: var(--success);
  }

  label {
    flex-grow: 1;
    display: flex;
    align-items: center;

    input {
      flex-grow: 1;
      margin: 0 1rem;
    }
  }
`
