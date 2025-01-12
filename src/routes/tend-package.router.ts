import { Router } from "express";
import upload from "../middlewares/upload-file";
import tentPackageControllers from "../controllers/tent-package.controllers";

export const TentPackageRoute = Router();

TentPackageRoute.post("/", upload.single("imageUrl"), tentPackageControllers.create);
TentPackageRoute.get("/", tentPackageControllers.findAll);
TentPackageRoute.get("/:id", tentPackageControllers.findById);
TentPackageRoute.delete("/delete/:id", tentPackageControllers.delete);
