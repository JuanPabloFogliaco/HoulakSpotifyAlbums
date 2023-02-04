import { Router } from "express";
import UserRoutes from "./userRoute";


const router = Router();
router.use("/users", UserRoutes);

/**
 * @typedef Error
 * @property {string} code
 */

/**
 * @typedef Response
 * @property {[integer]} code
 */

export default router;