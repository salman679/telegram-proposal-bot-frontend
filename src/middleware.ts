import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  ADMIN_SESSION_COOKIE,
  isAdminSession,
  sanitizeAdminRedirect
} from "@/features/admin/lib/auth";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const { pathname, search } = request.nextUrl;

  if (pathname === "/admin/login") {
    if (isAdminSession(session)) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
  }

  if (!isAdminSession(session)) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set(
      "redirect",
      sanitizeAdminRedirect(`${pathname}${search}`)
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
