import mongoose from "mongoose"



const tiketSchema = new mongoose.Schema({
    from:{
        type: String,
        trim: true,
        required: true
    },
    to:{
        type: String,
        trim: true,
        required: true
    },
    trainName:{
        type: String,
        trim: true,
        required: true
    },
    userName: {
        type: String,
        trim: true,
        required: true
    },
    age:{
        type: Number,
        trim: true,
        required: true
    },
    gender:{
        type: String,
        trim: true,
        required: true
    }
}, 
{
    timestamp: true
})

const ticketModel = mongoose.model("Tiket", tiketSchema);

export default ticketModel