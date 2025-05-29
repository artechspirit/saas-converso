import { currentUser } from "@clerk/nextjs/server";
import {
  getUserCompanions,
  getUserSessions,
} from "@/lib/actions/companion.actions";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const companions = await getUserCompanions(user.id);
  const sessions = await getUserSessions(user.id);

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.fullName,
      email: user.emailAddresses[0].emailAddress,
      image: user.imageUrl,
    },
    companions,
    sessions,
  });
}
