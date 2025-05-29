import { NextResponse } from "next/server";
import { getAllCompanions } from "@/lib/actions/companion.actions";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit") || "10");
  const page = Number(searchParams.get("page") || "1");
  const subject = searchParams.get("subject") || undefined;
  const topic = searchParams.get("topic") || undefined;

  try {
    const companions = await getAllCompanions({ limit, page, subject, topic });
    return NextResponse.json(companions, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { message: (err as Error).message },
      { status: 500 }
    );
  }
}
