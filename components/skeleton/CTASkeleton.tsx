const CTASkeleton = () => {
  return (
    <section className="cta-section max-md:w-full space-y-4">
      <div className="h-6 w-48 bg-gray-300 rounded animate-pulse"></div>{" "}
      {/* badge */}
      <div className="h-10 w-80 bg-gray-300 rounded animate-pulse"></div>{" "}
      {/* heading */}
      <div className="h-5 w-full max-w-lg bg-gray-300 rounded animate-pulse"></div>{" "}
      {/* paragraph line 1 */}
      <div className="h-5 w-full max-w-md bg-gray-300 rounded animate-pulse"></div>{" "}
      {/* paragraph line 2 */}
      <div className="h-[232px] w-[362px] bg-gray-300 rounded animate-pulse"></div>{" "}
      {/* image placeholder */}
      <div className="inline-flex items-center gap-2 bg-gray-300 rounded px-4 py-2 w-fit animate-pulse">
        <div className="h-4 w-4 rounded bg-gray-400"></div>{" "}
        {/* icon placeholder */}
        <div className="h-5 w-40 rounded bg-gray-400"></div>{" "}
        {/* button text placeholder */}
      </div>
    </section>
  );
};

export default CTASkeleton;
