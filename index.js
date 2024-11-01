import express from "express";
import dbConnect from "./config/mongoDb.js"
import dotenv from "dotenv"
// import todoRoutes from "./routes/todos.js"

dotenv.config();
const app=express();

const PORT=process.env.PORT||4000;

app.use(express.json());

// app.use("/api/v1",todoRoutes);

app.get('/',(req,res)=>{
    res.send(`<h1> hello <h1>`);
})
dbConnect();
app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`);
})