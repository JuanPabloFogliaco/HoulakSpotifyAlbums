import { Request, Response, Router } from "express";
import * as usersController from "../controllers/userControllers";

const UserRoutes = Router();

UserRoutes.get("/", async (req: Request, res: Response) => {
  const results = await usersController.GetAllUsers(req);
  return res.status(200).send(results);
});

export default UserRoutes;