const { getDummyReportData } = require("../../utils/dummyData");

const reportHandler = (socket) => {
  console.log("a user connected");

  const interval = setInterval(() => {
    const dummyReport = getDummyReportData();
    dummyReport.forEach((report) => {
      socket.emit("reports", report);
    });
  }, 5000);

  socket.on("reports", (data) => {
    console.log("reports added to the database");
    console.log(data);
  });

  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("user disconnected");
  });
};

module.exports = reportHandler;
