import { Router } from "express";
import { createBusiness, createPromotion } from "../controllers/businessController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { businessSchema } from "../schemas/businessSchema.js";
import { promotionSchema } from "../schemas/promotionSchema.js";

const businessRouter = Router();

businessRouter.post("/business", validateSchemaMiddleware(businessSchema), createBusiness )
businessRouter.post("/promotion",validateSchemaMiddleware(promotionSchema), createPromotion )

export default businessRouter;