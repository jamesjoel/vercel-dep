import express from 'express';
import {addCate, getAllCate, getCateById, updateCate, deleteCate, deteteAllCate} from '../controllers/CategoryController.js';

const routes = express.Router();

routes.get("/", getAllCate);
routes.get("/deleteall", deteteAllCate);
routes.get("/:id", getCateById);
routes.post("/", addCate);
routes.put("/:id", updateCate);
routes.delete("/:id", deleteCate);

export default routes;
