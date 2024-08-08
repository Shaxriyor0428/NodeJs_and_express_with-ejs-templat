const { creatViewPath } = require("../helpers/create_view");
const axios = require("axios");

const getNewPost = (req, res) => {
  res.render(creatViewPath("/yangi-post"), {
    title: "Yangi foydaluvchi",
    packName: "posts",
  });
};

const addNewPost = async (req, res) => {
  const { title, id } = req.body;
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        title,
        id,
      }
    );
    const user = response.data;
    res.render(creatViewPath("royxat"), {
      title: "Q'shilgan malumot",
      user,
      packName: "posts",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getNewPost,
  addNewPost,
};
