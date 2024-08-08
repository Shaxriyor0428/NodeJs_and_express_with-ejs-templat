const express = require("express");
const {
  getUsers,
  getUserById,
  addUser,
  deleteUserById,
  getaddUser,
  editById,
  putEdit,
} = require("../controllers/users");

const router = express.Router();

router.get("/users", getUsers);
// req.body , req.params, req.query
router.get("/user/:id", getUserById);
router.get("/add-user", getaddUser);
// Endpoint yoki rooute
router.post("/add-user", addUser);
router.delete("/user/:id", deleteUserById);

router.get("/edit/:id", editById);

// CRUD Create (post), Read(get), Update(put,patch),Delete(delete);

router.put("/edit/:id", putEdit);

module.exports = router;
