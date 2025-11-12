const express = require("express")
const mongoose = require('mongoose');
const MovieModel = require("./src/models/movieModel")


require('dotenv').config()

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@main.4rvoy3a.mongodb.net/?retryWrites=true&w=majority&appName=main`).then(res=>{ 
    console.log("Connected to MongoDB");
}).catch(err=>{
    console.error("Error connecting to MongoDB:", err);
})
const port = process.env.PORT

const moviesRouter = require("./src/routes/moviesRouter")
const userRouter = require("./src/routes/userRouter")

const app = express()

var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:5173',
}

app.use(cors(corsOptions))
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("", moviesRouter)

app.use("/user", userRouter)

app.listen(port, () => {
     console.log("Server running - http://localhost:"+port);
})