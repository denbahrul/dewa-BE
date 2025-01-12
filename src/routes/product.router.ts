import { Router } from "express";
import upload from "../middlewares/upload-file";
import productControllers from "../controllers/product.controllers";

export const Product = Router();

Product.post("/", upload.single("imageUrl"), productControllers.create);
Product.get("/", productControllers.findAll);
Product.get("/:id", productControllers.findById);
Product.delete("/delete/:id", productControllers.delete);
