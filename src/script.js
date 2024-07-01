import express from 'express';
const app = express();

// app.use(express.static(''));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req, res, next)=>{
    console.log("everything was good!");
    next();
});

app.get('/api/post',(req, res) =>{
    res.json('wellcome to the world');
});
app.get('/api/get',(req, res) =>{
    res.json('wellcome to the world');
});

app.listen(3500);
