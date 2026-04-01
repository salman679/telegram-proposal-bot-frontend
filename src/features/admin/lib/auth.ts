export const ADMIN_EMAIL = "admin@gmail.com";
export const ADMIN_PASSWORD = "admin";
export const ADMIN_SESSION_COOKIE = "telegram-proposal-admin-session";

const ADMIN_SESSION_TOKEN = "telegram-proposal-admin-session-v1";

export function isValidAdminCredentials(email: string, password: string) {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export function getAdminSessionToken() {
  return ADMIN_SESSION_TOKEN;
}

export function isAdminSession(value?: string | null) {
  return value === ADMIN_SESSION_TOKEN;
}

export function sanitizeAdminRedirect(redirectTo?: string | null) {
  if (!redirectTo || !redirectTo.startsWith("/admin")) {
    return "/admin";
  }

  return redirectTo;
}
