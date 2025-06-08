const BASE_URL = "https://dragonball-api.com/api/characters";

export async function fetchByName(name) {
  const url = name ? `${BASE_URL}?name=${encodeURIComponent(name)}` : BASE_URL;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : data.items || [];
}

export function filterByKi(characters, min, max) {
  return characters
    .map((c) => ({
      ...c,
      kiValue: Number((c.ki || "").toString().replace(/\./g, "")) || 0,
    }))
    .filter((c) => {
      const ki = c.kiValue;
      return ki >= min && ki <= max;
    });
}
