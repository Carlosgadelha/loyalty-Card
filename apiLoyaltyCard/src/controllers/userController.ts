import { Request, Response } from "express";
import userServices, { CreateUserData, UserData } from "../services/userServices.js";


export async function createUser(req: Request, res: Response) {

    const {name, email, password} = req.body;

    await userServices.insert({name, email, password} as UserData);
    return res.sendStatus(201);
    
}

export async function login(req: Request, res: Response) {

    const user = await userServices.findByEmailAndPassword(req.body.email, req.body.password);
        
    return res.send(user);
}
