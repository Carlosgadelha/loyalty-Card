import { prisma } from "../config/database.js";
import { CreateBusinessData } from "../services/businessServices.js";

async function insert(business: CreateBusinessData) {
    await prisma.business.create({
        data: business
    });
}

export default {
    insert
}