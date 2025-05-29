"use client";

import useSWR from "swr";
import Image from "next/image";

import CompanionList from "@/components/CompanionList";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProfileSectionSkeleton from "@/components/skeleton/ProfileSectionSkeleton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Profile = () => {
  const { data, isLoading } = useSWR("/api/profile", fetcher);

  const { user, companions, sessions } = data || {};

  return (
    <main className="min-lg:w-3/4">
      {isLoading ? (
        <ProfileSectionSkeleton />
      ) : (
        <>
          <section className="flex justify-between gap-4 max-sm:flex-col items-center">
            <div className="flex gap-4 items-center">
              <Image
                src={user?.image}
                alt={user?.name}
                width={110}
                height={110}
                className="rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="border border-black rounded-lg p-3 gap-3 flex flex-col h-fit">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/check.svg"
                    alt="checkmark"
                    width={22}
                    height={22}
                  />
                  <p className="text-2xl font-bold">{sessions?.length}</p>
                  <div>Lessons completed</div>
                </div>
              </div>

              <div className="border border-black rounded-lg p-3 gap-3 flex flex-col h-fit">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/cap.svg"
                    alt="cap"
                    width={22}
                    height={22}
                  />
                  <p className="text-2xl font-bold">{companions?.length}</p>
                  <div>Companions created</div>
                </div>
              </div>
            </div>
          </section>

          <Accordion type="multiple">
            <AccordionItem value="recent">
              <AccordionTrigger className="text-2xl font-bold">
                Recent Sessions
              </AccordionTrigger>
              <AccordionContent>
                <CompanionList title="Recent Sessions" companions={sessions} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="companions">
              <AccordionTrigger className="text-2xl font-bold">
                My Companions ({companions?.length})
              </AccordionTrigger>
              <AccordionContent>
                <CompanionList title="My Companions" companions={companions} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </main>
  );
};

export default Profile;
