// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;

app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json')));
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json')));
  const newComment = {
    id: uuidv4(),
    username: req.body.username,
    comment: req.body.comment
  };
  comments.push(newComment);
  fs.writeFileSync(path.join(__dirname, 'comments.json'), JSON.stringify(comments, null, 2));
  res.json(newComment);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});