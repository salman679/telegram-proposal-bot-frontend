import { NextResponse } from "next/server";

import {
  ADMIN_SESSION_COOKIE,
  getAdminSessionToken,
  isValidAdminCredentials,
  sanitizeAdminRedirect
} from "@/features/admin/lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const redirectTo = sanitizeAdminRedirect(
    String(formData.get("redirect") || "/admin")
  );

  if (!isValidAdminCredentials(email, password)) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("error", "invalid");
    loginUrl.searchParams.set("redirect", redirectTo);

    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.redirect(new URL(redirectTo, request.url));

  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: getAdminSessionToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12
  });

  return response;
}
