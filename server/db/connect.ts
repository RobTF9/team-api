import mongoose from 'mongoose'
import config from '../config'

const connect = (): void => {
  if (typeof config.db === 'string') {
    console.log('Connecting to database...')

    mongoose.connect(config.db)
    mongoose.connection.on('connected', () => console.log('Connected to database'))
  } else {
    console.log('Not database connection string')
  }
}

export default connect
