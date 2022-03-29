const issue = require("../models/issue");
const projectDet = require("../models/projectDetails");
// report page
module.exports.reportPage = function (req, res) {
  console.log();
  projectDet.findById(req.params.porjectId, function (err, projectDet) {
    return res.render("issuePage", {
      projectid: req.params.porjectId,
      projectDet: projectDet,
    });
  });
};

module.exports.createIssue = async function (req, res) {
  console.log("called==>", req.body);
  let newIssue = await issue.create({
    title: req.body.title,
    description: req.body.desc,
    author: req.body.author,
    projectRef: req.body.projectRef,
  });
  let project = await projectDet.findById(req.body.projectRef);

  datatobepushed = req.body.label.split(",");
  for (let i = 0; i < datatobepushed.length - 1; i++) {
    newIssue.labels.push(datatobepushed[i]);
  }
  newIssue.save();

  project.issue.push(newIssue);
  project.save();
  console.log(projectDet);
  //TODO:NEED to change nd udate
  return res.redirect("back");
};

module.exports.filterissue = async function (req, res) {
  console.log("inissue", req.body);
  let projectData = await projectDet.findById(req.body.projectId);
  console.log("project is", projectData);
};
