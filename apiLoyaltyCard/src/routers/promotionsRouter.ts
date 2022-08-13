import { Router } from "express";
import { createPromotion, findAll } from "../controllers/promotionsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { promotionSchema } from "../schemas/promotionSchema.js";

const promotionsRouter = Router();


promotionsRouter.post("/promotion",validateSchemaMiddleware(promotionSchema), createPromotion )
promotionsRouter.get("/promotions", validateToken , findAll)

export default promotionsRouter;