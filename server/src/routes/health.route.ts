import { Router } from "express";

export const healthRouter = Router();

/** GET /api/health — Server health check */
healthRouter.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        service: "cocktail-os-api",
        timestamp: new Date().toISOString(),
    });
});
