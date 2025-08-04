import { NextRequest } from "next/server";

export { default } from "next-auth/middleware";

export function middleware(req: NextRequest) {
  console.log('Middleware URL:', req.nextUrl.href);
  return;
}

export const config = {
  matcher: ["/admin/((?!login).*)"],
};