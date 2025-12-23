import userModel from "../models/user.model.js"




export async function createUser(data){
    const {username, email,password} = data

    const user = userModel.create({
        username,
        email,
        password
    })
    return user
}


export async function findAllUser(query){
    const {username, email,password} = query

    const user = userModel.find({
        username,
        email,
        password
    })
    return user
}



export async function findOneUser(query){
    const {username, email,password} = query

    const user = userModel.findOne({
        username,
        email,
        password
    })
    return user
}
