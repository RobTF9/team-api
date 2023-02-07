import dotenv from 'dotenv'
dotenv.config()

const config = {
  db: process.env.MONGO_DB || '',
  secret: process.env.SESSION_SECRET || '',
}

export default config
