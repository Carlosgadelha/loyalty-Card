import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database";
import { CreateUserData, CreateUserTestData } from "../../src/services/userServices";

export default function user(): CreateUserTestData{
    const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return user;
}

export async function createUser() {

    const user: CreateUserData = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        code: faker.random.alphaNumeric(4),
        isAdmin: false
    }

    return await prisma.user.create({
        data: user
    })
}