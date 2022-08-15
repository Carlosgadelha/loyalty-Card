import { prisma } from "../../src/config/database";
import { createBusiness } from "./businessFactory";
import { CreatePromotionData } from "../../src/services/promotionsServices";


export async function createPromotion() {

    const business = await createBusiness();

    const promotion: CreatePromotionData = {
        name: "Promotion 1",
        discount: 10,
        pointsNeeded: 10,
        businessId: business.id
    }

    const result: any = await prisma.promotions.create({
        data: promotion
    })
    
    
    return result;
}