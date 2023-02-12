import { Request, Response, Router } from "express";
import * as authController from "../controllers/authControllers";

const authRoutes = Router();

authRoutes.get("/login", async (req: Request, res: Response) => {
  const results = await authController.Login(req, res);
  return res.status(200).send(results);
});

export default authRoutes;