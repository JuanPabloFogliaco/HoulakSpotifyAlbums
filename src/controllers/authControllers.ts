import { Request, Response } from "express";
import * as service from "../services/authService";

export const Login = async (req: Request, res: Response) => {
  return await service.LoginService();
};
