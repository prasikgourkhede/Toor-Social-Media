import { createTicket } from "../dao/tiket.dao.js"





export async function createTicketController(req,res){
    const {from,to,trainName,userName,age,gender} = req.body

    const ticket = await createTicket({
        from,
        to,
        trainName,
        userName,
        age,
        gender
    })
    return res.status(201).json({
        message: "Tiket created successfully",
        ticket: ticket
    })
}

export async function findOneTicketController(req,res){
    const {from,to,trainName,userName,age,gender} = req.body

    const ticket = await findOneTicket({
        from,
        to,
        trainName,
        userName,
        age,
        gender
    })
    return res.status(200).json({
        message : "ticket find successfully",
        ticket: ticket
    })
}