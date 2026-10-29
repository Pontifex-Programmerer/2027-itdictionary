async function hent(url, valg) {
  const svar = await fetch(url, valg);
  const data = await svar.json().catch(() => ({}));
  if (!svar.ok) throw new Error(data.feil ?? `HTTP ${svar.status}`);
  return data;
}

export const hentElever = () => hent("/api/elever");

export const hentElev = (mappe) => hent(`/api/elever/${encodeURIComponent(mappe)}`);

export const lagreVurdering = (mappe, vurdering) =>
  hent(`/api/elever/${encodeURIComponent(mappe)}/vurdering`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(vurdering),
  });
