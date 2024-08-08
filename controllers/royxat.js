const axios = require("axios");
const { creatViewPath } = require("../helpers/create_view");


const royxatShow = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const user = response.data;
    res.render(creatViewPath("royxat"), {
      title: "Yangi user",
      user,
      packName: "posts",
    });
  } catch (error) {
    console.log("Malumot ko'rsatishda xatolik", error);
  }
};


const royxatDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const user = response.data;
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  royxatShow,
  royxatDelete,
};
