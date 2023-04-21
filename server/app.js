const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

const errorMiddleware = require("./middleware/error")

const userRoutes = require("./routes/userRoutes.js")
const cors = require('cors');
app.use(cors());

const allowedOrigins = ['http://localhost:3000'];

app.use(express.json())
app.use(cookieParser())
app.use("/api", userRoutes)

app.use(errorMiddleware)



module.exports = app