import { Skeleton } from "../components/ui/Skeleton";

export default function AboutLoading() {
  return (
    <div className="bg-[#020617] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <Skeleton className="h-10 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      </div>
    </div>
  );
}