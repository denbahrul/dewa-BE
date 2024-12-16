import { Router } from "express";
import weddingInspirationControllers from "../controllers/wedding-inspiration.controllers";

export const WeddingRoute = Router();

WeddingRoute.get("/", weddingInspirationControllers.findAll);
