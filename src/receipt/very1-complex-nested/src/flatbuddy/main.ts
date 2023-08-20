import { PrismaClient } from '@prisma/client';
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
