import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import routes from './routes/route.js'
import dotenv from 'dotenv'

dotenv.config()
const app=express();

app.use(bodyParser.json({
    limit:"30mb",extended:true
}))
app.use(bodyParser.urlencoded({
    limit:"30mb",extended:true
}))
app.use(cors());

app.use('/Restraunts',routes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("\n\nConnected to Db")).then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}\n\n`))).catch((err)=>console.log(err))