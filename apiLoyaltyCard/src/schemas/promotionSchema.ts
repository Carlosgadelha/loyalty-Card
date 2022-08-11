import Joi from "joi";
import { CreatePromotionData } from "../services/promotionsServices.js";


export const promotionSchema = Joi.object<CreatePromotionData>({
    name: Joi.string().required().min(1),
    discount: Joi.number().required(),
    pointsNeeded: Joi.number().required(),
    businessId: Joi.number().required(),

});
