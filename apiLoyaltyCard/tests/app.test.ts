import supertest from "supertest";
import app from "../src/app.js";
import { deleteAll, createBusiness } from "./factories/scenarioFactory.js";
import user, { createUser } from "./factories/userFactory.js";

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
    it("should answer with status 201 when a new business", async () => {
        const user = await createUser();
        const business = {
            name: "test",
            userId: user.id
        }
        const result = await agent.post("/business").send(business);
        const status = result.status;

        expect(status).toEqual(201);
        
    })

    it("should answer with status 400 when business are invalid", async () =>{
        const user = await createUser();
        const business = {
            name: "",
            userId: user.id
        }
        const result = await agent.post("/business").send(business);
        const status = result.status;

        expect(status).toEqual(400);

    })

    it("should answer with status 404 when user not exist", async () =>{
        
        const business = {
            name: 'test',
            userId: 1
        }
        const result = await agent.post("/business").send(business);
        
        const status = result.status;

        expect(status).toEqual(404);

    })

    it("should answer with status 201 when a new promotion", async () => {
        const business = await createBusiness();
        const promotion = {
            name: "Promotion Test",
            discount: 10,
            pointsNeeded: 10,
            businessId: business.id
        }
        const result = await agent.post("/promotion").send(promotion);
        const status = result.status;

        expect(status).toEqual(201);
    })

    it("should answer with status 400 when promotion are invalid", async () =>{
        const business = await createBusiness();
        const promotion = {
            name: "",
            discount: 10,
            pointsNeeded: 10,
            businessId: business.id
        }
        const result = await agent.post("/promotion").send(promotion);
        const status = result.status;

        expect(status).toEqual(400);

    })

    it("should return status 404 when deal does not exist when creating new promotion", async () =>{
        
        const promotion = {
            name: 'test',
            discount: 10,
            pointsNeeded: 10,
            businessId: 1
        }
        const result = await agent.post("/promotion").send(promotion);
        const status = result.status;

        expect(status).toEqual(404);

    })
  
})

describe("Cards", () => {
    // it("should answer with status 200 when a add Points", async () => {

    //     const user = await createUser();
    //     const business = {
    //         name: "test",
    //         userId: user.id
    //     }
    //     const result = await agent.post("/business").send(business);
    //     const status = result.status;

    //     expect(status).toEqual(201);
    // })
})