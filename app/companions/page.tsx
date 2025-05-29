"use client";

import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getSubjectColor } from "@/lib/utils";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CompanionsContent() {
  const searchParams = useSearchParams();

  const subject = searchParams.get("subject") || "";
  const topic = searchParams.get("topic") || "";

  const {
    data: companions,
    isLoading,
    error,
  } = useSWR(`/api/companions?subject=${subject}&topic=${topic}`, fetcher);

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      <section className="home-section grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {error ? (
          <p>Failed to load companions.</p>
        ) : companions?.length === 0 ? (
          <p>No companions found.</p>
        ) : (
          companions?.map((companion: any) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default function CompanionsLibrary() {
  return (
    <Suspense>
      <CompanionsContent />
    </Suspense>
  );
}
