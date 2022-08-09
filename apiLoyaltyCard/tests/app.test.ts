import supertest from "supertest";
import app from "../src/app.js";
import { deleteAll } from "./factories/scenarioFactory.js";
import user from "./factories/userFactory.js";

const agent = supertest(app)

beforeEach(async () => {
    await deleteAll()
})

describe("User", () => {
    it("should asnwer with status 201 when a new user", async () => {

        const userTest = user();
        
        const result = await agent.post("/signup").send(userTest);
        const status = result.status

        expect(status).toEqual(201);
    })

    it("should answer with status 422 when user are invalid", async () =>{
        const userTest = user();
        
        const result = await agent.post("/signup").send({ ...userTest, name: ""});
        const status = result.status

        expect(status).toEqual(400);
    })

    it("given a valid user it should return 200", async () => {
        const userTest = user();
        const login = { email: userTest.email, password: userTest.password };
        

        await agent.post("/signup").send(userTest);
        const result = await agent.post("/signin").send(login);
        const status = result.status;
        const token = result.body.token;
        const code = result.body.code;

        expect(status).toEqual(200);
        expect(token).not.toBeNull();
        expect(code).toHaveLength(4);
        
    });


    it("given a invalid user it should return 404", async () => {
        const userTest = user();
        const login = { email: 'test@gmail.com', password: userTest.password };
        

        await agent.post("/signup").send(userTest);
        const result = await agent.post("/signin").send(login);
        const status = result.status;

        expect(status).toEqual(404);
        
    });

})

describe("Business", () => {

})

describe("Cards", () => {

})