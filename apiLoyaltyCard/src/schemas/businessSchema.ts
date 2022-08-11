import Joi from "joi";
import { CreateBusinessData } from "../services/businessServices.js";

export const businessSchema = Joi.object<CreateBusinessData>({
    name: Joi.string().required().min(1),
    userId: Joi.number().required(),
});
