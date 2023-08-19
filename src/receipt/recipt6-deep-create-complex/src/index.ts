// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// import { Gender, AdvertiserType, AdvertismentType } from '@prisma/client';

// async function createDummyUser() {
//   await prisma.user.deleteMany();
//   let user1 = await prisma.user.create({
//     data: {
//       email: 'dummyuser1@example.com',
//       name: 'User 1',
//       gender: Gender.MALE,
//       phoneNumber: '123-456-7890',
//       advertiserType: AdvertiserType.AGENT,
//     },
//   });
//   console.log(user1);

//   let user2 = await prisma.user.create({
//     data: {
//       email: 'dummyuser2@example.com',
//       name: 'User 2',
//       gender: Gender.FEMALE,
//       phoneNumber: '987-654-3210',
//       advertiserType: AdvertiserType.CURRENT_FLATMATE,
//       // managerId: user1.id,
//       manager: {
//         create: {
//           email: 'dummyuser3@example.com',
//           name: 'User 3',
//           gender: Gender.FEMALE,
//           phoneNumber: '987-654-3210',
//           advertiserType: AdvertiserType.CURRENT_FLATMATE,
//         },
//       },
//     },
//   });
//   console.log(user2);
//   return [user1.id];
// }

// async function createDummyPost() {
//   await prisma.post.create({
//     data: {
//       title: 'Amazing Apartment',
//       description: 'Spacious apartment with great views',
//       moveInFrom: new Date(),
//       user: {
//         create: {
//           email: 'myemail@email.com',
//           name: 'My Name',
//           gender: Gender.MALE,
//           phoneNumber: '987-654-3210',
//           advertiserType: AdvertiserType.LIVE_IN_LANDLORD,
//         },
//       },
//       preferredLocation: {
//         create: {
//           longitude: 1,
//           latitude: 1,
//           radius: 1,
//         },
//       },
//       preferredAmenities: {
//         create: [
//           {
//             name: 'Swimming Pool',
//           },
//           {
//             name: 'Gym',
//           },
//         ],
//       },
//       photos: {
//         create: [
//           {
//             url: 'https://url.to.photo.com',
//           },
//           {
//             url: 'https://url.to.photo.com',
//           },
//         ],
//       },
//     },
//   });
// }

// async function createDummyBedAdvertisment() {
//   await prisma.bedAdvertisment.create({
//     data: {
//       // user: {
//       //   create: {
//       //     email: "myemail3@email.com",
//       //     name: "My Name",
//       //     gender: Gender.MALE,
//       //     phoneNumber: "987-654-3210",
//       //     advertiserType: AdvertiserType.LIVE_IN_LANDLORD,
//       //   },
//       // },

//       userId: '939cf890-40da-4095-95d7-fa293d8da7de',

//       // user: {
//       //   connect: {
//       //     id: "",
//       //   },
//       // },

//       totalBeds: 1,

//       existingRoommates: {
//         create: {
//           malesCount: 2,
//           femalesCount: 1,
//           minAge: 20,
//           maxAge: 40,
//           professionals: true,
//           students: false,
//         },
//         // connect: {
//         //   id: 'b577adde-04da-4ef0-91dd-a0ad14abfc0b',
//         // },
//       },

//       bedPreference: {
//         create: {
//           minAge: 18,
//           maxAge: 35,
//           females: true,
//           males: true,
//           professionals: true,
//           students: true,
//           smokers: false,
//           couples: false,
//           pets: false,
//           vegetarians: true,
//         },
//       },

//       advertismentDetail: {
//         create: {
//           address: '123 Main St',
//           floor: '3rd floor',
//           availableFrom: new Date(),
//           minimumStay: new Date(),
//           maximumStay: new Date(),
//           scheduleVisits: true,
//           title: 'Cozy Bed Space',
//           description: 'Comfortable bed in a shared apartment',
//           advertismentType: AdvertismentType.BED,
//           amenities: {
//             create: [
//               {
//                 name: 'FURNISHED',
//               },
//             ],
//           },
//           photos: {
//             create: [
//               {
//                 url: 'URL_TO_PHOTO_1',
//               },
//               {
//                 url: 'URL_TO_PHOTO_2',
//               },
//             ],
//           },
//         },
//       },
//     },
//   });
// }

// async function updateDummyBedAdvertisment() {
//   await prisma.bedAdvertisment.update({
//     where: { id: 'some-id' },
//     data: {
//       totalBeds: 2,
//       existingRoommates: {
//         update: {
//           data: {
//             malesCount: 10,
//             femalesCount: 10,
//           },
//         },
//       },
//       advertismentDetail: {
//         update: {
//           photos: {
//             update: {
//               where: { id: 'some-id' },
//               data: {},
//             },
//             delete: [{ id: 'some-id' }, { id: 'another-id' }],
//           },
//           visitAvailabilities: {
//             delete: {
//               id: 'some-id',
//             },
//             update: {
//               where: { id: 'some-id' },
//               data: { to: new Date() },
//             },
//           },
//         },
//       },
//     },
//   });
// }

// createDummyUser();
// // createDummyPost();
// // createDummyBedAdvertisment();
// // updateDummyBedAdvertisment();

// // ----------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------

// // Chat-GPT Example
// // async function createEmployeeWithManagerAndUser() {
// //   try {
// //     const managerId = "existingManagerId"; // Replace with the actual manager ID

// //     const newEmployee = await prisma.employee.create({
// //       data: {
// //         employeeId: "newEmployeeId", // Replace with the desired new employee ID
// //         employeeNo: "newEmployeeNo",
// //         employeeType: "PRACTICE_EMPLOYEE",

// //         // managerId: managerId, // Connect to the existing manager
// //         manager: {
// //           // connect: {
// //           //   managerId: "",
// //           // },
// //           connect: {
// //             employeeId: "",
// //           },
// //         },

// //         user: {
// //           create: {
// //             userId: "newUserId", // Replace with the desired new user ID
// //             username: "newUsername",
// //             password: "newPassword",
// //           },
// //         },
// //       },
// //       include: {
// //         user: true,
// //       },
// //     });

// //     console.log("New Employee with User:", newEmployee);
// //   } catch (error) {
// //     console.error("Error:", error);
// //   } finally {
// //     await prisma.$disconnect();
// //   }
// // }

// // createEmployeeWithManagerAndUser();

// // ----------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------

// // class CreateOrderableDto {
// //   name: string;

// //   patient: CreatePatientDict | ConnectPatientDict;
// //   assignedBy: CreateAssignedByDict;
// // }

// // class CreatePatientDict {
// //   create: CreatePatientDto;
// //   connect?: never;
// // }

// // class ConnectPatientDict {
// //   connect: { id: string };
// //   create?: never;
// // }

// // class CreatePatientDto {
// //   name: string;
// // }

// // class CreateAssignedByDict {
// //   create: CreateAssignedByDto;
// //   connect: { id: string };
// // }

// // class CreateAssignedByDto {
// //   name: string;
// // }

// // async function main() {
// //   // One Level Deep create with JSON
// //   prisma.orderable.create({
// //     data: {
// //       name: "Body Compostion Analysis",
// //       assignedBy: {
// //         create: {
// //           name: "Ahmad",
// //         },
// //         connect: {
// //           id: "",
// //         },
// //       },
// //       patient: {
// //         connect: {
// //           id: "",
// //         },
// //       },
// //       Resultable: {
// //         connect: [{ id: "" }, { id: "" }],
// //         create: {
// //           name: "",
// //         },
// //       },
// //       Schedule: {
// //         connect: [{ id: "" }, { id: "" }],
// //         create: [{ time: new Date() }, { time: new Date() }],
// //       },
// //     },
// //   });

// //   // Using a DTO to create
// //   let dto = new CreateOrderableDto();
// //   dto.patient = {
// //     // Only one of create or connect needs to be provided

// //     create: {
// //       name: "Usama",
// //     },

// //     // connect: {
// //     //   id: "",
// //     // },
// //   };

// //   prisma.orderable.create({
// //     data: dto,
// //   });

// //   // Two Level Deep create with JSON (unrealistic example)
// //   prisma.resultable.create({
// //     data: {
// //       name: "Weight",
// //       orderable: {
// //         create: {
// //           name: "Body Compostion Analysis",
// //           assignedBy: {
// //             create: {
// //               name: "Ahmad",
// //             },
// //           },
// //           patient: {
// //             connect: { id: "" },
// //           },
// //           Device: {
// //             create: {
// //               model: "",
// //             },
// //           },
// //         },
// //       },
// //     },
// //   });
// // }

// // main();

// // ----------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------

// // async function main() {
// //   prisma.employee.create({
// //     data: {
// //       manager: {
// //         create: {
// //           employeeId: "",
// //           employeeNo: "",
// //           employeeType: EmployeeType.CHI_PAK,
// //           user: {
// //             connect: {
// //               userId: "",
// //             },
// //           },
// //           manager: {
// //             connect: {
// //               employeeId: "",
// //             },
// //           },
// //         },
// //       },
// //       employeeId: "",
// //       employeeNo: "",
// //       employeeType: EmployeeType.CHI_US,
// //       user: {
// //         connect: {
// //           userId: "",
// //         },
// //       },
// //       workers: {
// //         connect: [{ userId: "" }, { userId: "" }],
// //       },
// //     },
// //   });
// // }

// // main();
// //drop database osama;
