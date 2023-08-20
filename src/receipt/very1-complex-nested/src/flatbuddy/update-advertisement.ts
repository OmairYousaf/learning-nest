import { PrismaClient } from '@prisma/client';

export async function updateDummyBedAdvertisment(prisma: PrismaClient) {
  await prisma.bedAdvertisment.update({
    where: { id: 'bedAd1id' },
    data: {
      totalBeds: 2,
      existingRoommates: {
        update: {
          where: { id: 'roomate1id' },
          data: {
            malesCount: 10,
            femalesCount: 10,
          },
        },
      },
      advertismentDetail: {
        update: {
          photos: {
            update: {
              where: { id: 'newPhoto1id' },
              data: {},
            },
            delete: [{ id: 'newPhoto2id' }, { id: 'newPhoto3id' }],
          },
          visitAvailabilities: {
            delete: {
              id: 'visit-avail2id',
            },
            update: {
              where: { id: 'visit-avail1id' },
              data: { to: new Date() },
            },
          },
        },
      },
    },
  });
}
