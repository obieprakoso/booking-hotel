import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyUser, createUser);
//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getAllUser);
export default router;
