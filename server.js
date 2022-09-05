const express = require("express")
const app = express()
const Products = require("./Routes/Products")
const Orders = require('./Routes/Order')
const mongoose = require('mongoose');
const seedDb = require("./Seed")
const cors = require("cors")

mongoose.connect('mongodb://localhost:27017/Shopping_DB');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


/* seedDb() */

app.get("/", (req, res) => {
    res.send("Listening")
})

app.use(Products)
app.use(Orders)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})