import { Router } from "express";
import weddingInspirationControllers from "../controllers/wedding-inspiration.controllers";
import upload from "../middlewares/upload-file";

export const WeddingInspirationRoute = Router();

WeddingInspirationRoute.get("/", weddingInspirationControllers.findAll);
WeddingInspirationRoute.post("/create", upload.single("imageUrl"), weddingInspirationControllers.create);
WeddingInspirationRoute.delete("/delete/:id", weddingInspirationControllers.delete);
