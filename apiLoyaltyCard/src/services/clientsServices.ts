import { Client } from "@prisma/client";
import clientsRepository from "../repositories/clientsRepository.js";

export type CreateClientData = Omit<Client, "id"|"createdAt"|"updatedAt">;

async function insert(client: CreateClientData) {
    await clientsRepository.insert(client);
}

async function findById(id: number) {
    return await clientsRepository.findById(id);
}
async function findByUserIdAndBusinessId(userId: number, businessId: number){
    return await clientsRepository.findByUserIdAndBusinessId(userId, businessId);
}

async function findAll(id: number) {
    return await clientsRepository.findAll(id);
}

export default {
    insert,
    findById,
    findAll,
    findByUserIdAndBusinessId
}