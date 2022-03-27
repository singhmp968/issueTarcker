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

module.exports.createIssue = function (req, res) {
  console.log("called==>", req.body);
  issue.create(
    {
      title: req.body.title,
      description: req.body.desc,
      author: req.body.author,
      projectRef: req.body.projectRef,
    },
    function (err, newIssue) {
      if (err) {
        console.log(err);
        return;
      }
      datatobepushed = req.body.label.split(",");
      for (let i = 0; i < datatobepushed.length - 1; i++) {
        newIssue.labels.push(datatobepushed[i]);
      }

      newIssue.save();
      console.log(newIssue);
      //TODO:NEED to change nd udate
      return res.redirect("back");
    }
  );
};
