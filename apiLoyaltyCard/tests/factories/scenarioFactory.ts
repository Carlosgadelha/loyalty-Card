import { prisma } from "../../src/config/database.js";
import { createUser } from "./userFactory.js";

export async function deleteAll(){
    await prisma.$transaction([
        prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE cards RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE businesses RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE clients RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE promotions RESTART IDENTITY CASCADE`
    ]);
}

export async function createBusiness(){
    const user = await createUser();
    
    const business = await prisma.business.create({
                        data: {
                            name: "Business Test",
                            userId: user.id
                        }
                    });

    return business;
}