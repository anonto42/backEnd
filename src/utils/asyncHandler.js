export const Async_Handler_Def = (fun) => {
    ( req , res , next ) => {
        Promise.resolve(
            fun( req , res , next )
        ).catch((err)=>{
            next(err);
        });
    };
};

export const asyncHandler = (fn) => async ( req , res , next ) => {
    try {
        await fn( req , res , next );
    } catch (error) {
        res.status(error.code || 500)  .json({
            success : false,
            message : error.message
        });
    };
};