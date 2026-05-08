// src/lib/prisma.ts
import { PrismaClient } from "../generated/prisma/client"; // Update to your custom output path
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const prismaClientSingleton = () => {
  // 1. Create your database connection pool
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  // 2. Initialize the Prisma Driver Adapter
  const adapter = new PrismaPg(pool);

  // 3. Pass the adapter to PrismaClient
  return new PrismaClient({ adapter });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
