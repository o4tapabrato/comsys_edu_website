import { Skeleton } from "../components/ui/Skeleton";

export default function GalleryLoading() {
  return (
    <div className="bg-[#020617] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-4 w-1/2 mx-auto mb-10" />
        <div className="flex justify-center gap-3 mb-10">
          <Skeleton className="h-11 w-32 rounded-2xl" />
          <Skeleton className="h-11 w-40 rounded-2xl" />
          <Skeleton className="h-11 w-36 rounded-2xl" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-96 rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
}