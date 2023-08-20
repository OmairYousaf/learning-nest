import { EmployeeType, PrismaClient } from "@prisma/client";

export async function createEmployee(prisma: PrismaClient) {
  await prisma.user.create({
    data: {
      userId: "user1",
      username: "siddiquie",
      password: "123ajf",
    },
  });

  await prisma.employee.create({
    data: {
      employeeId: "emp2",
      employeeNo: "1236",
      employeeType: EmployeeType.CHI_US,
      user: {
        create: {
          userId: "user2",
          username: "faraz",
          password: "123ajf",
        },
      },
    },
  });

  await prisma.employee.create({
    data: {
      employeeId: "emp3",
      employeeNo: "1237",
      employeeType: EmployeeType.CHI_US,
      user: {
        create: {
          userId: "user3",
          username: "omair",
          password: "123ajf",
        },
      },
    },
  });
}

export async function createEmployeeNested(prisma: PrismaClient) {
  await prisma.employee.create({
    data: {
      manager: {
        create: {
          employeeId: "emp4",
          employeeNo: "1238",
          employeeType: EmployeeType.CHI_PAK,
          user: {
            connect: {
              userId: "user1",
            },
          },
          // manager: {},
        },
      },
      employeeId: "emp5",
      employeeNo: "123",
      employeeType: EmployeeType.CHI_US,
      user: {
        create: {
          userId: "user5",
          username: "hamza",
          password: "123ajf",
        },
      },
      workers: {
        connect: [{ userId: "user2" }, { userId: "user3" }],
      },
    },
  });
}
