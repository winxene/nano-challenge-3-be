const {
  getDummyUserDetailData,
  modifyCoordinates,
  updateStatusForAllUsers,
} = require("../../utils/dummyData");
const dummyDetailData = getDummyUserDetailData(); // Fetch the dummy data here

// Function to send user coordinates
const sendUserCoordinates = (socket, userID, latitude, longitude) => {
  const user = dummyDetailData.find((user) => user.userID === userID);
  if (!user) {
    console.error(`User with userID ${userID} not found.`);
    return;
  }

  // Update the user's coordinates
  user.geolocationCoordinates.latitude = latitude;
  user.geolocationCoordinates.longitude = longitude;

  // Emit the updated coordinates to the connected socket
  socket.emit("user-coordinates", {
    userID: user.userID,
    geolocationCoordinates: user.geolocationCoordinates,
  });
};

const userCoordinatesHandler = (socket) => {
  console.log("a user connected");

  // Handle user coordinates update event
  socket.on("update-coordinates", (data) => {
    console.log("received user coordinates update:");
    console.log(data);

    // Check if the received data is in the correct format
    if (
      !data ||
      !data.userID ||
      !data.geolocationCoordinates ||
      !data.geolocationCoordinates.latitude ||
      !data.geolocationCoordinates.longitude
    ) {
      console.error("Invalid user coordinates update format.");
      return;
    }

    // Process the received data and call sendUserCoordinates function
    try {
      const { userID, geolocationCoordinates } = data;
      sendUserCoordinates(
        socket,
        userID,
        geolocationCoordinates.latitude,
        geolocationCoordinates.longitude
      );
      console.log("User coordinates updated successfully!");
    } catch (error) {
      console.error(error.message);
    }
  });

  // Emit user coordinates for user IDs 1, 2, and 3 every 10 seconds
  setInterval(() => {
    const usersToEmit = [1, 2, 3];
    usersToEmit.forEach((userID) => {
      const user = dummyDetailData.find((user) => user.userID === userID);
      if (user) {
        socket.emit("user-coordinates", {
          userID: user.userID,
          geolocationCoordinates: user.geolocationCoordinates,
        });
      }
    });
  }, 10000);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
};

module.exports = userCoordinatesHandler;
