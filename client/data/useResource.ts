import { createOne, deleteOne, getMany, updateOne } from './crud'

function useResource<R extends Resource, I>(endpoint: string) {
  const [items, itemsLoading] = getMany<R>([endpoint], endpoint)
  const [create, createLoading] = createOne<Partial<I>, R>([endpoint], endpoint)
  const [update, updateLoading] = updateOne<R, R>([endpoint], endpoint)
  const [del, delLoading] = deleteOne<R>([endpoint], endpoint)

  return {
    items,
    itemsLoading,
    create,
    createLoading,
    update,
    updateLoading,
    del,
    delLoading,
  }
}

export default useResource
