import express from 'express';
import {addCate, getAllCate, getCateById, updateCate, deleteCate} from '../controllers/CategoryController.js';

const routes = express.Router();

routes.get("/", getAllCate);
routes.get("/:id", getCateById);
routes.post("/", addCate);
routes.put("/:id", updateCate);
routes.delete("/:id", deleteCate);

export default routes;
