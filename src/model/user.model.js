import mongoose from 'mongoose';


const UserScema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Catagory"
    }
});

export const User = mongoose.model('user',UserScema)