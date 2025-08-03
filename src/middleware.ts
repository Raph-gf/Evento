import { NextRequest, NextResponse } from "next/server";

export function middleware(resquest: NextRequest) {
  return NextResponse.redirect(new URL("events/all", resquest.url));
}

export const config = {
  matcher: ["/events"],
};
