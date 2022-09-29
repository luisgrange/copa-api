/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "pts" INTEGER NOT NULL,
    "GM" INTEGER NOT NULL,
    "GC" INTEGER NOT NULL,
    "SG" INTEGER NOT NULL,
    "PJ" INTEGER NOT NULL,
    "Vitorias" INTEGER NOT NULL,
    "Derrotas" INTEGER NOT NULL,
    "Empates" INTEGER NOT NULL
);
