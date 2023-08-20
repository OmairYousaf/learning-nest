import { PrismaClient } from "@prisma/client";

class CreateOrderableDto {
  id: string;
  name: string;

  patient: CreatePatientDict | ConnectPatientDict;
  assignedBy: CreateAssignedByDict | ConnectAssignedByDict;
}

class CreatePatientDict {
  create: CreatePatientDto;
  connect?: never;
}

class ConnectPatientDict {
  connect: { id: string };
  create?: never;
}

class CreatePatientDto {
  id: string;
  name: string;
}

class CreateAssignedByDict {
  create: CreateAssignedByDto;
  connect?: never;
}

class ConnectAssignedByDict {
  create?: never;
  connect: { id: string };
}

class CreateAssignedByDto {
  id: string;
  name: string;
}

async function createDoctor(prisma: PrismaClient) {
  await prisma.doctor.create({
    data: {
      id: "doctor1",
      name: "Usama",
    },
  });
}

async function createPatient(prisma: PrismaClient) {
  await prisma.patient.create({
    data: {
      id: "patient1",
      name: "siddiquie",
    },
  });
}

async function createResultable(prisma: PrismaClient) {
  await prisma.resultable.create({
    data: {
      id: "r1",
      name: "weight",
    },
  });

  await prisma.resultable.create({
    data: {
      id: "r2",
      name: "fat-content",
    },
  });
}

async function createSchedule(prisma: PrismaClient) {
  await prisma.schedule.create({
    data: {
      id: "s1",
      time: new Date(),
    },
  });

  await prisma.schedule.create({
    data: {
      id: "s2",
      time: new Date(),
    },
  });
}

async function createNestedOrderable(prisma: PrismaClient) {
  // One Level Deep create with JSON
  await prisma.orderable.create({
    data: {
      id: "ord1",
      name: "Body Compostion Analysis",
      assignedBy: {
        connect: {
          id: "doctor1",
        },
      },
      patient: {
        connect: {
          id: "patient1",
        },
      },
      Resultable: {
        connect: [{ id: "r1" }, { id: "r2" }],
        create: {
          id: "r3",
          name: "bone-mass",
        },
      },
      Schedule: {
        connect: [{ id: "s1" }, { id: "s2" }],
        create: [
          { id: "s3", time: new Date() },
          { id: "s4", time: new Date() },
        ],
      },
    },
  });

  // Using a DTO to create
  let dto = new CreateOrderableDto();
  dto.id = "ord2";
  dto.name = "Blood pressure";
  dto.assignedBy = {
    connect: { id: "doctor1" },
  };
  dto.patient = {
    // Only one of create or connect needs to be provided

    create: {
      id: "patient2",
      name: "Usama",
    },

    // connect: {
    //   id: "",
    // },
  };

  await prisma.orderable.create({
    data: dto,
  });
}

async function deleteAll(prisma: PrismaClient) {
  await prisma.resultable.deleteMany();
  await prisma.device.deleteMany();
  await prisma.schedule.deleteMany();
  await prisma.orderable.deleteMany();
  await prisma.medicine.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.doctor.deleteMany();
}

async function main() {
  const prisma = new PrismaClient();
  await deleteAll(prisma);
  await createDoctor(prisma);
  await createPatient(prisma);
  await createResultable(prisma);
  await createSchedule(prisma);
  await createNestedOrderable(prisma);
}

main();
