// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from 'next-connect'
import database from 'middleware/database'

const handler = nextConnect()

handler.use(database)

handler.post(async (req, res) => {
  let data = req.body
  data = JSON.parse(data)
  data.createdAt = new Date().toLocaleString('en-GB', { timeZone: 'UTC' })

  await req.db.collection('orders').insert(data)
  // eslint-disable-next-line no-undef
  res.json({ message: 'ok' })
})

export default handler
