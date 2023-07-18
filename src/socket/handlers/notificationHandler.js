const { getDummyNotificationData } = require("../../utils/dummyData");

const notificationHandler = (socket) => {
  const dummyNotificationsData = getDummyNotificationData();
  socket.emit("report-notifications", dummyNotificationsData);
};

module.exports = notificationHandler;
