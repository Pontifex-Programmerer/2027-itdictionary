// Viser elevenes nettsider. Hver prosjektmappe får sin egen lille server på en
// ledig port, slik at rot-relative stier (/css/style.css) virker som i Live Server.
// Serverne startes første gang en side åpnes og lever til hovedserveren stopper.
import express from "express";
import { join, relative, isAbsolute } from "node:path";
import { existsSync } from "node:fs";

const ROOT = join(import.meta.dirname, "..");
const porter = new Map();

function mappeFor(prosjekt) {
  const mappe = join(ROOT, prosjekt);
  const rel = relative(ROOT, mappe);
  if (!prosjekt || rel.startsWith("..") || isAbsolute(rel) || !existsSync(mappe)) return null;
  return mappe;
}

export function portFor(prosjekt) {
  const mappe = mappeFor(prosjekt);
  if (!mappe) return Promise.resolve(null);
  if (!porter.has(mappe)) {
    porter.set(mappe, new Promise((ok, feil) => {
      const app = express();
      app.use(express.static(mappe, { dotfiles: "deny" }));
      const server = app.listen(0, "127.0.0.1", () => ok(server.address().port));
      server.on("error", (f) => { porter.delete(mappe); feil(f); });
    }));
  }
  return porter.get(mappe);
}
