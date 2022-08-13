import { Promotions } from "@prisma/client";

import promotionsRepository from "../repositories/promotionsRepository.js";
import businessServices from "./businessServices.js";

export type CreatePromotionData = Omit<Promotions, "id"|"createdAt"|"updatedAt">;
export type UpdatePromotionData = Omit<Promotions, "createAt"|"updatedAt">;

async function insert(promotion: CreatePromotionData) {
    const business = await businessServices.findById(promotion.businessId);
    if(!business) throw { type: "not_found"};
    return await promotionsRepository.insert(promotion);
}
async function findById(id: number) {
    
    const promotion = await promotionsRepository.findById(id);
    if(!promotion) throw { type: "not_found"};

    return promotion;
}

async function findAll(id: number) {
    
    const promotions = await promotionsRepository.findAll(id);
    if(!promotions) throw { type: "not_found"};

    return promotions;
}

export default {
    insert,
    findById,
    findAll
}