const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use('/user', userRoutes);

// app.use(session({
//     secret: 
// }))

app.listen(3001, ()=>{
    console.log("Connected to server.")
});