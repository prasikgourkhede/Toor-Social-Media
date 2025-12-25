import jwt from "jsonwebtoken"
import config from "../config/config.js"
import { findOneUser } from "../dao/auth.dao.js"




export async function authMiddleware(req,res){
    const token = req.cookie.token

    if(!token){
        return res.status(400).json({
            message: "Unauthorized access, please login frist"
        })
    }
    try{
        const decoded = jwt.verify(token, config.JWT_SECRET_KEY)
        const user = await findOneUser({_id:decoded._id})
        req.user = user
        next()
    }catch(err){
        return res.status(401).json({
            message: "Invalid token , please login again"
        })
    }
}