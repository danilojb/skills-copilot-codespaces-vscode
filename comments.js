// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to get all comments
app.get('/api/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.send(data);
  });
});