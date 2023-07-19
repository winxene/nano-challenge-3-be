const { getDummyUserDetailData } = require("../../utils/dummyData");
const { getDummyAdminDetailData } = require("../../utils/dummyData");
const dummyAdminDetailData = getDummyAdminDetailData(); // Fetch the dummy data here
const dummyDetailData = getDummyUserDetailData(); // Fetch the dummy data here
//note that the report notification is in array, to trigger which notification lights up, refer to the admin ID

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;
  return distance;
}

// Function to get the nearest available admin as adminID for a given user
const getNearestAdminID = (user, dummyAdminDetailData) => {
  if (user.status === "requesting") {
    let nearestAdminID = null;
    let nearestDistance = Infinity;

    dummyAdminDetailData.forEach((admin) => {
      if (admin.status === "available") {
        const adminDistance = calculateDistance(
          user.geolocationCoordinates.latitude,
          user.geolocationCoordinates.longitude,
          admin.geolocationCoordinates.latitude,
          admin.geolocationCoordinates.longitude
        );

        if (adminDistance < nearestDistance) {
          nearestAdminID = admin.adminID;
          nearestDistance = adminDistance;
        }
      }
    });

    return nearestAdminID;
  }
  return null;
};

const generateNotification = (dummyDetailData) => {
  const notificationsData = [];
  dummyDetailData.forEach((user) => {
    const adminID = getNearestAdminID(user, dummyAdminDetailData);
    if (adminID !== null) {
      const title = `${user.name} needs help`;
      const description = `${user.name} needs help near ${user.location}`;

      const notification = {
        adminID: adminID,
        userID: user.userID,
        title: title,
        description: description,
        accepted: false,
      };

      notificationsData.push(notification);
    }
  });

  return notificationsData;
};

const notificationHandler = (socket) => {
  // Function to trigger notificationHandler every 1 minute
  setInterval(() => {
    const notificationsData = generateNotification(dummyDetailData);

    if (notificationsData.length > 0) {
      socket.emit("report-notifications", notificationsData);
    }
  }, 6000);
};

module.exports = notificationHandler;
