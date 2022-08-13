import { Router } from "express";
import businessRouter from "./businessRouter.js";
import cardsRouter from "./cardsRouter.js";
import promotionsRouter from "./promotionsRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter)
router.use(businessRouter)
router.use(cardsRouter)
router.use(promotionsRouter)

export default router;