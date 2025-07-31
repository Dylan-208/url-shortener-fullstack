-- CreateTable
CREATE TABLE "public"."Url" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_slug_key" ON "public"."Url"("slug");
