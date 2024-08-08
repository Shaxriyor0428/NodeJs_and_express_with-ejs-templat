const { creatViewPath } = require("../helpers/create_view");

const homeRout = (req, res) => {
  res.render(creatViewPath("index"), { title: "home", packName: "main" });
};
module.exports = {
  homeRout,
};
