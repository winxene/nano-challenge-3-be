//note: the latitude range is between -6.2449373429657244 to -6.24356169422578
// the longitude range is between 106.79798496354378 to 106.79824773542873

//dummy detail data for testing in JSON format
let dummyDetailData = [
  {
    userID: 1,
    name: "Asep",
    email: "asep@email.com",
    password: "asep123",
    pinType: "lansia",
    description: "Asep is Lansia",
    location: "Concourse",
    status: "assisted", //fine, assisted, requesting, not available
    userImage: "https://via.placeholder.com/150",
    locationImage: "https://via.placeholder.com/150",
    geolocationCoordinates: {
      latitude: -6.243745787357868,
      longitude: 106.79798496354378,
    },
  },
  {
    userID: 2,
    name: "Tina",
    email: "tina@email.com",
    password: "tina123",
    pinType: "ibu hamil",
    description: "Tina is Pregnant",
    location: "Toilet",
    status: "requesting", //fine, assisted, requesting, not available
    userImage: "https://via.placeholder.com/150",
    locationImage: "https://via.placeholder.com/150",
    geolocationCoordinates: {
      latitude: -6.2449373429657244,
      longitude: 106.79821898654653,
    },
  },
];

//dummy detail data for testing in JSON format
let dummyAdminDetailData = [
  {
    adminID: 1,
    name: "Admin 1",
    email: "admin1@email.com",
    password: "admin123",
    status: "on Duty", //available, on duty, not available
    adminImage: "https://via.placeholder.com/150",
    geolocationCoordinates: {
      latitude: -6.2449373429657244,
      longitude: 106.79821898654653,
    },
  },
  {
    adminID: 2,
    name: "Admin 2",
    email: "admin2@email.com",
    password: "admin123",
    status: "available", //available, on duty, not available
    adminImage: "https://via.placeholder.com/150",
    geolocationCoordinates: {
      latitude: -6.2449373429657274,
      longitude: 106.7982189865466,
    },
  },
  {
    adminID: 3,
    name: "Admin 3",
    email: "admin3@email.com",
    password: "admin123",
    status: "available", //available, on duty, not available
    adminImage: "https://via.placeholder.com/150",
    geolocationCoordinates: {
      latitude: -6.2449373429657244,
      longitude: 106.79821898654653,
    },
  },
];

const getDummyUserDetailData = () => dummyDetailData;
const getDummyAdminDetailData = () => dummyAdminDetailData;

module.exports = {
  getDummyUserDetailData,
  getDummyAdminDetailData,
};
