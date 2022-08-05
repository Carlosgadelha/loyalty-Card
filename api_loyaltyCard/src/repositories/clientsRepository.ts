import { prisma } from "../config/database.js";
import { CreateClientData } from "../services/clientsServices.js";

async function insert(client: CreateClientData) {
    await prisma.client.create({
        data: client
    });
}

async function findById(id: number) {

    return await prisma.client.findUnique({
        where: {
            id
        },
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                }
            }
        }
    });

}

async function findByUserIdAndBusinessId(userId: number, businessId: number) {
    
    const result = await prisma.client.findMany({
        where: {
            userId,
            businessId
        }
    });  

    return result[0];
}

async function findAll(id: number) {

    return await prisma.client.findMany({
        where: {
            businessId: id
        },
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                }
            }
        }
    });  
}

export default {
    insert,
    findById,
    findByUserIdAndBusinessId,
    findAll
    
}