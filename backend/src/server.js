import express from 'express';
import cors from 'cors';
import characters from './characters';
import users from './users';

const app = express();

app.use(cors());

app.get('/api/characters/', (req, res) => {
  res.send(characters);
})

app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id == userId);
  if(user) {
    res.send(user)
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
})

app.get('/api/character/:id', (req, res) => {
  const characterId = req.params.id; // extrai id do character
  const character = characters.find(character => character.id == characterId); // encontra character correspondente
  if(character) {
    res.send(character) // envia character
  } else {
    res.status(404).send({ message: 'Character Not Found' }); // envia resposta de não encontrado
  }
})

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000')
})