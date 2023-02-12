import { Request, Response } from "express";
import * as service from "../services/profileService";

export const GetProfile = async (req: Request, res: Response) => {
  const access_token = req.body.access_token;
  return await service.GetProfileService(access_token);
};
