// bringing express module
const express = require('express');

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  // send something to the page
  res.send('Hello World from server');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

// A dynamic route
app.get('/users/:name', (req, res) =>{
  //This property is an object containing properties mapped to the named route “parameters”.
  let user = req.params.name;
  res.send('<h1>' + user + '</h1>');
});

// to run server - listen() and port #
app.listen(3000, function() {
  // write to console
  console.log('server started on port 3000');
});
