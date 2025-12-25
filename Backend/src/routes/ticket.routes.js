import express from "express"
import { createTicketController } from "../controller/ticket.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"



const router = express.Router()



router.post("/ticket",
    authMiddleware,
    createTicketController
)

export default router