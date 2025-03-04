import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

// import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);

// router.get("/authCheck", authCheck);

export default router;
//29:23
