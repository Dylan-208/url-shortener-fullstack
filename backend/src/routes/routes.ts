import { Router } from "express";
import urlControllerFactory from "../controllers/factory/UrlControllerFactory";

const router = Router();

router.post("/url-shortener", urlControllerFactory.create);

router.get("/:slug", urlControllerFactory.get);

export default router;
