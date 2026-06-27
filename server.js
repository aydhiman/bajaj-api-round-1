const express = require('express')
const app = express()

require('dotenv').config()
app.use(express.json())


const bhflRouter = require("./routes/bhfl.js")

app.use("/bhfl", bhflRouter)


app.get("/", (req, res) => {
    console.log("request recieved")
    res.end("Server is running")
})

const PORT = 8080
// app.listen(process.env.SERVER_PORT, () => {
//     console.log(`Server started on ${process.env.SERVER_PORT}`)
// })
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})