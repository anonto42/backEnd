import express from 'express';
import dotenv from 'dotenv';
const app = express();

// app.use(express.static(''));

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(process.env.PORT,function(){
    console.log(`surver is runing on ${process.env.PORT}`);
});
