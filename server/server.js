const express = require('express');
const app = express();
// decide later if you want (session) for authentication
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const connectDb = require('./config/database')
const listRoutes = require('./routes/listRoutes')
const cors = require('cors');
const passport = require("passport");
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose');

require("dotenv").config({ path: "./config/.env" });

require('./config/passport')(passport)

connectDb();

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Setup Sessions - stored in MongoDB
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    },
    {
        secret: 'secret',
        saveUninitialized: true,
        resave: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/', listRoutes)
app.use('/auth', authRoutes)

app.listen(process.env.PORT, () => [
    console.log(`Server is running at ${process.env.PORT}`)
])