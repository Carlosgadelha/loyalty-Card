import { Router } from "express";
import { createBusiness, findAll } from "../controllers/businessController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { businessSchema } from "../schemas/businessSchema.js";

const businessRouter = Router();

businessRouter.post("/business", validateToken, validateSchemaMiddleware(businessSchema), createBusiness )
businessRouter.get("/business", validateToken , findAll)

export default businessRouter;