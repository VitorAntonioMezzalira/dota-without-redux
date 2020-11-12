import express from 'express';
import characters from './data'

const app = express();

app.get('/api/characters', (req, res) => {
  res.send(characters);
})

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000')
})