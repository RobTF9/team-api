import React from 'react'
import ItemForm from '../../components/ItemForm'
import ItemList from '../../components/ItemList'
import useResource from '../../data/useResource'

const Items = () => {
  const resource = useResource<ItemResource, ItemInterface>('/api/item')
  const { items, itemsLoading, create, createLoading, update, del } = resource

  if (itemsLoading || createLoading) return <h1>Loading...</h1>

  return (
    <div>
      <ItemForm create={create} />
      <ItemList
        items={items}
        itemsLoading={itemsLoading}
        del={del}
        update={update}
      />
    </div>
  )
}

export default Items
