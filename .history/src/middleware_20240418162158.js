import { NextResponse } from "next/server";
export function middleware(request) {
  console.log(request);
  return NextResponse.redirect("/", new URL(request.url));
}
