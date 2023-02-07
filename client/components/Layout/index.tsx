import React, { ReactNode } from 'react'
import { LayoutWrapper } from './styles'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

export default Layout
