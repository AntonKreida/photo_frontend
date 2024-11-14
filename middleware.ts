import { NextResponse, type NextRequest } from "next/server";


export default function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico\\/?).*)"],
};