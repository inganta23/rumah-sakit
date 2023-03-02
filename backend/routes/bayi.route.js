import express from "express";
import {
  createDataBayiHandler,
  deleteDataBayiHandler,
  getAllDataBayiHandler,
  updateDataBayiHandler,
} from "../controllers/bayi.controller.js";

const router = express.Router();

router.route("/").post(createDataBayiHandler).get(getAllDataBayiHandler);

router
  .route("/:bayiId")
  .put(updateDataBayiHandler)
  .delete(deleteDataBayiHandler);

export default router;
