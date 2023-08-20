import { Prisma, PrismaClient } from '@prisma/client';
import { createDummyUser } from './create-users';
import { createDummyPost } from './create-posts';
import { createDummyBedAdvertisment } from './create-advertisement';
import { updateDummyBedAdvertisment } from './update-advertisement';

async function main() {
  const prisma = new PrismaClient();
  await deleteAll(prisma);
  let user1 = await createDummyUser(prisma);
  await createDummyPost(prisma);
  await createDummyBedAdvertisment(prisma);
  await updateDummyBedAdvertisment(prisma);
}

async function deleteAll(prisma: PrismaClient) {
  await prisma.visitAvailability.deleteMany();
  await prisma.advertismentDetail.deleteMany();
  await prisma.preferredAmenity.deleteMany();
  await prisma.preferredLocation.deleteMany();

  await prisma.postPhoto.deleteMany();
  await prisma.advertismentPhoto.deleteMany();
  await prisma.availableAmenity.deleteMany();
  await prisma.preferredAmenity.deleteMany();
  await prisma.existingRoommates.deleteMany();
  await prisma.advertismentDetail.deleteMany();
  await prisma.bedPreference.deleteMany();
  await prisma.bedAdvertisment.deleteMany();

  await prisma.bedAdvertisment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
}

main();

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = T extends object
  ? U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : U
  : T;

export type BedAdvertismentUncheckedCreateNestedManyWithoutUserInput = {
  create?:
    | XOR<
        Prisma.BedAdvertismentCreateWithoutUserInput,
        Prisma.BedAdvertismentUncheckedCreateWithoutUserInput
      >
    | Prisma.BedAdvertismentCreateWithoutUserInput[]
    | Prisma.BedAdvertismentUncheckedCreateWithoutUserInput[];
  connectOrCreate?:
    | Prisma.BedAdvertismentCreateOrConnectWithoutUserInput
    | Prisma.BedAdvertismentCreateOrConnectWithoutUserInput[];
  createMany?: Prisma.BedAdvertismentCreateManyUserInputEnvelope;
  connect?:
    | Prisma.BedAdvertismentWhereUniqueInput
    | Prisma.BedAdvertismentWhereUniqueInput[];
};

export type BedAdvertismentCreateNestedManyWithoutUserInput = {
  create?:
    | XOR<
        BedAdvertismentCreateWithoutUserInput,
        BedAdvertismentUncheckedCreateWithoutUserInput
      >
    | BedAdvertismentCreateWithoutUserInput[]
    | BedAdvertismentUncheckedCreateWithoutUserInput[];
  connectOrCreate?:
    | BedAdvertismentCreateOrConnectWithoutUserInput
    | BedAdvertismentCreateOrConnectWithoutUserInput[];
  createMany?: BedAdvertismentCreateManyUserInputEnvelope;
  connect?: BedAdvertismentWhereUniqueInput | BedAdvertismentWhereUniqueInput[];
};
