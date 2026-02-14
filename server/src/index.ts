import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { healthRouter } from "./routes/health.route.js";

const app = express();
const PORT = process.env["PORT"] ?? 4560;

// --- Middleware ---
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
app.use("/api", healthRouter);

// --- Error Handler ---
app.use(
    (
        err: Error,
        _req: express.Request,
        res: express.Response,
        _next: express.NextFunction
    ) => {
        console.error("[Error]", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
);

// --- Start ---
app.listen(PORT, () => {
    console.log(`🍸 Cocktail OS API running on http://localhost:${PORT}`);
});
