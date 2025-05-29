import { Skeleton } from "@/components/ui/skeleton";

const CompanionListSkeleton = ({
  title = "Loading...",
}: {
  title?: string;
}) => {
  return (
    <article className="companion-list w-full lg:w-2/3">
      <Skeleton className="h-[36px] w-[425px]" />

      <div className=" rounded-md">
        <div className="grid grid-cols-12 gap-4 py-3 px-4 text-muted-foreground text-lg font-medium">
          <div className="col-span-8">Lessons</div>
          <div className="col-span-2">Subject</div>
          <div className="col-span-2 text-right">Duration</div>
        </div>

        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 items-center py-4 px-4 border-b"
          >
            <div className="col-span-8 flex items-center gap-3">
              <Skeleton className="size-[72px] rounded-lg max-md:hidden" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-40 h-6 rounded" /> {/* name */}
                <Skeleton className="w-64 h-4 rounded" /> {/* topic */}
              </div>
            </div>

            <div className="col-span-2 flex items-center">
              <Skeleton className="w-20 h-6 rounded" />
            </div>

            <div className="col-span-2 flex justify-end items-center gap-2">
              <Skeleton className="w-12 h-6 rounded" />
              <Skeleton className="w-4 h-4 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default CompanionListSkeleton;
