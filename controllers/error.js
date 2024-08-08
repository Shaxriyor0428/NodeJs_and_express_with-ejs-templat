const {creatViewPath} =require("../helpers/create_view");

const ErrorUsers = (req, res) => {
  res.render(creatViewPath("error404"), { title: "error", packName: "error" });
};


module.exports = {
  ErrorUsers,
};