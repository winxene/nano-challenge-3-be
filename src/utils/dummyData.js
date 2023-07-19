//note: the latitude range is between -6.2449373429657244 to -6.24356169422578
// the longitude range is between 106.79798496354378 to 106.79824773542873

// if the code fully works, delete this dummy report
let dummyReport = [
  {
    userID: 1,
    geolocationCoordinates: {
      latitude: -6.244932845946446,
      longitude: 106.79802070826771,
    },
  },
  {
    userID: 1,
    geolocationCoordinates: {
      latitude: -6.2449373429657244,
      longitude: 106.79821898654653,
    },
  },
  {
    userID: 1,
    geolocationCoordinates: {
      latitude: -6.24356169422578,
      longitude: 106.79824773542873,
    },
  },
  {
    userID: 1,
    geolocationCoordinates: {
      latitude: -6.243745787357868,
      longitude: 106.79798496354378,
    },
  },
];

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
    status: "assisted", //assisted, requesting, not available
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
    isHelped: "requesting", //assisted, requesting, not available
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
    status: "available", //available, on duty, not available
    adminImage: "https://via.placeholder.com/150",
  },
  {
    adminID: 2,
    name: "Admin 2",
    email: "admin2@email.com",
    password: "admin123",
    status: "available", //available, on duty, not available
    adminImage: "https://via.placeholder.com/150",
  },
];

const getDummyUserDetailData = () => dummyDetailData;
const getDummyAdminDetailData = () => dummyAdminDetailData;
const getDummyReportData = () => dummyReport;

module.exports = {
  getDummyUserDetailData,
  getDummyReportData,
  getDummyAdminDetailData,
};
