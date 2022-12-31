/* eslint-disable no-undef */
import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const uri = process.env.DEV_DB_CONNECTION
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

let client

if (!process.env.DEV_DB_CONNECTION) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (!client) {
  client = new MongoClient(uri, options)
}

async function database(req, res, next) {
  await client.connect()
  req.dbClient = client
  req.db = client.db('meleteo')
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
