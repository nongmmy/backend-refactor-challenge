import express, { Request, Response } from "express";

import { UserController } from "../controller/user.controller";
import { RegisterUsecase } from "../../usecases/register.usecase";
import { UserRepository } from "../repositories/user.repository";

const router = express.Router();

const userRepository = new UserRepository()
const registerUsecase = new RegisterUsecase(userRepository)
const userController = new UserController(registerUsecase)

router.post("/register", userController.register);

export default router;
