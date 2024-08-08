const axios = require("axios");
const { creatViewPath } = require("../helpers/create_view");

const getUsers = async (req, res) => {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    const users = await response.data;
    res.render(creatViewPath("users"), {
      title: "users",
      users,
      packName: "users",
    });
  } catch (error) {
    console.log("Xatolik", error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const users = await response.data;
    res.render(creatViewPath("user"), {
      title: "users",
      user: users,
      packName: "users",
    });
  } catch (error) {
    console.log("Xatolik", error);
  }
};

const getaddUser = async (req, res) => {
  res.render(creatViewPath("add-user"), {
    title: "Yangi foydaluvchi",
    packName: "users",
  });
};

const addUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const userData = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      {
        username,
        email,
      }
    );
    const user = userData.data;
    res.render(creatViewPath("user"), {
      title: "Users",
      user,
      packName: "users",
    });
  } catch (error) {
    console.log("Xatoalr", error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = userData.data;

    res.sendStatus(204);
  } catch (error) {
    console.log("Xatolik", error);
  }
};

const editById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    const user = userData.data;
    res.render(creatViewPath("edit-user"), {
      title: user.username,
      user,
      packName: "users",
    });
  } catch (error) {
    console.log("Xatolik", error);
    res.status(500).send("Serverda xatolik yuz berdi");
  }
};

const putEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, name, email, phone } = req.body;

    const userData = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        username,
        name,
        phone,
        email,
      }
    );

    const user = userData.data;
    res.render(creatViewPath("user"), {
      title: user.username,
      user,
      packName: "users",
    });
  } catch (error) {
    console.log("Xatolik", error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  getaddUser,
  addUser,
  deleteUserById,
  editById,
  putEdit,
};
