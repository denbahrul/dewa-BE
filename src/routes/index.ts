import { Router } from "express";
import { UserRoute } from "./user-router";
import { WeddingInspirationRoute } from "./wedding-inspiration.routers";
import { TentStageRoute } from "./tend-stage-router";
import { TentPackageRoute } from "./tend-package-router";
import { SoundSystemRoute } from "./sound-system";

export const router = Router();

router.use("/user", UserRoute);
router.use("/wedding-inspiration", WeddingInspirationRoute);
router.use("/tend-and-stage", TentStageRoute);
router.use("/tent-package", TentPackageRoute);
router.use("/sound-system", SoundSystemRoute);
