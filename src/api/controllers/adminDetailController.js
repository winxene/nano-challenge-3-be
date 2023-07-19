const { getDummyAdminDetailData } = require("../../utils/dummyData");

const getReportAdminDetailData = (req, res) => {
  const dummyDetailData = getDummyAdminDetailData();
  res.json(dummyDetailData);
  console.log("Succeeded get report detail data");
};

module.exports = {
  getReportAdminDetailData,
};
