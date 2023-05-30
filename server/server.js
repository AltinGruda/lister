const express = require('express');
const app = express();
require("dotenv").config({ path: "./config/.env" });

app.use('/', (req, res) => {
    res.send('Hi')
})

app.listen(process.env.PORT, () => [
    console.log(`Server is running at ${process.env.PORT}`)
])