import { PrismaClient } from '@prisma/client';

import { AdvertismentType } from '@prisma/client';

export async function createDummyBedAdvertisment(prisma: PrismaClient) {
  let bedAd = await prisma.bedAdvertisment.create({
    data: {
      id: 'bedAd1id',
      // user: {
      //   create: {
      //     email: "myemail3@email.com",
      //     name: "My Name",
      //     gender: Gender.MALE,
      //     phoneNumber: "987-654-3210",
      //     advertiserType: AdvertiserType.LIVE_IN_LANDLORD,
      //   },
      // },

      userId: 'user1id',

      // user: {
      //   connect: {
      //     id: "",
      //   },
      // },

      totalBeds: 1,

      existingRoommates: {
        create: {
          id: 'roomate1id',
          malesCount: 2,
          femalesCount: 1,
          minAge: 20,
          maxAge: 40,
          professionals: true,
          students: false,
        },
        // connect: {
        //   id: 'b577adde-04da-4ef0-91dd-a0ad14abfc0b',
        // },
      },

      bedPreference: {
        create: {
          id: 'bedpref1id',
          minAge: 18,
          maxAge: 35,
          females: true,
          males: true,
          professionals: true,
          students: true,
          smokers: false,
          couples: false,
          pets: false,
          vegetarians: true,
        },
      },

      advertismentDetail: {
        create: {
          id: 'adDetail1id',
          address: '123 Main St',
          floor: '3rd floor',
          availableFrom: new Date(),
          minimumStay: new Date(),
          maximumStay: new Date(),
          scheduleVisits: true,
          title: 'Cozy Bed Space',
          description: 'Comfortable bed in a shared apartment',
          advertismentType: AdvertismentType.BED,
          visitAvailabilities: {
            create: [
              {
                id: 'visit-avail1id',
                from: new Date(),
                to: new Date(),
                // adDetail1id: ""
              },
              {
                id: 'visit-avail2id',
                from: new Date(),
                to: new Date(),
                // adDetail1id: ""
              },
            ],
          },
          amenities: {
            create: [
              {
                id: 'new-amenity1id',
                name: 'FURNISHED',
              },
            ],
          },
          photos: {
            create: [
              {
                id: 'newPhoto1id',
                url: 'URL_TO_PHOTO_1',
              },
              {
                id: 'newPhoto2id',
                url: 'URL_TO_PHOTO_2',
              },
              {
                id: 'newPhoto3id',
                url: 'URL_TO_PHOTO_2',
              },
            ],
          },
        },
      },
    },
  });
}
