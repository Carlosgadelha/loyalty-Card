import { jest } from "@jest/globals"
import userRepository from "../../src/repositories/userRepository"
import userServices from "../../src/services/userServices"
import bcrypt from "bcrypt";

jest.mock("../../src/repositories/userRepository.js")

describe("UserService test suite", () => {

    it("Create user", async () => {
        jest.spyOn(userRepository, "insert")
            .mockImplementation((): any => {
                return null
        })

        await userServices.insert({
            name: "test",
            email: "test@gmail.com",
            password: "testpassword",
        })

        expect(userRepository.insert).toHaveBeenCalled()
    })

    it("Login", async () => {
        jest.spyOn(userRepository, "findByEmail")
            .mockImplementation((): any => {
                return { 
                    id: 1,
                    password: bcrypt.hashSync('testpassword', 10),
                    code: "123",
                    name: "test"
                }
           })

        // jest.spyOn(jwt, "findByEmailAndPassword")
        const result = await userServices.findByEmailAndPassword( "test@gmail.com", "testpassword")

        expect(result.token).toBeDefined()
        expect(result.code).toBeDefined()
        expect(result.name).toBeDefined()
    })

})