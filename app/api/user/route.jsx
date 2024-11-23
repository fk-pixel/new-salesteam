import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";


export async function GET() {
  const { userId } = auth()

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const user = await currentUser()

  // perform your Route Handler's logic

  return NextResponse.json({ user }, { status: 200 })
}