import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Express initialization
const app = express();


// configuration's

dotenv.config();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}));
app.use(cookieParser());
app.use(express.json({limit:"10kb"}));
app.use(express.urlencoded({limit:"10kb",extended:true}));
app.use(express.static("public"));


// DB connection
connectDB()
.then(
    app.listen(process.env.PORT || 8000,()=>{
        console.log('');
        console.log(`Server is running on port ${process.env.PORT}`);
        console.log('');
    })
)
.catch((err)=>{
    console.log(`ERROR : ${err}`);
})






// app.listen(process.env.PORT,function(){
//     console.log('');
//     console.log(`surver is runing on ${process.env.PORT}`);
//     console.log('');
// });
