const BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

/**
 * Placeholder API utilities.
 * Replace fetch wrappers with real calls and add auth headers as needed.
 */

// PUBLIC_INTERFACE
export async function apiGet(path) {
  /** Placeholder GET request. */
  const url = `${BASE_URL}${path}`;
  // return fetch(url, { headers }).then(r => r.json())
  console.info("[API:get] Would GET", url);
  return { ok: true, data: null };
}

// PUBLIC_INTERFACE
export async function apiPost(path, body) {
  /** Placeholder POST request. */
  const url = `${BASE_URL}${path}`;
  console.info("[API:post] Would POST", url, body);
  return { ok: true, data: body };
}
