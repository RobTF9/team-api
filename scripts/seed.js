const { exec } = require('child_process')

const name = process.argv[2] || 'mern'

const fs = require('fs/promises')

const now = new Date()
const date = now.toISOString()
// const yesterday = new Date(now - 1)

const users = [
  {
    _id: {
      $oid: '62ebe39aea4bf07f32b51f18',
    },
    username: 'user',
    email: 'user@email.com',
    password: '$2a$08$nR5AlhhxkvKp55iIv0jKreGtjNOg/FHb3A2g6obDp5BFajvnpT9I2',
    createdAt: {
      $date: date,
    },
    updatedAt: {
      $date: date,
    },
  },
]
const items = [
  {
    _id: {
      $oid: '62ebe39fea4bf07f32b51f1d',
    },
    item: 'Item 1',
    createdBy: {
      $oid: '62ebe39aea4bf07f32b51f18',
    },
    createdAt: {
      $date: date,
    },
    updatedAt: {
      $date: date,
    },
  },
  {
    _id: {
      $oid: '62ebe39fea4bf07f32b51f1e',
    },
    item: 'Item 2',
    createdBy: {
      $oid: '62ebe39aea4bf07f32b51f18',
    },
    createdAt: {
      $date: date,
    },
    updatedAt: {
      $date: date,
    },
  },
  {
    _id: {
      $oid: '62ebe39fea4bf07f32b51f1f',
    },
    item: 'Item 3',
    createdBy: {
      $oid: '62ebe39aea4bf07f32b51f18',
    },
    createdAt: {
      $date: date,
    },
    updatedAt: {
      $date: date,
    },
  },
]

async function postCollection(collection, object) {
  await fs.writeFile(`./scripts/seed-data/${collection}.json`, JSON.stringify(object), (err) => {
    if (err) throw err
  })
  exec(
    `mongoimport --uri mongodb://localhost:27017/${name} --file ${__dirname}/seed-data/${collection}.json --jsonArray --drop
    `,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    }
  )
}

postCollection('item', items)
postCollection('users', users)
