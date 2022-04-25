const ProjectList = require("../models/projectDetails");
const issue = require("../models/issue");
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
module.exports.issue = async function (req, res) {
  // console.log("dasda", req.query.projectid);

  let project = await ProjectList.findById(req.query.projectid);
  let issueRleToPro = await issue.find({ projectRef: req.query.projectid });
  // console.log("project--->", issueRleToPro);
  let uniqueArr = [];
  for (i of issueRleToPro) {
    for (j of i.labels) {
      uniqueArr.push(j);
    }
  }
  let uniset = [...new Set(uniqueArr)];
  // console.log("sada", uniset);
  //issueArr.push(issueRleToPro);
  return res.render("projectDEtailPage", {
    project: project,
    issue: issueRleToPro,
    labelsonCurr: uniset,
    showProjectDet: true,
  });
};
