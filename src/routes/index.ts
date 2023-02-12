import { Router } from "express";
import authRoutes from "./authRoute";
import profileRoutes from "./profile";
import UserRoutes from "./userRoute";


const router = Router();
router.use("/users", UserRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
/**
 * @typedef Error
 * @property {string} code
 */

/**
 * @typedef Response
 * @property {[integer]} code
 */

export default router;