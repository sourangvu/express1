const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

async function main() {
  await mongoose.connect('mongodb+srv://sourangvu:sourangvu@maincluster.idci6.mongodb.net/?retryWrites=true&w=majority&appName=Maincluster');

}
main()
.then(res => {
    console.log("DB connected")
})
.catch(err => console.log(err));


const TaskSchema = new mongoose.Schema({
  task: String,
  iscompleted:String,
  user:String
});

const Task = mongoose.model('task', TaskSchema);


app.get('/', (req, res) => {
  res.send('Response for GET request')
})

app.post('/', (req, res) => {
  res.send('Response for POST request')
})

app.put('/:id', (req, res) => {
  res.send('Response for PUT request')
})

app.delete('/:id', (req, res) => {
  res.send('Response for DELETE request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});