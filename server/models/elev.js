// Modell: én elev = elever/<Navn>/<Navn>.md.
// Frontmatter øverst i filen:
//   poeng       lærerens poeng per kriterium (skrives fra skjemaet)
//   notater     lærerens notat per seksjon (skrives fra skjemaet)
//   forutsetninger  rettelser gjort for å kunne vurdere (navn, ZIP, flyttede filer); redigeres i skjemaet
//   forbedring  det viktigste eleven bør forbedre (forslag fra Claude, kan redigeres i skjemaet)
//   forslag     Claudes forslag per kriterium: { poeng, grunn } (skrives bare for hånd, aldri fra skjemaet)
//   prosjekt    elevens prosjektmappe, relativt til repoet (skrives for hånd)
//   forside     forsiden relativt til prosjektmappen (standard index.html)
// Resten av filen er notatene fra filgjennomgangen og endres ikke herfra.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { RUBRIKK, KRITERIER, oppsummer } from "../../shared/rubrikk.js";

const ELEVER = join(import.meta.dirname, "..", "..", "elever");

export class Valideringsfeil extends Error {}

function filFor(mappe) {
  if (!/^[\p{L}\p{N} _-]+$/u.test(mappe)) return null;
  const fil = join(ELEVER, mappe, `${mappe}.md`);
  return existsSync(fil) ? fil : null;
}

function fraMarkdown(mappe, tekst) {
  const { data, content } = matter(tekst);
  const poeng = data.poeng ?? {};
  return {
    mappe,
    navn: content.match(/^# (.+?) –/m)?.[1] ?? mappe,
    poeng,
    notater: data.notater ?? {},
    forbedring: data.forbedring ?? "",
    forutsetninger: data.forutsetninger ?? "",
    forslag: data.forslag ?? {},
    prosjekt: data.prosjekt ?? null,
    forside: data.forside ?? "index.html",
    oppdatert: data.oppdatert ? new Date(data.oppdatert).toISOString() : null,
    filnotater: content.replace(/^\s*# .*\r?\n/, "").trim(),
    ...oppsummer(poeng),
  };
}

export async function alle() {
  const mapper = await readdir(ELEVER, { withFileTypes: true });
  const elever = await Promise.all(
    mapper.filter((d) => d.isDirectory()).map((d) => finn(d.name)),
  );
  return elever.filter(Boolean).sort((a, b) => a.navn.localeCompare(b.navn, "no"));
}

export async function finn(mappe) {
  const fil = filFor(mappe);
  return fil ? fraMarkdown(mappe, await readFile(fil, "utf8")) : null;
}

function valider(data) {
  const poeng = {}, notater = {};
  for (const k of KRITERIER) {
    const p = data?.poeng?.[k.id];
    if (p === null || p === undefined) continue;
    if (!Number.isInteger(p) || p < 0 || p > k.maks) throw new Valideringsfeil(`Ugyldig poeng for ${k.id}`);
    poeng[k.id] = p;
  }
  for (const s of RUBRIKK) {
    const n = data?.notater?.[s.id];
    if (typeof n === "string" && n.trim()) notater[s.id] = n.trim();
  }
  const tekst = (felt) => (typeof data?.[felt] === "string" ? data[felt].trim() : "");
  return { poeng, notater, forbedring: tekst("forbedring"), forutsetninger: tekst("forutsetninger") };
}

export async function lagreVurdering(mappe, data) {
  const fil = filFor(mappe);
  if (!fil) return null;
  const vurdering = valider(data);
  const original = await readFile(fil, "utf8");
  const { data: frontmatter, content } = matter(original);
  const ny = { ...frontmatter, ...vurdering, oppdatert: new Date().toISOString() };
  // Behold filens linjeskift (CRLF eller LF) også i frontmatter.
  const eol = original.includes("\r\n") ? "\r\n" : "\n";
  const tekst = matter.stringify(content.replace(/^\r?\n/, ""), ny).replace(/\r?\n/g, eol);
  await writeFile(fil, tekst);
  return fraMarkdown(mappe, tekst);
}
