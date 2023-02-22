import express from 'express'

const app = express()
const port = 3000

app.get('/user', (req, res) => {
    const response = {
        name: 'Sergi',
        edat: '29',
        url: req.protocol + '://' + req.get('host') + req.url
        }
    res.json(response)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })