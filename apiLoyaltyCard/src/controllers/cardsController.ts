import { Request, Response } from "express";
import cardsServices from "../services/cardsServices.js";


export async function addPointsCard(req: Request, res: Response) {
    const promotionId = parseInt(req.params.promotionId);
    const { code } = req.body;
    const card = await cardsServices.addPointsCard(code, promotionId);
    return res.send(card);
}

export async function getCard(req: Request, res: Response){

    const id = parseInt(req.params.id);
    const card = await cardsServices.findById(id);
    return res.send(card);

}

export async function getCards(req: Request, res: Response){

    const userId = parseInt(res.locals.userId);
    const cards = await cardsServices.findAll(userId);
    return res.send(cards);

}
