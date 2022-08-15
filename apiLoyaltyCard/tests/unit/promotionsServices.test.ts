import { jest } from "@jest/globals"
import businessServices from "../../src/services/businessServices.js";
import promotionsRepository from "../../src/repositories/promotionsRepository.js";
import promotionsServices from "../../src/services/promotionsServices.js";

jest.mock("../../src/repositories/promotionsRepository.js")
jest.mock("../../src/services/businessServices.js")

describe("PromotionsService test suite", () => {

    it("Create Promotion", async () => {
        const promotion = {
            name: "Promotion 1",
            discount: 100,
            pointsNeeded: 10,
            businessId: 1
        }
        jest.spyOn(businessServices, "findById")
            .mockImplementation((): any => {
                return {
                    id: 1
                }
        })

        jest.spyOn(promotionsRepository,"insert")
            .mockImplementation((): any => {
                return {
                    id: 1
                }
            })

        const result: any = await promotionsServices.insert(promotion)
        expect(result.id).toBeDefined()
    })

})