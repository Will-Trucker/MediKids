import express from "express";
import { create_doctor, create_patient } from "../controllers/admin.js";

// CREATING ADMIN ROUTER
const router_admin = express.Router();

// [POST] ROUTES
router_admin.route("/new_doctor").post(create_doctor);
router_admin.route("/new_patient").post(create_patient);

export default router_admin;
