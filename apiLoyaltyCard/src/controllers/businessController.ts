import { Request, Response } from "express";
import businessServices, { CreateBusinessData } from "../services/businessServices.js";


export async function createBusiness(req: Request, res: Response) {

    const business: CreateBusinessData = req.body;

    await businessServices.insert(business);
    return res.sendStatus(201);
    
}

export async function findAll(req: Request, res: Response) {
        const userId = parseInt(res.locals.userId);
        const businesses = await businessServices.findAll(userId);
        return res.send(businesses);
}