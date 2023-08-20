import { PrismaClient } from "@prisma/client";
import { createEmployee, createEmployeeNested } from "./create-user";

async function main() {
  const prisma = new PrismaClient();
  await deleteAll(prisma);
  await createEmployee(prisma);
  await createEmployeeNested(prisma);
}

async function deleteAll(prisma: PrismaClient) {
  await prisma.userSession.deleteMany();
  await prisma.employee.deleteMany();
  await prisma.user.deleteMany();
}

main();
