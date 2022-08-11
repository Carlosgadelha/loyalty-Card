import { Promotions } from "@prisma/client";

import promotionsRepository from "../repositories/promotionsRepository.js";

export type CreatePromotionData = Omit<Promotions, "id"|"createdAt"|"updatedAt">;
export type UpdatePromotionData = Omit<Promotions, "createAt"|"updatedAt">;

async function insert(promotion: CreatePromotionData) {
    await promotionsRepository.insert(promotion);
}

async function findById(id: number) {
    
    const promotion = await promotionsRepository.findById(id);
    if(!promotion) throw { type: "not_found"};

    return promotion;
}

export default {
    insert,
    findById
}