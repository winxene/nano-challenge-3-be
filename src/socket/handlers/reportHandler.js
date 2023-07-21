const {
  getDummyUserDetailData,
  getDummyAdminDetailData,
} = require("../../utils/dummyData");

const modifyStatus = (responseJsonString) => {
  // Parse the response JSON string to an object
  const response = JSON.parse(responseJsonString);

  // Get the dummy data
  const dummyAdminDetailData = getDummyAdminDetailData();
  const dummyDetailData = getDummyUserDetailData();

  // Find the admin based on the adminID in the response
  const adminToUpdate = dummyAdminDetailData.find(
    (admin) => admin.adminID === response.adminID
  );

  // Find the user based on the userID in the response
  const userToUpdate = dummyDetailData.find(
    (user) => user.userID === response.userID
  );

  // Check if the admin and user exist
  if (!adminToUpdate || !userToUpdate) {
    throw new Error("Admin or user not found in dummy data.");
  }

  // Update the admin's status to "on duty" if accepted is true, otherwise set it to "available"
  adminToUpdate.status = response.accepted ? "on duty" : "available";

  // Update the user's status to "assisted" if accepted is true, otherwise set it to "requesting"
  userToUpdate.status = response.accepted ? "assisted" : "requesting";

  // If user is accepted, revert back all admins whose status is "contacted" back to "available"
  if (response.accepted) {
    dummyAdminDetailData.forEach((admin) => {
      if (admin.status === "contacted") {
        admin.status = "available";
      }
    });
  } else {
    // Re-emit the modified data if the response is not accepted
    const modifiedData = JSON.stringify({
      adminID: response.adminID,
      userID: response.userID,
      title: `${userToUpdate.name} needs help`,
      description: `${userToUpdate.name} needs help near ${userToUpdate.location}`,
      accepted: response.accepted,
    });
    socket.emit("report-notifications", modifiedData);
  }
};

const reportHandler = (socket) => {
  console.log("a user connected");

  socket.on("report-notifications", (data) => {
    console.log("reports added to the database");
    console.log(data);

    // Process the received data and call modifyStatus function
    try {
      modifyStatus(data); // Assuming the data is in JSON format
      console.log("Status updated successfully!");
    } catch (error) {
      console.error(error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
};

module.exports = reportHandler;
