import { Router } from "express";
import { UserRoute } from "./user-router";
import { WeddingRoute } from "./wedding-router";
import { TentStageRoute } from "./tend-stage-router";
import { TentPackageRoute } from "./tend-package-router";
import { SoundSystemRoute } from "./sound-system";

export const router = Router();

router.use("/user", UserRoute);
router.use("/wedding-inspiration", WeddingRoute);
router.use("/tend-and-stage", TentStageRoute);
router.use("/tent-package", TentPackageRoute);
router.use("/sound-system", SoundSystemRoute);
