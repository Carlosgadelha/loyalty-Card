import { Card } from "@prisma/client";
import cardsRepository from "../repositories/cardsRepository.js";
import clientsServices from "./clientsServices.js";
import promotionsServices from "./promotionsServices.js";
import userServices from "./userServices.js";

export type CreateCardData = Omit<Card, "id"|"createdAt"|"updatedAt">;
export  type UpdateCardData = Omit<Card, "createdAt"|"updatedAt">;

async function insert(card: CreateCardData) {
    return await cardsRepository.insert(card);
}

async function findById(id: number) {
    const card = await cardsRepository.findById(id);
    if(!card) throw { type: "not_found"};
    return card;
}

async function update(card: UpdateCardData) {

    const {pointsNeeded} = await promotionsServices.findById(card.promotionId);
    if( card.points > pointsNeeded) throw { type: "conflict"};

    return await cardsRepository.update(card);
}

async function findByClientId(clientId: number, promotionId: number) {
    return await cardsRepository.findByClientId(clientId, promotionId);
}

async function findAll(id: number) {
    return await cardsRepository.findAll(id);
}

async function addPointsCard(code: string, promotionId: number) {

    let points = 0;
    let newCard = {};
    let clientId = null;

    const user = await userServices.findByCode(code);
    console.log({user});
    
    const { businessId } = await promotionsServices.findById(promotionId);
    const client = await clientsServices.findByUserIdAndBusinessId(user.id, businessId);
    clientId = client?.id;

    console.log({clientId, businessId});
    
    
    if(!client) {
        await clientsServices.insert({userId: user.id, businessId});
        const {id} = await clientsServices.findByUserIdAndBusinessId(user.id, businessId);
        clientId = id;
    }

    const card = await findByClientId(clientId, promotionId);

    if(!card){
        await insert({clientId, points: 1, promotionId});
        newCard = await findByClientId(clientId, promotionId);
    }else {

        points = card.points + 1;
        await update({id: card.id, points, promotionId, clientId});
    }

    return card? {...card, points}: newCard;
}

export default {
    findById,
    addPointsCard,
    findAll
}