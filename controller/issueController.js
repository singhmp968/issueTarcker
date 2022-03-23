module.exports.createIssue = function (req, res) {
  console.log("called==>", req.body);
  return res.redirect("/");
};
