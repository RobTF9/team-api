import styled from 'styled-components'

export const ItemListWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  li {
    padding: 2rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li button {
    background-color: var(--error);
  }
`
