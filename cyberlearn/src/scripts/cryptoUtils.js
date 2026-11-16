// Small helpers shared by the browser labs.

export const enc = new TextEncoder();
export const dec = new TextDecoder();

export const toHex = (buf) =>
  [...new Uint8Array(buf instanceof ArrayBuffer ? buf : buf.buffer ?? buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

export function fromHex(hex) {
  const clean = hex.replace(/[^0-9a-f]/gi, "");
  if (clean.length % 2) throw new Error("Hex must have an even number of digits");
  return new Uint8Array(clean.match(/.{2}/g)?.map((h) => parseInt(h, 16)) ?? []);
}

export function toBase64(bytes) {
  let s = "";
  new Uint8Array(bytes).forEach((b) => (s += String.fromCharCode(b)));
  return btoa(s);
}

export function fromBase64(b64) {
  const bin = atob(b64.replace(/\s/g, ""));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

export const toBase64Url = (bytes) => toBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

export function fromBase64Url(s) {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  return fromBase64(b64 + "===".slice((b64.length + 3) % 4));
}

export const randomBytes = (n) => crypto.getRandomValues(new Uint8Array(n));

export async function sha256Hex(text) {
  return toHex(await crypto.subtle.digest("SHA-256", enc.encode(text)));
}

/** Count differing bits between two equal-length byte arrays. */
export function bitDiff(a, b) {
  let n = 0;
  for (let i = 0; i < a.length; i++) {
    let x = a[i] ^ b[i];
    while (x) { n += x & 1; x >>= 1; }
  }
  return n;
}

export const $ = (sel) => document.querySelector(sel);

export function show(sel, text, state) {
  const el = $(sel);
  if (!el) return;
  el.textContent = text;
  el.classList.remove("ok", "bad");
  if (state) el.classList.add(state);
}

export function requireWebCrypto() {
  if (!globalThis.crypto?.subtle) {
    document.querySelectorAll(".lab button").forEach((b) => (b.disabled = true));
    const first = document.querySelector(".lab .out");
    if (first) first.textContent = "Your browser doesn't provide the Web Crypto API here. Try a current browser over HTTPS.";
    return false;
  }
  return true;
}
