
const dataPrint =(req,res,next)=>{
    console.log(`your middleware is round sucessfully`);
    next();
}



export {dataPrint}