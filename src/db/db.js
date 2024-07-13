import mongoose, { connections } from "mongoose";
import { DB_NAME } from './../utils/const.js';



const connectDB = async () => {
    try {
        const DB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`MongoDB connected successfully to ${DB_NAME}`);
        console.log(`your MONGODB connected location in ${DB.connection.host} `);

        // console.log(' all about DB');
        // console.log(DB);
    } catch (error) {
        console.log(error);
    }
}


export default connectDB;


// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// })();