import express from "express";
import { createServer as createViteServer } from "vite";
import { WebSocketServer } from "ws";
import { createServer } from "http";
import Database from "better-sqlite3";

const db = new Database("stats.db");
db.exec("CREATE TABLE IF NOT EXISTS stats (key TEXT PRIMARY KEY, value INTEGER)");
const getStat = db.prepare("SELECT value FROM stats WHERE key = ?");
const setStat = db.prepare("INSERT OR REPLACE INTO stats (key, value) VALUES (?, ?)");

// Initialize total views if not exists
if (!getStat.get("total_views")) {
  setStat.run("total_views", 0);
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  const httpServer = createServer(app);

  // API routes
  app.get("/api/stats", (req, res) => {
    const totalViews = (getStat.get("total_views") as any)?.value || 0;
    res.json({ live: viewerCount, total: totalViews });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // WebSocket setup
  const wss = new WebSocketServer({ server: httpServer });
  let viewerCount = 0;

  wss.on("connection", (ws) => {
    viewerCount++;
    
    // Increment total views
    const currentTotal = (getStat.get("total_views") as any)?.value || 0;
    const newTotal = currentTotal + 1;
    setStat.run("total_views", newTotal);

    console.log(`New viewer connected. Live: ${viewerCount}, Total: ${newTotal}`);
    
    // Send immediate update to the new client
    ws.send(JSON.stringify({ 
      type: "VIEWER_STATS", 
      live: viewerCount,
      total: newTotal
    }));

    // Broadcast counts to all other clients
    broadcastCounts();

    ws.on("close", () => {
      viewerCount = Math.max(0, viewerCount - 1);
      console.log(`Viewer disconnected. Live: ${viewerCount}`);
      broadcastCounts();
    });
  });

  function broadcastCounts() {
    const totalViews = (getStat.get("total_views") as any)?.value || 0;
    const data = JSON.stringify({ 
      type: "VIEWER_STATS", 
      live: viewerCount,
      total: totalViews
    });
    wss.clients.forEach((client) => {
      if (client.readyState === 1) { // OPEN
        client.send(data);
      }
    });
  }

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("index.html", { root: "dist" });
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
