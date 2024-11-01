import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = ()=>{
     mongoose.connect(process.env.DB_URL,{})
     .then(()=> console.log("connection succesful"))
     .catch((error)=>{
        console.log("issue in connection");
        console.error(error.message)
        process.exit(1);
     })
}

export default dbConnect;