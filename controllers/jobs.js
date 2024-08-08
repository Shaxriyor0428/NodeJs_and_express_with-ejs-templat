const {creatViewPath} =require("../helpers/create_view")

const MyJobs = (req, res) => {
  res.render(creatViewPath("jobs"), { title: "jobs", packName: "jobs" });
  
};

module.exports = {
    MyJobs
}