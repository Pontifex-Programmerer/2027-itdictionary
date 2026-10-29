// Starter nettstedet: API under /api, elevenes innleveringer under /filer,
// og React-klienten (via Vite i utvikling, fra dist/ i produksjon).
// npm run dev   → utvikling med hot reload
// npm run build && npm start → bygget versjon
import express from "express";
import { join } from "node:path";
import api from "./routes/api.js";

const ROOT = join(import.meta.dirname, "..");
const PRODUKSJON = process.argv.includes("--production");
const PORT = Number(process.env.PORT ?? 8080);

const app = express();
app.use(express.json());
app.use("/api", api);

// Lenkene i notatene peker til elevenes prosjektmapper i repoet.
app.use("/filer", express.static(ROOT, { dotfiles: "deny", index: false, fallthrough: false }));

if (PRODUKSJON) {
  app.use(express.static(join(ROOT, "dist")));
  app.get("*", (req, res) => res.sendFile(join(ROOT, "dist", "index.html")));
} else {
  const { createServer } = await import("vite");
  const vite = await createServer({
    configFile: join(ROOT, "vite.config.js"),
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
}

app.use((feil, req, res, next) => {
  if (feil.status && feil.status < 500) return res.status(feil.status).end();
  console.error(feil);
  res.status(500).json({ feil: "Noe gikk galt på serveren" });
});

app.listen(PORT, "127.0.0.1", () => console.log(`IT Dictionary: http://localhost:${PORT}`));
