export const Async_Handler_Def = (fun) => {
    return ( req , res , next ) => {
        Promise.resolve(
            fun( req , res , next )
        ).catch((err)=>{
            next(err);
        });
    };
};

export const asyncHandler = (fn) => async ( req , res , next ) => {
    try {
        return await fn( req , res , next );
    } catch (error) {
        return res.status(error.code || 500)  .json({
            success : false,
            message : error.message
        });
    };
};