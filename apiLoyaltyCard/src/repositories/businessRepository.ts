import { prisma } from "../config/database.js";
import { CreateBusinessData } from "../services/businessServices.js";

async function insert(business: CreateBusinessData) {
    await prisma.business.create({
        data: business
    });
}

async function findById(id: number) {
    return await prisma.business.findUnique({
        where: {
            id
        }
    });
}

async function findAll(id: number) {
    return await prisma.business.findMany({
        where: {
            userId: id
        }
    });
}

export default {
    insert,
    findAll,
    findById
}