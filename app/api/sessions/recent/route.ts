import { NextResponse } from "next/server";
import { getRecentSessions } from "@/lib/actions/companion.actions";

export const runtime = "edge";

export async function GET() {
  try {
    const sessions = await getRecentSessions(10);
    return NextResponse.json(sessions);
  } catch (err) {
    return NextResponse.json(
      { message: (err as Error).message },
      { status: 500 }
    );
  }
}
