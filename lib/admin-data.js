import "server-only";

const BACKEND_OVERVIEW_PATH = "/api/admin/overview";

export function getExpectedDashboardKey() {
  return process.env.DASHBOARD_API_KEY || process.env.STATS_API_KEY || "";
}

export function getDashboardStatus(providedKey) {
  const expectedKey = getExpectedDashboardKey();

  if (!expectedKey) {
    return "unconfigured";
  }

  return providedKey === expectedKey ? "authorized" : "unauthorized";
}

export function extractProvidedKey(searchParamsLike, headersLike) {
  if (typeof searchParamsLike?.get === "function") {
    const queryKey = searchParamsLike.get("key");

    if (queryKey) {
      return queryKey;
    }
  } else if (searchParamsLike && typeof searchParamsLike === "object") {
    const queryKey = searchParamsLike.key;

    if (typeof queryKey === "string" && queryKey) {
      return queryKey;
    }
  }

  if (headersLike?.get) {
    return (
      headersLike.get("x-dashboard-key") ||
      headersLike.get("x-stats-key") ||
      ""
    );
  }

  return "";
}

export function buildOverviewApiPath(key) {
  const params = new URLSearchParams();

  if (key) {
    params.set("key", key);
  }

  const query = params.toString();
  return query ? `/api/overview?${query}` : "/api/overview";
}

function buildError(message, status = 500) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function getBackendBaseUrl() {
  const baseUrl =
    process.env.BACKEND_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "";

  if (!baseUrl) {
    throw buildError("BACKEND_BASE_URL is not configured.", 500);
  }

  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

async function readJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function fetchDashboardSnapshot(providedKey) {
  const targetUrl = new URL(BACKEND_OVERVIEW_PATH, getBackendBaseUrl());
  const response = await fetch(targetUrl, {
    cache: "no-store",
    headers: providedKey ? { "x-dashboard-key": providedKey } : undefined
  });
  const payload = await readJson(response);

  if (!response.ok) {
    throw buildError(
      payload?.error || "Dashboard backend request failed.",
      response.status
    );
  }

  if (!payload?.ok || !payload.snapshot) {
    throw buildError("Dashboard backend returned an invalid response.", 502);
  }

  return payload.snapshot;
}
