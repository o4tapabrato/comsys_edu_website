import { getGalleryItems, getAvailableYears } from "../lib/api/gallery";
import GalleryPageClient from "../components/gallery/GalleryPageClient";

export const metadata = {
  title: "Gallery | COMSYS Educational Trust",
};

export default async function GalleryPage() {
  try {
    // Call database functions directly on the server (no fetch/URL errors)
    const [initialData, years] = await Promise.all([
      getGalleryItems({ page: 1, limit: 12 }),
      getAvailableYears(),
    ]);

    return (
      <GalleryPageClient
        initialItems={initialData?.items || []}
        initialPagination={initialData?.pagination || {}}
        years={years || []}
      />
    );
  } catch (error) {
    console.error("Failed to load gallery data:", error);
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <p className="text-red-400 font-semibold">Failed to load gallery items. Please try again later.</p>
      </div>
    );
  }
}