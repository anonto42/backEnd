import express from 'express';
const app = express();

app.use((req, res, next)=>{
    console.log("everything was good!");
    next();
})

app.get('/',(req, res) =>{
    res.send('wellcome to the world');
})
// 78235
app.listen(3500);