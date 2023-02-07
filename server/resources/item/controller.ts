import crudControllers from '../../utils/crud'
import Item from './model'

export default crudControllers<ItemInterface>(Item, 'item')
