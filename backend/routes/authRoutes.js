import expresss from "express";
import { login, logout, signup } from "../controllers/authController";

const router = expresss.Router();

router.get("/login", login);

router.get("/signup", signup);

router.get("/logout", logout);

export default router;
