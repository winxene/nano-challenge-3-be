const { getDummyDetailData } = require("../../utils/dummyData");

const getReportDetailData = (req, res) => {
  const dummyDetailData = getDummyDetailData();
  res.json(dummyDetailData);
  console.log("Succeeded get report detail data");
};

module.exports = {
  getReportDetailData,
};
