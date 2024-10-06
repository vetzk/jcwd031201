import { PrismaClient } from '../prisma/generated/client'; //menyesuaikan setup vercel pakai generated/client

export default new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
