import { PrismaClient } from '@prisma/client';

import { Gender, AdvertiserType } from '@prisma/client';

export async function createDummyPost(prisma: PrismaClient) {
  await prisma.post.create({
    data: {
      id: 'post1id',
      title: 'Amazing Apartment',
      description: 'Spacious apartment with great views',
      moveInFrom: new Date(),
      user: {
        create: {
          id: 'user3id',
          email: 'myemail@email.com',
          name: 'My Name',
          gender: Gender.MALE,
          phoneNumber: '987-654-3210',
          advertiserType: AdvertiserType.LIVE_IN_LANDLORD,
        },
      },
      preferredLocation: {
        create: {
          id: 'location1id',
          longitude: 1,
          latitude: 1,
          radius: 1,
        },
      },
      preferredAmenities: {
        create: [
          {
            id: 'amenity1id',
            name: 'Swimming Pool',
          },
          {
            id: 'amenity2id',
            name: 'Gym',
          },
        ],
      },
      photos: {
        create: [
          {
            id: 'post-phto1id',
            url: 'https://url.to.photo.com',
          },
          {
            id: 'post-photo2id',
            url: 'https://url.to.photo.com',
          },
        ],
      },
    },
  });
}
