const path = require("node:path");

const creatViewPath = (page) => {
  return path.join(__dirname, "../views", `${page}.ejs`);
};

module.exports = {
  creatViewPath,
};
