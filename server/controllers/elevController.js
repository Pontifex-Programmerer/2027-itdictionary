// Kontroller: tar imot forespørsler, spør modellen og svarer med JSON.
import * as Elev from "../models/elev.js";
import { vurderingPdf } from "../views/vurderingPdf.js";
import { portFor } from "../nettsider.js";

const oversikt = ({ mappe, navn, sum, tapt, ikkeVurdert, status, karakter }) =>
  ({ mappe, navn, sum, tapt, ikkeVurdert, status, karakter });

export async function liste(req, res) {
  res.json((await Elev.alle()).map(oversikt));
}

export async function vis(req, res) {
  const elev = await Elev.finn(req.params.mappe);
  if (!elev) return res.status(404).json({ feil: "Fant ikke eleven" });
  res.json(elev);
}

export async function pdf(req, res) {
  const elev = await Elev.finn(req.params.mappe);
  if (!elev) return res.status(404).json({ feil: "Fant ikke eleven" });
  const filnavn = `${elev.mappe}_IT_Dictionary_vurdering.pdf`;
  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(filnavn)}`,
  });
  vurderingPdf(elev, res);
}

export async function nettside(req, res) {
  const elev = await Elev.finn(req.params.mappe);
  const port = elev && await portFor(elev.prosjekt);
  if (!port) return res.status(404).json({ feil: "Fant ikke nettsiden til eleven" });
  const sti = elev.forside.split("/").map(encodeURIComponent).join("/");
  res.redirect(`http://127.0.0.1:${port}/${sti}`);
}

export async function lagre(req, res) {
  try {
    const elev = await Elev.lagreVurdering(req.params.mappe, req.body);
    if (!elev) return res.status(404).json({ feil: "Fant ikke eleven" });
    res.json(elev);
  } catch (feil) {
    if (feil instanceof Elev.Valideringsfeil) return res.status(400).json({ feil: feil.message });
    throw feil;
  }
}
