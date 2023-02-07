import React, { useState } from 'react'
import { ItemFormWrapper } from './styles'

interface Props {
  create: ({ item }: { item: string }) => void
}

const ItemForm: React.FC<Props> = ({ create }) => {
  const [item, setItem] = useState('')
  return (
    <ItemFormWrapper
      onSubmit={(event) => {
        event.preventDefault()
        create({ item })
      }}
    >
      <label>
        New item <input value={item} onChange={(event) => setItem(event.target.value)} />
      </label>
      <button type="submit">Add item</button>
    </ItemFormWrapper>
  )
}

export default ItemForm
