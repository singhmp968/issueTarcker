const ProjectList = require("../models/projectDetails");
module.exports.createProjectform = function (req, res) {
  res.render("createProjectPage");
};
module.exports.create = function (req, res) {
  console.log(req.body);
  ProjectList.create(
    {
      projectname: req.body.projectname,
      author: req.body.author,
      description: req.body.description,
    },
    function (err, project) {
      if (err) {
        console.log("error ->", err);
        return;
      }
      console.log("project is create sucess fully ", project);
      return res.redirect("/");
    }
  );
};
