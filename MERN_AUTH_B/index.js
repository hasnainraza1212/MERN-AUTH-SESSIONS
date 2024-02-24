// Imports
const express = require('express'),
  sessions = require('express-session'),
  bodyParser = require('body-parser');

// Server creation
const app = express();

// Top level middleware
app.use(bodyParser.json());
app.use(sessions({
  secret: 'fdjlskaifoudoieruhwfdi9er80uio430942u94023er87iu89ef7d6t7uygehuijorr78fhjdeir90-8iuy3df9087eiruyhjkn4i0f9u',
  resave: false,
  saveUninitialized: false,
  // Here is a pretty good answer about what resave and saveUninitialized do, if you're super curious https://stackoverflow.com/questions/40381401/when-use-saveuninitialized-and-resave-in-express-session
  cookie: {
    maxAge: 600000000
  }
}));

// Middleware to check if session exists
const checkSession = (req, res, next) => {
  if (req.session.username) {
    next(); // Session exists, proceed to next middleware or route handler
  } else {
    res.redirect('/login'); // Redirect to login if session doesn't exist
  }
};

// Endpoints
app.post('/api/login', (req, res) => {
  // Here is where you would query the database
  // Once you get the user out of the database, you would set their id on sessions instead of the username example we are using below
  req.session.username = req.body.username;
  console.log(req.session);
  res.sendStatus(200);
});

app.get('/api/me', (req, res) => {
  if (req.session.username) {
    res.status(200).send(req.session.username);
  } else {
    res.sendStatus(403);
  }
});

app.delete('/api/logout', (req, res) => {
  // This method destroys a session
  req.session.destroy();
  res.sendStatus(200);
});

// User details endpoint
app.get('/api/user_details', checkSession, (req, res) => {
  res.status(200).send([]);
});

// User contacts endpoint
app.get('/api/user_contacts', checkSession, (req, res) => {
  res.status(200).send([]);
});

// Server listen
app.listen(4000, () => console.log('Houston we have lift off on port 4000'));
   