// backend/server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const db = require('./db'); // Import de la configuration MySQL

app.use(bodyParser.json());
app.use((req, res, next) => {
  // Middleware CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
  }

  const query = 'SELECT * FROM utilisateurs WHERE email = ? AND mot_de_passe = ?';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la requête SQL.' });
    }

    if (result.length > 0) {
      return res.json({ message: 'Connexion réussie' });
    } else {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
