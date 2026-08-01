import { getGalleryItems, getAvailableYears } from "../lib/api/gallery";
import GalleryPageClient from "../components/gallery/GalleryPageClient";

export const metadata = {
  title: "Gallery | COMSYS Educational Trust",
};

export default async function GalleryPage() {
  const [initialData, years] = await Promise.all([
    getGalleryItems({ page: 1, limit: 12 }),
    getAvailableYears(),
  ]);

  return (
    <GalleryPageClient
      initialItems={initialData.items}
      initialPagination={initialData.pagination}
      years={years}
    />
  );
}