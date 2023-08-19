import { PrismaClient } from '@prisma/client';

import { Gender, AdvertiserType, AdvertismentType } from '@prisma/client';

async function createDummyUser(prisma: PrismaClient) {
  let user1 = await prisma.user.create({
    data: {
      id: 'user1id',
      email: 'dummyuser1@example.com',
      name: 'User 1',
      gender: Gender.MALE,
      phoneNumber: '123-456-7890',
      advertiserType: AdvertiserType.AGENT,
    },
  });
  console.log(user1);

  let user2 = await prisma.user.create({
    data: {
      id: 'user2Id',
      email: 'dummyuser2@example.com',
      name: 'User 2',
      gender: Gender.FEMALE,
      phoneNumber: '987-654-3210',
      advertiserType: AdvertiserType.CURRENT_FLATMATE,
      // managerId: user1.id,
      manager: {
        create: {
          id: 'manager1id',
          email: 'dummyuser3@example.com',
          name: 'User 3',
          gender: Gender.FEMALE,
          phoneNumber: '987-654-3210',
          advertiserType: AdvertiserType.CURRENT_FLATMATE,
        },
      },
    },
  });
  console.log(user2);
  return user1;
}
