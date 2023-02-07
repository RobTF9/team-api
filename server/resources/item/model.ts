import { Schema, model, SchemaTypes } from 'mongoose'

const collection = 'item'

const itemSchema = new Schema<ItemInterface>(
  {
    item: { type: String, required: true },
    createdBy: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true, collection }
)

const Item = model<ItemInterface>(collection, itemSchema)

export default Item
