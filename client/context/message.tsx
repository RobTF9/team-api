import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import Message from '../components/Message'

interface MessageContext {
  showMessage: (m: Message) => void
  hideMessage: () => void
}

const messageContext = createContext<MessageContext>({
  showMessage: () => null,
  hideMessage: () => null,
})

export const useMessageContext = (): MessageContext =>
  useContext(messageContext)

export const MessageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation()
  const [message, setMessage] = useState({
    type: '',
    visible: false,
    message: '',
  })

  const showMessage = (m: Message) => {
    setMessage(m)
  }

  const hideMessage = () => setMessage({ ...message, visible: false })

  useEffect(() => {
    hideMessage()
  }, [location])

  useEffect(() => {
    if (message.visible) {
      setTimeout(() => setMessage({ ...message, visible: false }), 3000)
    }
  }, [message])

  return (
    <messageContext.Provider value={{ showMessage, hideMessage }}>
      <Message message={message} />
      {children}
    </messageContext.Provider>
  )
}
