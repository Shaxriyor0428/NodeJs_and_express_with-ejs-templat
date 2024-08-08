const axios = require("axios");
const { creatViewPath } = require("../helpers/create_view");

const getEditById = async (req, res) => {
  const id = req.params.id;
  try {
    const userData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const user = userData.data;
    res.render(creatViewPath("edit-post"), {
      title: user.id,
      user,
      packName: "posts",
    });
  } catch (error) {
    console.log("error", error);
  }
};

const putPostId = async (req, res) => {
  try {
    const editId = req.params.id;
    const { userId, ids, title, body } = req.body;
    const userData = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${editId}`,
      {
        userId,
        ids,
        title,
        body,
      }
    );
    const user = userData.data;
    res.render(creatViewPath("royxat"), {
      title: "posts",
      user,
      packName: "posts",
    });
  } catch (error) {
    console.log("Xatolik", error);
  }
};

module.exports = {
  getEditById,
  putPostId,
};
