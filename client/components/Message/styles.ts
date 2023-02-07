import styled from 'styled-components'

export const MessageWrapper = styled.div<{ type: string }>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  background-color: var(--${({ type }) => type});

  * {
    color: white;
  }
`
