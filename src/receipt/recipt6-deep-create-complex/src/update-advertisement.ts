import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

async function createDummyPost() {
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

async function createDummyBedAdvertisment(adUserId: string) {
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

async function updateDummyBedAdvertisment() {
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

async function main() {
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
  let user1 = await createDummyUser();
  await createDummyPost();
  await createDummyBedAdvertisment(user1.id);
  await updateDummyBedAdvertisment();
}

main();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// Chat-GPT Example
// async function createEmployeeWithManagerAndUser() {
//   try {
//     const managerId = "existingManagerId"; // Replace with the actual manager ID

//     const newEmployee = await prisma.employee.create({
//       data: {
//         employeeId: "newEmployeeId", // Replace with the desired new employee ID
//         employeeNo: "newEmployeeNo",
//         employeeType: "PRACTICE_EMPLOYEE",

//         // managerId: managerId, // Connect to the existing manager
//         manager: {
//           // connect: {
//           //   managerId: "",
//           // },
//           connect: {
//             employeeId: "",
//           },
//         },

//         user: {
//           create: {
//             userId: "newUserId", // Replace with the desired new user ID
//             username: "newUsername",
//             password: "newPassword",
//           },
//         },
//       },
//       include: {
//         user: true,
//       },
//     });

//     console.log("New Employee with User:", newEmployee);
//   } catch (error) {
//     console.error("Error:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// createEmployeeWithManagerAndUser();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// class CreateOrderableDto {
//   name: string;

//   patient: CreatePatientDict | ConnectPatientDict;
//   assignedBy: CreateAssignedByDict;
// }

// class CreatePatientDict {
//   create: CreatePatientDto;
//   connect?: never;
// }

// class ConnectPatientDict {
//   connect: { id: string };
//   create?: never;
// }

// class CreatePatientDto {
//   name: string;
// }

// class CreateAssignedByDict {
//   create: CreateAssignedByDto;
//   connect: { id: string };
// }

// class CreateAssignedByDto {
//   name: string;
// }

// async function main() {
//   // One Level Deep create with JSON
//   prisma.orderable.create({
//     data: {
//       name: "Body Compostion Analysis",
//       assignedBy: {
//         create: {
//           name: "Ahmad",
//         },
//         connect: {
//           id: "",
//         },
//       },
//       patient: {
//         connect: {
//           id: "",
//         },
//       },
//       Resultable: {
//         connect: [{ id: "" }, { id: "" }],
//         create: {
//           name: "",
//         },
//       },
//       Schedule: {
//         connect: [{ id: "" }, { id: "" }],
//         create: [{ time: new Date() }, { time: new Date() }],
//       },
//     },
//   });

//   // Using a DTO to create
//   let dto = new CreateOrderableDto();
//   dto.patient = {
//     // Only one of create or connect needs to be provided

//     create: {
//       name: "Usama",
//     },

//     // connect: {
//     //   id: "",
//     // },
//   };

//   prisma.orderable.create({
//     data: dto,
//   });

//   // Two Level Deep create with JSON (unrealistic example)
//   prisma.resultable.create({
//     data: {
//       name: "Weight",
//       orderable: {
//         create: {
//           name: "Body Compostion Analysis",
//           assignedBy: {
//             create: {
//               name: "Ahmad",
//             },
//           },
//           patient: {
//             connect: { id: "" },
//           },
//           Device: {
//             create: {
//               model: "",
//             },
//           },
//         },
//       },
//     },
//   });
// }

// main();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// async function main() {
//   prisma.employee.create({
//     data: {
//       manager: {
//         create: {
//           employeeId: "",
//           employeeNo: "",
//           employeeType: EmployeeType.CHI_PAK,
//           user: {
//             connect: {
//               userId: "",
//             },
//           },
//           manager: {
//             connect: {
//               employeeId: "",
//             },
//           },
//         },
//       },
//       employeeId: "",
//       employeeNo: "",
//       employeeType: EmployeeType.CHI_US,
//       user: {
//         connect: {
//           userId: "",
//         },
//       },
//       workers: {
//         connect: [{ userId: "" }, { userId: "" }],
//       },
//     },
//   });
// }

// main();
//drop database osama;
