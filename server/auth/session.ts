import session from 'express-session'
import ConnectSession from 'connect-mongodb-session'
import config from '../config'

declare module 'express-session' {
  export interface SessionData {
    user: string
  }
}

const MongoDBStore = ConnectSession(session)

const store = new MongoDBStore({
  uri: config.db,
  collection: 'sessions',
})

store.on('error', function (error) {
  console.log(error)
})

const authSession = session({
  secret: config.secret,
  resave: true,
  saveUninitialized: false,
  cookie: { secure: false },
  store,
})

export default authSession
