const express = require('express');
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 8080


app.use(express.json())

app.get('/',(req, res) => {
    res.send('Hello Top It off')
})

app.listen(PORT, () => {
    console.log("Running on http://localhost:"+PORT);
})

