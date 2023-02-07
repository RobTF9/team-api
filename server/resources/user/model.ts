import { Model, model, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema<UserInterface, Model<UserInterface>>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

userSchema.methods.checkPassword = function (password: string) {
  const passwordHash = this.password

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (error, same) => {
      if (error) {
        reject(error)
      }

      resolve(same)
    })
  })
}

userSchema.methods.getPublicFields = function () {
  return {
    username: this.username,
    email: this.email,
    _id: this._id,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  }
}

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next()
  }

  bcrypt.hash(this.password, 8, (error, hash) => {
    if (error) {
      next(error)
    }

    this.password = hash
    next()
  })
})

const User = model('user', userSchema)

export default User
