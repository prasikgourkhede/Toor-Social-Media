import mongoose from "mongoose";




const placeSchema = new mongoose.Schema({
    placeName : {
        type: String,
        required : true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

const placeModel = mongoose.model("Place", placeSchema)


export default placeModel