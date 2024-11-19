import { NextResponse, type NextRequest } from "next/server";


export default function middleware(request: NextRequest) {
  const { headers, nextUrl, url } = request;
  const { pathname } = nextUrl;

  if(pathname.match(/^(\/?(educations?)\/?)(?!\w)$/ig)) {
    return NextResponse.redirect(new URL("/", url));
  }

  const headersRequest = new Headers(headers);
  headersRequest.set("x-current-path", pathname);

  return NextResponse.next({ headers: headersRequest });
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico\\/?).*)"],
};
