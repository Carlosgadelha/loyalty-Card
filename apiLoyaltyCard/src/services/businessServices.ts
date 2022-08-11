import { Business } from "@prisma/client";

import businessRepository from "../repositories/businessRepository.js";
import promotionsRepository from "../repositories/promotionsRepository.js";
import { CreatePromotionData } from "./promotionsServices.js";

export type CreateBusinessData = Omit<Business, "id"|"createdAt"|"updatedAt">;
export type UpdateBusinessData = Omit<Business, "createdAt"|"updatedAt">

async function insert(business: CreateBusinessData) {
    await businessRepository.insert(business);
}

async function createPromotion(promotion: CreatePromotionData) {
    return await promotionsRepository.insert(promotion);
}



export default {
    insert,
    createPromotion
}