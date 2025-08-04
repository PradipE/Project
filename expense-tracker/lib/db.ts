import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}   

export const prisma = global.globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  global.globalThis.prisma = prisma;
}