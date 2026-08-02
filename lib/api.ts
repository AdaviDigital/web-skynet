// Points at the SkyNet API (NestJS backend).
export const API_BASE_URL =
  `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/v1`;

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
