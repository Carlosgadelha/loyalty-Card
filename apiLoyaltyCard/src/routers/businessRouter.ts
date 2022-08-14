import { Router } from "express";
import { createBusiness, findAll } from "../controllers/businessController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";

const businessRouter = Router();

businessRouter.post("/business", validateToken, createBusiness )
businessRouter.get("/business", validateToken , findAll)

export default businessRouter;