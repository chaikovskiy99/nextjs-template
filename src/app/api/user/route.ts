import { NextRequest, NextResponse } from "next/server";

type User = {
  username: string;
  email: string;
  phone: string;
};

export async function GET(req: NextRequest) {
//   const user: User = {
//     username: "Robert Lewandowski",
//     email: "Robert@gmail.com",
//     phone: "9392423433",
//   };
  return NextResponse.json({message: "This message is coming from a serverless api function. This application is still under development. "})
}
