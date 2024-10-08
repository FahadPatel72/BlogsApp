
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 6000;

app.use(express.json());

const blogRoutes = require("./routes/blogs");

app.use("/api/v1",blogRoutes);

app.listen(PORT,()=>{
    console.log(`Server successfully started at ${PORT}`);
})

//establish database connection
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
   res.send(`<h1>App started successfully!</h1>`);
})
