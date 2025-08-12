import { type NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  const theme = request.cookies.get("theme");
  console.log("Theme cookie:", theme);
  return new Response("<h1>Profile API</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
