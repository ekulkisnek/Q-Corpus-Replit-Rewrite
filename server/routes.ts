import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  // Simple greeting API endpoint
  app.get("/api/greeting", (_req, res) => {
    res.json({
      message: "Hello from the backend!",
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
