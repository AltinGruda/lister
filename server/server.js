const express = require('express');
const app = express();
// decide later if you want (session) for authentication
const MongoStore = require("connect-mongo") //(session);
const connectDb = require('./config/database')
require("dotenv").config({ path: "./config/.env" });

connectDb();
app.use('/', (req, res) => {
    res.send('Hi')
})

app.listen(process.env.PORT, () => [
    console.log(`Server is running at ${process.env.PORT}`)
])