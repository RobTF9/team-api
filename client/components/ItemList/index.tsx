import React, { useState } from 'react'
import { ItemListWrapper } from './styles'

interface Props {
  items?: { data?: ItemResource[] }
  itemsLoading?: boolean
  del: (id: string) => void
  update: (item: ItemResource) => void
}

const ItemList: React.FC<Props> = ({ items, itemsLoading, del, update }) => {
  return itemsLoading ? (
    <h2>Items loading...</h2>
  ) : (
    <ItemListWrapper>
      {items &&
        items.data &&
        items.data.map((item) => (
          <ItemElement key={item._id} item={item} del={del} update={update} />
        ))}
    </ItemListWrapper>
  )
}

const ItemElement: React.FC<{
  item: ItemResource
  update: (item: ItemResource) => void
  del: (id: string) => void
}> = ({ item, update, del }) => {
  const [i, setI] = useState(item)
  return (
    <li>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          update(i)
        }}
      >
        <label>
          Item
          <input value={i.item} onChange={(event) => setI({ ...i, item: event.target.value })} />
        </label>
      </form>
      <button type="button" onClick={() => del(item._id)}>
        Delete
      </button>
    </li>
  )
}

export default ItemList
