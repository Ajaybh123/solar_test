import express from "express";
import { createServer } from "http";
import path from "path";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple API test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API Working ✅" });
});

/**
 * Production → Serve frontend
 */
if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve("dist/public");
  app.use(express.static(distPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
