// Imports
import express from 'express'
import session  from 'express-session'
import cors from "cors"
import connectMongoDBClient from './db/db.js';
import { login } from './controller/login.js';
import { getUser } from './controller/getUser.js';
import { access } from './controller/access.js';
// Server creation
connectMongoDBClient()
const app = express();
// Top level middleware
app.use(express.json());
app.use(cors({
  origin: 'https://mern-auth-session.netlify.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true // Allow credentials (cookies) to be sent
}));
app.use(session({
  secret: 'my-cat',
  resave: false,
  saveUninitialized: false,
  // Here is a pretty good answer about what resave and saveUninitialized do, if you're super curious https://stackoverflow.com/questions/40381401/when-use-saveuninitialized-and-resave-in-express-session
  cookie: {
    domain: 'localhost',
    maxAge: 600000000,
    secure:false
  }
}));

// // Middleware to check if session exists
const checkSession = (req, res, next) => {
  if (req.session._id) {
    next(); // Session exists, proceed to next middleware or route handler
  } else {
    res.status(403).send({message:"Unauthorized", success:false});  // Redirect to login if session doesn't exist
  }
};

app.get("/api/access", access)
// // Endpoints
app.post('/api/login', login);

app.get('/api/me',checkSession,getUser);

app.post('/api/logout', (req, res) => {
  // This method destroys a session
  if(!req.session._id){
    return res.status(404).send({success:false, message:"session not found logout error"})
  }
  req.session.destroy();
 return res.status(200).send({message:"user logout", success:true});
});

// Server listen
app.listen(4000, () => console.log('Houston we have lift off on port 4000'));
   