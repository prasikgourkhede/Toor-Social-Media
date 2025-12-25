import userModel from "../models/user.model.js";






export async function createTicket(data){
    return await userModel.create(data)
}


export async function findTicket(query){
    return await userModel.find(query)
}


export async function findOneTicket(query){
    return await userModel.findOne(query)
}
