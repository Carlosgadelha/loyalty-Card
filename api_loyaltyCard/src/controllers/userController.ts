import { Request, Response } from "express";
import userServices, { CreateUserData } from "../services/userServices.js";


export async function createUser(req: Request, res: Response) {

    const user = req.body as CreateUserData;

    await userServices.insert(user);
    return res.sendStatus(201);
    
}

export async function login(req: Request, res: Response) {

    const user = await userServices.findByEmailAndPassword(req.body.email, req.body.password);
        
    return res.send(user);
}
