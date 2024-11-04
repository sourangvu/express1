const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Response for GET request')
})

app.post('/', (req, res) => {
  res.send('Response for POST request')
})

app.put('/', (req, res) => {
  res.send('Response for PUT request')
})

app.delete('/', (req, res) => {
  res.send('Response for DELETE request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});