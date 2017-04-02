// routing static web pages

// bringing express module
const express = require('express');
// must require path
const path = require('path');
const app = express();

// set static path
// use method will pass a file which will use
// __dirname: the direcotry we're in
// 'public': the folder that will load static files
app.use(express.static(path.join(__dirname, 'public')));

// to run server - listen() and port #
app.listen(3000, function() {
  // write to console
  console.log('server started on port 3000');
});
