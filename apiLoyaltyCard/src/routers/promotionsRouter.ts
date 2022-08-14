import { Router } from "express";
import { createPromotion, findAll } from "../controllers/promotionsController.js";
import { validateToken } from "../middlewares/validateToken.js";

const promotionsRouter = Router();


promotionsRouter.post("/promotion",validateToken, createPromotion )
promotionsRouter.get("/promotions", validateToken , findAll)

export default promotionsRouter;