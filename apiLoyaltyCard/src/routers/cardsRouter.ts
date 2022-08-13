import { Router } from "express";
import { addPointsCard, getCard, getCards } from "../controllers/cardsController.js";
import { validateToken } from "../middlewares/validateToken.js";


const cardsRouter = Router();

cardsRouter.post("/addPoints/:promotionId", addPointsCard)
cardsRouter.get("/cards/:id", getCard)
cardsRouter.get("/cards", validateToken, getCards)

export default cardsRouter;