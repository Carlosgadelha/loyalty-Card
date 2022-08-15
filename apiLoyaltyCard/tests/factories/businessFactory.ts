import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database";
import { CreateBusinessData } from "../../src/services/businessServices";
import { createUser } from "./userFactory";
import supertest from "supertest";
import app from "../../src/app";

const agent = supertest(app);

export async function createBusiness() {

    const business: CreateBusinessData = {
        name: faker.name.findName(),
        userId: parseInt(faker.random.numeric())
    }

    const user = await createUser();
    const login = { email: user.email, password: user.password };

    const resultLogin = await agent.post("/signin").send(login);
    
    const result = await prisma.business.create({
        data: {...business, userId: user.id}
    })

    return {...result, token: resultLogin.body.token};
}