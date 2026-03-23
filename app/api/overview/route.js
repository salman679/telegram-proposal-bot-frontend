import { NextResponse } from "next/server";
import {
  extractProvidedKey,
  fetchDashboardSnapshot,
  getDashboardStatus
} from "../../../lib/admin-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const providedKey = extractProvidedKey(
    request.nextUrl.searchParams,
    request.headers
  );
  const status = getDashboardStatus(providedKey);

  if (status === "unconfigured") {
    return NextResponse.json(
      { ok: false, error: "Dashboard key is not configured." },
      { status: 404 }
    );
  }

  if (status !== "authorized") {
    return NextResponse.json(
      { ok: false, error: "Invalid dashboard key." },
      { status: 401 }
    );
  }

  try {
    const snapshot = await fetchDashboardSnapshot(providedKey);
    return NextResponse.json({ ok: true, snapshot });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Dashboard backend request failed."
      },
      { status: Number(error?.status) || 502 }
    );
  }
}
