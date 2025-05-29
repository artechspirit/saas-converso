import { clerkMiddleware, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  const url = req.nextUrl.clone();

  // Rute publik yang tidak perlu login
  const publicPaths = [
    "/sign-in",
    "/api",
    "/_next",
    "/icons",
    "/images",
    "/favicon.ico",
  ];

  const isPublicPath = publicPaths.some((path) =>
    url.pathname.startsWith(path)
  );

  if (!userId && !isPublicPath) {
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|_static|favicon.ico).*)"],
};
