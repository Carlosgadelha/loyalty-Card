import { Business } from "@prisma/client";

import businessRepository from "../repositories/businessRepository.js";
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

async function findAll(id: number) {
    const businesses = await businessRepository.findAll(id);
    if(!businesses) throw { type: "not_found"};
    return businesses;
}

export default {
    insert,
    findById,
    findAll
}