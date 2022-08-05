import { prisma } from "../config/database.js";
import { CreateUserData } from "../services/userServices.js";

async function insert(user: CreateUserData) {
    await prisma.user.create({
        data: user
    });
}

async function findById(id: number) {

    return await prisma.user.findUnique({
        where: {
            id
        }
    });

}

async function findByEmail(email: string) {

    return await prisma.user.findUnique({
        where: {
            email
        }
    });

}

async function findByCode(code: string) {

    return await prisma.user.findUnique({
        where: {
            code
        }
    });

}

export default {
    insert,
    findById,
    findByEmail,
    findByCode
}