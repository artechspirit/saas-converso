// app/page.tsx
"use client";

import useSWR from "swr";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { getSubjectColor } from "@/lib/utils";
import CompanionCardSkeleton from "@/components/skeleton/CompanionCardSkeleton";
import CompanionListSkeleton from "@/components/skeleton/CompanionListSkeleton";
import CTASkeleton from "@/components/skeleton/CTASkeleton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
  const { data: companions, isLoading: loadingCompanions } = useSWR(
    "/api/companions?limit=3",
    fetcher
  );
  const { data: recentSessions, isLoading: loadingSessions } = useSWR(
    "/api/sessions/recent",
    fetcher
  );

  return (
    <main>
      <h1 className="text-2xl font-bold underline">Popular Companions</h1>

      <section className="home-section grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loadingCompanions ? (
          <>
            {[1, 2, 3].map((i) => (
              <CompanionCardSkeleton key={i} />
            ))}
          </>
        ) : (
          companions?.map(
            ({ id, name, topic, subject, duration }: any, index: number) => (
              <CompanionCard
                key={index}
                id={id}
                name={name}
                topic={topic}
                subject={subject}
                duration={duration}
                color={getSubjectColor(subject)}
              />
            )
          )
        )}
      </section>

      <div className="home-section flex flex-col lg:flex-row gap-6">
        {loadingSessions ? (
          <CompanionListSkeleton />
        ) : (
          <CompanionList
            title="Recently completed sessions"
            companions={recentSessions}
            classNames="w-full lg:w-2/3"
          />
        )}
        {loadingSessions ? <CTASkeleton /> : <CTA />}
      </div>
    </main>
  );
};

export default Page;
