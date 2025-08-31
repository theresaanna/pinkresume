import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const cookie = req.cookies.get("blog_auth")?.value;

  // Protect only /blog/new
  if (url.pathname.startsWith("/blog/new")) {
    if (cookie !== process.env.BLOG_PASSWORD) {
      // Redirect to login page
      return NextResponse.redirect(new URL("/blog/login", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware only to these routes
export const config = {
  matcher: ["/blog/new/:path*"],
};