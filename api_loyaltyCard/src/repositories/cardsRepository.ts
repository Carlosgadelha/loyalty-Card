import { prisma } from "../config/database.js";
import { CreateCardData, UpdateCardData } from "../services/cardsServices.js";

async function insert(card: CreateCardData) {
    await prisma.card.create({
        data: card
    });
}

async function findById(id: number) {

    return await prisma.card.findUnique({
        where: {
            id
        }
    });

}

async function findByClientId(clientId: number, promotionId: number) {
    
    const result =  await prisma.card.findMany({
        where: {
            clientId,
            promotionId

        }
    });
    return result[0];  
}

async function update(card: UpdateCardData) {
    await prisma.card.update({
        where: {
            id: card.id
        },
        data: card
    });
}

async function findAll(id: number) {

    return await prisma.card.findMany({
        where: {
            clientId: id
        }
    });  
}

export default {
    insert,
    findById,
    findByClientId,
    update,
    findAll
    
}