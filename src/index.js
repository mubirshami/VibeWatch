import express from "express";
import ConnectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config();
ConnectDB();
const port = process.env.PORT;
const app = express();
app.listen(port, ()=>{
    console.log(`Server running on port:${port}`);
})


