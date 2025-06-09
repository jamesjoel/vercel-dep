import express from 'express';
import {addPro, getAllPro, getProById, updatePro, deletePro} from '../controllers/ProductController.js';

const routes = express.Router();

routes.get("/", getAllPro);
routes.get("/:id", getProById);
routes.post("/", addPro);
routes.put("/:id", updatePro);
routes.delete("/:id", deletePro);

export default routes;
