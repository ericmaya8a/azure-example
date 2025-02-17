import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log(req.nextUrl.href);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - .swa (Azure Static Web Apps)
     */
    "/((?!.swa).*)",
  ],
};
