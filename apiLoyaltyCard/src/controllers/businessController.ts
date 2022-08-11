import { Request, Response } from "express";
import businessServices, { CreateBusinessData } from "../services/businessServices.js";
import { CreatePromotionData } from "../services/promotionsServices.js";


export async function createBusiness(req: Request, res: Response) {

    const business: CreateBusinessData = req.body;

    await businessServices.insert(business);
    return res.sendStatus(201);
    
}

export async function createPromotion(req: Request, res: Response) {

    const promotion: CreatePromotionData = req.body;

    await businessServices.createPromotion(promotion);
    return res.sendStatus(201);
    

}