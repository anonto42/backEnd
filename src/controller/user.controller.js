
const userPut = (req, res) =>{
    const {
        email
    } = req.body
    if (!email) return new Error
    res.json({
        message : `Hello from the user router with email ${email}`
    })
}


const userGet = ( req , res ) => {
    const {userData , email} = req.body
    
    if(!email == "anontom90@gmail.com") return new Error ;

    res.json({
        message : `your love a motherFucker girl who don't love you she is so ${userData} `
    })
}


export {userPut, userGet}