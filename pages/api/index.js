import nc from 'next-connect'

const handler = nc()
.get((req, res) => {
  res.json({ mesagge : 'ok'})
})
.post((req, res) => {
  res.json({ mesagge : 'posted'})
})

export default handler