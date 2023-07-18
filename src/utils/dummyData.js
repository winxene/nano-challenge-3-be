let dummyReport = [
  {
    id: 1,
    GeolocationCoordinates: {
      latitude: -6.244932845946446,
      longitude: 106.79802070826771,
    },
    pinType: "lansia",
  },
  {
    id: 1,
    GeolocationCoordinates: {
      latitude: -6.2449373429657244,
      longitude: 106.79821898654653,
    },
    pinType: "lansia",
  },
  {
    id: 1,
    GeolocationCoordinates: {
      latitude: -6.24356169422578,
      longitude: 106.79824773542873,
    },
    pinType: "lansia",
  },
  {
    id: 1,
    GeolocationCoordinates: {
      latitude: -6.243745787357868,
      longitude: 106.79798496354378,
    },
    pinType: "lansia",
  },
];

//dummy detail data for testing in JSON format
let dummyDetailData = [
  {
    id: 1,
    name: "Asep",
    description: "Asep is Lansia",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Boodi",
    description: "Boodi is Disabled",
    image: "https://via.placeholder.com/150",
  },
];

//dummy notification data for testing in JSON format
let dummyNotificationsData = [
  {
    title: "Asep needs help",
    description: "Asep needs help near toilet at MRT Dukuh Atas",
  },
  {
    title: "Asep needs help",
    description: "Asep needs help near toilet at MRT Dukuh Atas",
  },
];

const getDummyDetailData = () => dummyDetailData;
const getDummyReportData = () => dummyReport;
const getDummyNotificationData = () => dummyNotificationsData;

module.exports = {
  getDummyDetailData,
  getDummyReportData,
  getDummyNotificationData,
};
