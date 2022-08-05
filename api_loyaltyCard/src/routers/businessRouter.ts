import { Router } from "express";
import { createBusiness, createPromotion } from "../controllers/businessController.js";

const businessRouter = Router();

businessRouter.post("/business", createBusiness )
businessRouter.post("/promotion", createPromotion )


export default businessRouter;