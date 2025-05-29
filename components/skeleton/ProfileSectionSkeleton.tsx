import { Skeleton } from "../ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanionCardSkeleton from "./CompanionCardSkeleton";

const ProfileSectionSkeleton = () => {
  return (
    <>
      <section className="flex justify-between gap-4 max-sm:flex-col items-center">
        {/* Left side: Avatar + info */}
        <div className="flex gap-4 items-center">
          <Skeleton className="w-[110px] h-[110px] rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-40 h-8 rounded-md" /> {/* Name */}
            <Skeleton className="w-60 h-4 mt-2 rounded-md" /> {/* Email */}
          </div>
        </div>

        {/* Right side: stats */}
        <div className="flex gap-4">
          <Skeleton className="w-[225px] h-[58px]" />

          <Skeleton className="w-[225px] h-[58px]" />
        </div>
      </section>

      <Accordion type="multiple">
        <AccordionItem value="recent">
          <AccordionTrigger className="text-2xl font-bold">
            <Skeleton className="w-56 h-10" /> {/* title placeholder */}
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <CompanionCardSkeleton key={`recent-${i}`} />
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="companions">
          <AccordionTrigger className="text-2xl font-bold">
            <Skeleton className="w-56 h-10" /> {/* title placeholder */}
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <CompanionCardSkeleton key={`companion-${i}`} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProfileSectionSkeleton;
