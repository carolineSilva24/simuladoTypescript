import LeilaoController from "../controllers/LeilaoController";
import { Router } from "express";

const LeilaoRouter = Router();

LeilaoRouter.get('/users', LeilaoController.listUsers)

LeilaoRouter.post('/user', LeilaoController.createUser);

LeilaoRouter.put('/user', LeilaoController.updateUser);

LeilaoRouter.delete('/user', LeilaoController.deleteUser);

export default LeilaoRouter;