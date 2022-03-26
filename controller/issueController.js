const issue = require("../models/issue");
module.exports.createIssue = function (req, res) {
  console.log("called==>", req.body);
  issue.create(
    {
      title: req.body.title,
      description: req.body.desc,
      author: req.body.author,
    },
    function (err, newIssue) {
      if (err) {
        console.log(err);
        return;
      }
      newIssue.labels.push(req.body.label);
      console.log(newIssue);
      //TODO:NEED to change nd udate
      return res.redirect("back");
    }
  );
};
