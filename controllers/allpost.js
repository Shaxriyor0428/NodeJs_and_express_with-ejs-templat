const axios = require('axios');
const { creatViewPath } = require("../helpers/create_view");

const allPosts = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data;

    res.render(creatViewPath("allPosts"), {
      title: "Posts",
      data,
      packName: "posts",
    });
  } catch (error) {
    console.log("Malumot kelishida xatolik!", error);
  }
};

module.exports = {
  allPosts,
};
