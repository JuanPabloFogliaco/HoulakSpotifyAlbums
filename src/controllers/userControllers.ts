import { Request } from "express";
import * as service from "../services/userService";

export const GetAllUsers = async (req: Request) => {
  return await service.GetAllUsersService();
};
