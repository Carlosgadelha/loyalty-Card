import { Router } from "express";
import { addPointsCard, getCard, getCards } from "../controllers/cardsController.js";


const cardsRouter = Router();

cardsRouter.post("/addPoints", addPointsCard)
cardsRouter.get("/cards/:id", getCard)
cardsRouter.get("/cards", getCards)

export default cardsRouter;