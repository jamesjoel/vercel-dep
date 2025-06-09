import express from 'express';
import ProductRoues from './ProductRoutes.js'
import CategoryRoutes from './CategoryRoutes.js'
const routes = express.Router();

routes.use("/api/v1/product", ProductRoues);
routes.use("/api/v1/category", CategoryRoutes);
export default routes;