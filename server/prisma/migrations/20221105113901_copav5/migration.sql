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
    "gruposId" INTEGER,
    CONSTRAINT "selecoes_gruposId_fkey" FOREIGN KEY ("gruposId") REFERENCES "grupos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "grupos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "jogos" (
    "id_jogo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fkId_sel1" INTEGER NOT NULL,
    "fkId_sel2" INTEGER NOT NULL,
    "gol1" INTEGER NOT NULL,
    "gol2" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "vencedores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fk_id" INTEGER NOT NULL,
    "vencedor" TEXT NOT NULL,
    CONSTRAINT "vencedores_fk_id_fkey" FOREIGN KEY ("fk_id") REFERENCES "jogos" ("id_jogo") ON DELETE RESTRICT ON UPDATE CASCADE
);
