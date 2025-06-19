import express from "express";
import {
  addPro,
  getAllPro,
  getProById,
  updatePro,
  deletePro,
  getAllProByCategoryName,
  deleteAllProduct
} from "../controllers/ProductController.js";

const routes = express.Router();

routes.get("/", getAllPro);
routes.get("/cagegory/:name", getAllProByCategoryName);
routes.get("/deleteall", deleteAllProduct);
routes.get("/:id", getProById);
routes.post("/", addPro);
routes.put("/:id", updatePro);
routes.delete("/:id", deletePro);

export default routes;
