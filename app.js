const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const userRout = require("./routes/users");
const MyJobs = require("./routes/jobs");
const Gallery = require("./routes/gallery");
const contact = require("./routes/contact");
const error = require("./routes/error");
const allpost = require("./routes/allposts");
const royxat = require("./routes/royxat");
const yangi_post = require("./routes/yangi-post");
const edit_post = require("./routes/edit_post");
const home = require("./routes/home");


const app = express();
app.set("views engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Frontdan kelgan malumotni oqib beradi yoki tutib beradi
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("styles"));
app.use(express.static("images"));
app.use(methodOverride("_method"));





app.use(home);
app.use(allpost);
app.use(royxat);
app.use(yangi_post);
app.use(userRout);
app.use(MyJobs);
app.use(Gallery);
app.use(contact);



app.use(edit_post);

app.use(error);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
