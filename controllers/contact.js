const {creatViewPath} = require('../helpers/create_view');
const axios = require('axios');

const Contacts = async (req, res) => {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    const users = response.data;
    res.render(creatViewPath("contact"), {
      title: "contact",
      users,
      packName: "contact",
    });
  } catch (error) {
    console.log("Xatolik",error);
  }
};

module.exports = {
    Contacts,
};