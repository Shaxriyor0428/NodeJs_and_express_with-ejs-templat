const { creatViewPath } = require("../helpers/create_view");

const Gallery = (req, res) => {
  res.render(creatViewPath("gallery"), {
    title: "gallery",
    packName: "gallery",
  });
};

module.exports = {
  Gallery,
};
