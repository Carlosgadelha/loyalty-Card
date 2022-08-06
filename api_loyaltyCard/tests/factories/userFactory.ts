import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database";
import { CreateUserTestData } from "../../src/services/userServices";

export async function createUser() {

    const user: CreateUserTestData = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        code: faker.random.alphaNumeric(4)
    }

    return await prisma.user.create({
        data: user
    })
}