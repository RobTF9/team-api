import React from 'react'
import { MessageWrapper } from './styles'

interface Props {
  message: Message
}

const Message: React.FC<Props> = ({ message }) => {
  return message.visible ? (
    <MessageWrapper type={message.type}>
      <p>{message.message}</p>
    </MessageWrapper>
  ) : (
    <></>
  )
}

export default Message
