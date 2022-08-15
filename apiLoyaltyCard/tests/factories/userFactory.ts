import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database";
import bcrypt from "bcrypt";
import { CreateUserData, CreateUserTestData } from "../../src/services/userServices";

export default function user(): CreateUserTestData{
    const password = faker.internet.password();
    const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password,
        passwordConfirmation: password
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

    const result = await prisma.user.create({
        data: {...user, password: bcrypt.hashSync(user.password, 10)}
    })

    return {...result, password: user.password};
}