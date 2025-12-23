import { createUser, findOneUser } from "../dao/auth.dao.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "../config/config.js"


export async function registerUserController(req,res){
    const {username, email, password} = req.body

    const isUserExist = await findOneUser({$or:
        [
            {username}, 
            {email}
        ]})
        if(isUserExist){
            return res.status(400).json({
                message: "user already exist"
            })
        }
        const hasPassword = await bcrypt.hash(password, 10);

        const users = await createUser({
            username,
            email,
            password:hasPassword
        })
        const token = jwt.sign({id:  users._id}, config.JWT_SECRET_KEY)
        res.cookie("token", token)
       res.status(201).json({
        message:"user created successfully",
        users: users
       })
}

export async function loginUserController(req,res){
    const {username, email, password} = req.body;
    const users = await findOneUser({or: [
        {username},
        {email}
    ]})
    if(!users){
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, users.password);
    if(!isPasswordValid){
         res.status(400).json({
            message: "Inavlid Credentials"
        })
    }
    const token = jwt.sign({id: users._id}, config.JWT_SECRET_KEY);
    res.cookie("token", token);
    res.status(200).json({
        message: "User login successfully"
    })
}