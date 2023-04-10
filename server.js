const express = require('express')
const cors = require('cors')
const app = express()

const dotenv = require('dotenv')
dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

const connectDB = require('./dbConnection')
connectDB()

app.use(cors())

const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/', require('./routes/routes'))

app.listen(PORT, () => {
    console.log(`listening to the port no:+${PORT}`)
})