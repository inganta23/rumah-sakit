import express from "express";
import {
  createDataIbuHandler,
  getAllDataIbuHandler,
  updateDataIbuHandler,
  deleteDataIbuHandler,
  getOneDataIbuHandler,
} from "../controllers/ibu.controller.js";

const router = express.Router();

router.route("/").post(createDataIbuHandler).get(getAllDataIbuHandler);
router
  .route("/:ibuId")
  .put(updateDataIbuHandler)
  .delete(deleteDataIbuHandler)
  .get(getOneDataIbuHandler);

export default router;
