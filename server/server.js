const express = require('express');
const app = express();
// decide later if you want (session) for authentication
const MongoStore = require("connect-mongo") //(session);
const connectDb = require('./config/database')
const listRoutes = require('./routes/listRoutes')
require("dotenv").config({ path: "./config/.env" });

connectDb();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', listRoutes)

app.listen(process.env.PORT, () => [
    console.log(`Server is running at ${process.env.PORT}`)
])