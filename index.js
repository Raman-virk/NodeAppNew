
const express = require('express');
const path = require("path");
const cors = require('cors');
require("dotenv").config();
var mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))
mongoose.connect( process.env.MONGODB_URI||"mongodb+srv://eastVillageUser:eastVillagePassword@cluster0.n9wns.mongodb.net/EastVillage?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('Database connected');
})

const usersRouter = require('./routes/users');
app.use('/users',usersRouter);

const reviewsRouter = require('./routes/reviews');
app.use('/reviews',reviewsRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 5000,() =>{
    console.log('server is running at 5000');
});