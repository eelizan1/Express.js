// Serving json content, redirecting,
// and submitting a post request to the server

// to use: localhost:3000/users

// bringing express modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// set up middlewear for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) =>{
  // setting a json array
  let users = [
    {
      first_name: "John",
      last_name: "Doe",
      age: 31,
      gender: "male"
    },
    {
      first_name: "Tom",
      last_name: "Jackson",
      age: 24,
      gender: "male"
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      age: 44,
      gender: "female"
    }
  ];

  // server as json
  res.json(users);
});

// redirecting
// redirects when a url is specified
app.get('/about', (req, res) =>{
  res.redirect('/about.html');
});

// form routing to grab form values
// make sure you have module: body-parser
app.post('/subscribe', (req, res) => {
  // name and email is coming from the form names
  let name = req.body.name;
  let email = req.body.email;
  // write to console the name and email
  console.log('Name ' + name + ' has subscribed with ' +
  email);
});

// to run server - listen() and port #
app.listen(3000, function() {
  // write to console
  console.log('server started on port 3000');
});
