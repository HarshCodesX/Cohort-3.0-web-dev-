import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

const prismaClientSingleton = () => 
{
    const adapter = new PrismaPg({ connectionString });
    return  new PrismaClient({ adapter });
}

//@ts-expect-error
const prisma = globalThis.prisma ?? prismaClientSingleton();

if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
export default prisma;
// comment