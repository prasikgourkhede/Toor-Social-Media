import express from "express"
import { registerUserController } from "../controller/auth.controller.js";
import { registerValidator } from "../middleware/validate.middleware.js";

const router = express.Router();


router.post("/register",
    registerValidator,
    registerUserController
)

export default router