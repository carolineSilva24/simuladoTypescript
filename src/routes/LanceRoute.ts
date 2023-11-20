import LanceController from "../controllers/LanceController";
import { Router } from "express";

const LeilaoRouter = Router();

LeilaoRouter.get('/lances', LanceController.listUsers)

LeilaoRouter.post('/lance', LanceController.createLance);

LeilaoRouter.put('/lance', LanceController.updateUser);

LeilaoRouter.delete('/lance', LanceController.deleteUser);

export default LeilaoRouter;