import { prisma } from "../config/database.js";
import { CreatePromotionData, UpdatePromotionData } from "../services/promotionsServices.js";

async function insert(promotion: CreatePromotionData) {
    await prisma.promotions.create({
        data: promotion
    });
}

async function findById(id: number) {

    return await prisma.promotions.findUnique({
        where: {
            id
        }
    });

}

async function update(promotion: UpdatePromotionData) {
    await prisma.promotions.update({
        where: {
            id: promotion.id
        },
        data: promotion
    });
}

async function findAll(id: number) {

    return await prisma.promotions.findMany({
        where: {
            businessId: id
        }
    });  
}


export default {
    insert,
    findById,
    update,
    findAll
    
}