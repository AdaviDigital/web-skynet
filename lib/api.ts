// Points at the SkyNet API (NestJS backend). Set NEXT_PUBLIC_API_URL in your
// environment (e.g. .env.local, or your Vercel/Render project settings) once
// the backend is deployed. Falls back to a local dev URL.
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  return res;
}
