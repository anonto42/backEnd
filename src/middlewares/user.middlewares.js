
const dataPrint =(req,res,next)=>{
    console.log(`your middleware is round sucessfully`);
    next();
}

const middlewareQuary = (req, res, next)=>{ 
    console.log(`your middleware is round sucessfully`);
    req.body.query = {...req.body.query, isQuary : true};
    next();
}



export {dataPrint , middlewareQuary}