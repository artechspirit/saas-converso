import { Skeleton } from "@/components/ui/skeleton";

const CompanionCardSkeleton = () => {
  return (
    <article className="companion-card p-4 flex flex-col gap-3 animate-pulse">
      <div className="flex justify-between items-center mb-3">
        <Skeleton className="w-20 h-6 rounded-full" /> {/* subject badge */}
        <Skeleton className="w-6 h-6 rounded" /> {/* bookmark icon */}
      </div>
      <Skeleton className="w-3/4 h-8 rounded mb-2" /> {/* title placeholder */}
      <Skeleton className="w-full h-[40px] rounded mb-4" />{" "}
      {/* topic placeholder */}
      <div className="flex items-center gap-2 mb-5">
        <Skeleton className="w-5 h-5 rounded" /> {/* clock icon */}
        <Skeleton className="w-12 h-4 rounded" /> {/* duration placeholder */}
      </div>
      <Skeleton className="w-full h-10 rounded-md mt-auto" /> {/* button */}
    </article>
  );
};

export default CompanionCardSkeleton;
