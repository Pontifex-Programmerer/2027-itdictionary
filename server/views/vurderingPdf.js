// Visning: vurderingen som PDF til eleven. Tar bare med lærerens poeng,
// karakteren og tilbakemeldingen; Claudes forslag og notatene er utelatt.
import PDFDocument from "pdfkit";
import { RUBRIKK, MAKS, seksjonMaks } from "../../shared/rubrikk.js";

const MØRK = "#1d1d1f";
const DEMPET = "#5f6168";
const KANT = "#e2e0db";

export function vurderingPdf(elev, ut) {
  const doc = new PDFDocument({ size: "A4", margin: 48, info: { Title: `${elev.navn} – IT Dictionary` } });
  doc.pipe(ut);
  const venstre = doc.page.margins.left;
  const bredde = doc.page.width - venstre - doc.page.margins.right;
  const poengX = venstre + bredde - 60;

  function linje(y, farge = KANT) {
    doc.moveTo(venstre, y).lineTo(venstre + bredde, y).lineWidth(0.75).strokeColor(farge).stroke();
  }

  function sikrePlass(høyde) {
    if (doc.y + høyde > doc.page.height - doc.page.margins.bottom) doc.addPage();
  }

  doc.font("Helvetica").fontSize(10).fillColor(DEMPET).text("IT Dictionary · vurdering");
  doc.font("Helvetica-Bold").fontSize(24).fillColor(MØRK).text(elev.navn);
  if (elev.oppdatert) {
    doc.font("Helvetica").fontSize(10).fillColor(DEMPET)
      .text(new Date(elev.oppdatert).toLocaleDateString("no", { day: "numeric", month: "long", year: "numeric" }));
  }

  // Karakter og sum
  doc.moveDown(0.8);
  const boksY = doc.y;
  doc.roundedRect(venstre, boksY, bredde, 64, 8).lineWidth(0.75).strokeColor(KANT).stroke();
  doc.font("Helvetica").fontSize(9).fillColor(DEMPET).text("KARAKTER", venstre + 16, boksY + 14);
  doc.font("Helvetica-Bold").fontSize(26).fillColor(MØRK)
    .text(elev.karakter ?? "–", venstre + 16, boksY + 26);
  doc.font("Helvetica").fontSize(9).fillColor(DEMPET).text("POENG", venstre + 140, boksY + 14);
  doc.font("Helvetica-Bold").fontSize(26).fillColor(MØRK)
    .text(`${elev.sum}`, venstre + 140, boksY + 26, { continued: true })
    .font("Helvetica").fontSize(14).fillColor(DEMPET).text(` / ${MAKS}`);
  if (elev.status !== "ferdig") {
    doc.font("Helvetica").fontSize(10).fillColor(DEMPET)
      .text("Vurderingen er ikke ferdig.", venstre + 280, boksY + 28, { width: bredde - 296 });
  }
  doc.x = venstre;
  doc.y = boksY + 64 + 14;

  // Poeng per kriterium
  for (const s of RUBRIKK) {
    const vurderte = s.kriterier.filter((k) => typeof elev.poeng[k.id] === "number");
    const sum = vurderte.reduce((a, k) => a + elev.poeng[k.id], 0);
    sikrePlass(60);
    const y = doc.y;
    doc.font("Helvetica-Bold").fontSize(12).fillColor(MØRK).text(s.tittel, venstre, y, { width: bredde - 80 });
    doc.text(`${vurderte.length ? sum : "–"} / ${seksjonMaks(s)}`, poengX, y, { width: 60, align: "right" });
    doc.moveDown(0.3);
    linje(doc.y);
    doc.moveDown(0.4);
    for (const k of s.kriterier) {
      const p = elev.poeng[k.id];
      if (k.bonus && typeof p !== "number") continue;
      const tittel = k.bonus ? `${k.tittel} (bonus)` : k.tittel;
      const høyde = doc.font("Helvetica").fontSize(10).heightOfString(tittel, { width: bredde - 80 });
      sikrePlass(høyde + 6);
      const ky = doc.y;
      doc.fillColor(MØRK).text(tittel, venstre, ky, { width: bredde - 80 });
      doc.fillColor(typeof p === "number" ? MØRK : DEMPET)
        .text(`${typeof p === "number" ? p : "–"} / ${k.maks}`, poengX, ky, { width: 60, align: "right" });
      doc.y = ky + høyde + 3.5;
    }
    doc.x = venstre;
    doc.moveDown(0.5);
  }

  // Tilbakemelding
  if (elev.forbedring) {
    sikrePlass(80);
    doc.font("Helvetica-Bold").fontSize(12).fillColor(MØRK).text("Tilbakemelding", venstre);
    doc.moveDown(0.3);
    linje(doc.y);
    doc.moveDown(0.5);
    doc.font("Helvetica").fontSize(10.5).fillColor(MØRK)
      .text(elev.forbedring, venstre, doc.y, { width: bredde, lineGap: 3, paragraphGap: 6 });
  }

  doc.end();
}
