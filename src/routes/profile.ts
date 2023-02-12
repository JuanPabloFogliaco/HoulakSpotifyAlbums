import { Request, Response, Router } from "express";
import * as profileController from "../controllers/profileController";

const profileRoutes = Router();

profileRoutes.post("/", async (req: Request, res: Response) => {
  const results = await profileController.GetProfile(req, res);
  return res.status(200).send(results);
});

export default profileRoutes;