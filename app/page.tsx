import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";

import {
  getAllCompanions,
  getRecentSessions,
} from "../lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const Page = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        {companions.map(({ id, name, topic, subject, duration }) => (
          <CompanionCard
            key={id}
            id={id}
            name={name}
            topic={topic}
            subject={subject}
            duration={duration}
            color={getSubjectColor(subject)}
          />
        ))}
      </section>

      <div className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </div>
    </main>
  );
};

export default Page;
