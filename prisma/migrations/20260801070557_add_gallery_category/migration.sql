-- CreateTable
CREATE TABLE "gallery" (
    "id" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL DEFAULT 'conference',
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "gallery_time_idx" ON "gallery"("time");

-- CreateIndex
CREATE INDEX "gallery_active_idx" ON "gallery"("active");

-- CreateIndex
CREATE INDEX "gallery_category_idx" ON "gallery"("category");
