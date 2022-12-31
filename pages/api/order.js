// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from 'next-connect'
import database from 'middleware/database'

const handler = nextConnect()

handler.use(database)

// handler.get(async (req, res) => {
//   const doc = await req.db.collection('orders').findOne()
//   // eslint-disable-next-line no-undef
//   console.log('Document is ', doc)
//   res.json(doc)
// })

handler.post(async (req, res) => {
  let data = req.body
  data = JSON.parse(data)

  const doc = await req.db.collection('orders').insert(data)
  // eslint-disable-next-line no-undef
  res.json({ message: 'ok' })
})

export default handler
