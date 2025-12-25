import placeModel from "../models/places.model.js"




export async function createPlace(data){
    const {placeName, image, description} = data

    const place = placeModel.create({
        placeName,
        image,
        description
    })
    return place
}

export async function findOnePlace(query){
    const {placeName, image, description} = query

    const place = placeModel.findOne({
        placeName,
        image,
        description
    })
    return place
}

export async function findPlace(query){
    const {placeName, image, description} = query

    const place = placeModel.find({
        placeName,
        image,
        description
    })
    return place

}