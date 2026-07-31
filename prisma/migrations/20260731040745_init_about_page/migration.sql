-- CreateTable
CREATE TABLE "about_hero" (
    "id" TEXT NOT NULL,
    "eyebrow" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "about_hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vision_mission" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "vision_mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history_intro" (
    "id" TEXT NOT NULL,
    "intro" TEXT NOT NULL,

    CONSTRAINT "history_intro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "history_milestones" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "history_milestones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leadership_messages" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT,
    "message" TEXT NOT NULL,
    "photoUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "leadership_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trustees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT,
    "photoUrl" TEXT,
    "bio" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "trustees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "executive_committee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT,
    "photoUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "executive_committee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core_values" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "core_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmap_section" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "roadmap_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmap_milestones" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "roadmap_milestones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "history_milestones_order_idx" ON "history_milestones"("order");

-- CreateIndex
CREATE INDEX "trustees_order_idx" ON "trustees"("order");

-- CreateIndex
CREATE INDEX "executive_committee_order_idx" ON "executive_committee"("order");

-- CreateIndex
CREATE INDEX "core_values_order_idx" ON "core_values"("order");

-- CreateIndex
CREATE INDEX "roadmap_milestones_order_idx" ON "roadmap_milestones"("order");
