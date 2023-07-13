import express from "express";
import { getAllUser, login } from "../controllers/user-controllers";

const router = express.Router();

router.get("/", getAllUser);
router.post("/login", login);
export default router;
