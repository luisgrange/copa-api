-- CreateTable
CREATE TABLE "selecoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "escudo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "pts" INTEGER NOT NULL,
    "vit" INTEGER NOT NULL,
    "emp" INTEGER NOT NULL,
    "der" INTEGER NOT NULL,
    "gp" INTEGER NOT NULL,
    "gc" INTEGER NOT NULL,
    "sg" INTEGER NOT NULL,
    "fk_id" INTEGER NOT NULL,
    CONSTRAINT "selecoes_fk_id_fkey" FOREIGN KEY ("fk_id") REFERENCES "grupos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "grupos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
