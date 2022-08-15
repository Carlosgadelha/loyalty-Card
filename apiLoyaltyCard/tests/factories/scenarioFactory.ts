import { prisma } from "../../src/config/database.js";

export async function deleteAll(){
    await prisma.$transaction([
        prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE cards RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE businesses RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE clients RESTART IDENTITY CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE promotions RESTART IDENTITY CASCADE`
    ]);
}
