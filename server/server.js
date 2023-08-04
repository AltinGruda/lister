const express = require('express');
const app = express();
// decide later if you want (session) for authentication
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const connectDb = require('./config/database')
const listRoutes = require('./routes/listRoutes')
const cors = require('cors');
const passport = require("passport");
const mongoose = require('mongoose');
const List = require('./models/List')

require("dotenv").config({ path: "./config/.env" });

connectDb();

app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: 'GET,POST,PUT,DELETE',
      credentials: true,
    })
  );

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());


app.use('/', listRoutes)

app.listen(process.env.PORT, () => [
    console.log(`Server is running at ${process.env.PORT}`)
])