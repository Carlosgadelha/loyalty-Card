import { Request, Response } from "express";
import promotionsServices, { CreatePromotionData } from "../services/promotionsServices.js";

export async function createPromotion(req: Request, res: Response) {

    const promotion: CreatePromotionData = req.body;

    await promotionsServices.insert(promotion);
    return res.sendStatus(201);
    
}

export async function findAll(req: Request, res: Response) {
        const userId = parseInt(res.locals.userId);
        const promotions = await promotionsServices.findAll(userId);
        return res.send(promotions);
}