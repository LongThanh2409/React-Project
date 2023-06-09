import express from "express";
import { create, get, getAll, getSearch, remove, update } from "../controllers/product.js";
const router = express.Router();
router.get("/products", getAll);
router.get("/products/:name/:id", get);
router.get("/productss/search", getSearch)
router.post("/products/", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);
export default router;
