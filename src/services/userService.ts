import User from "../models/users"

export const GetAllUsersService = async () => {
  return await User.findAll()
}
