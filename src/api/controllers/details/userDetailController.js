const { getDummyUserDetailData } = require("../../../utils/dummyData");

const getReportUserDetailData = (req, res) => {
  const dummyDetailData = getDummyUserDetailData();
  res.json(dummyDetailData);
  console.log("Succeeded get user detail data");
};

module.exports = {
  getReportUserDetailData,
};
