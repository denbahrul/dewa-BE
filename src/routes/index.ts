import { Router } from "express";
import { UserRoute } from "./user-router";
import { WeddingInspirationRoute } from "./wedding-inspiration.routers";
import { Product } from "./product.router";
import { TentPackageRoute } from "./tend-package.router";

export const router = Router();

router.use("/user", UserRoute);
router.use("/wedding-inspiration", WeddingInspirationRoute);
router.use("/product", Product);
router.use("/tent-package", TentPackageRoute);
