import { Business } from "@prisma/client";

import businessRepository from "../repositories/businessRepository.js";
import promotionsRepository from "../repositories/promotionsRepository.js";
import { CreatePromotionData } from "./promotionsServices.js";
import userServices from "./userServices.js";

export type CreateBusinessData = Omit<Business, "id"|"createdAt"|"updatedAt">;
export type UpdateBusinessData = Omit<Business, "createdAt"|"updatedAt">

async function insert(business: CreateBusinessData) {
    const user = await userServices.findById(business.userId)
    if(!user) throw { type: "not_found"};
    await businessRepository.insert(business);
}

async function findById(id: number) {
    const business = await businessRepository.findById(id);
    if(!business) throw { type: "not_found"};
    return business;
}

export default {
    insert,
    findById
}