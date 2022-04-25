const { set } = require("express/lib/application");
const issue = require("../models/issue");
const projectDet = require("../models/projectDetails");
// report page
module.exports.reportPage = function (req, res) {
  // console.log();
  projectDet.findById(req.params.porjectId, function (err, projectDet) {
    return res.render("issuePage", {
      projectid: req.params.porjectId,
      projectDet: projectDet,
    });
  });
};

module.exports.createIssue = async function (req, res) {
  // console.log("called==>", req.body);
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
  // console.log(projectDet);
  //TODO:NEED to change nd udate
  return res.redirect("back");
};

module.exports.filterissue = async function (req, res) {
  // console.log("inissue", req.body);

  let projectData = await projectDet
    .findById(req.body.projectId)
    .populate("issue");
  let filterdata = new Set();

  if (req.body.searchAuthor) {
    // console.log(" autor search");
    for (i of projectData.issue) {
      if (i.author === req.body.searchAuthor) console.log("author", i.author);
      filterdata.add(i);

      break;
    }
  } else {
    for (i of projectData.issue) {
      //console.log("->", i.labels);
      for (j of i.labels) {
        console.log(j);
        if (j === req.body.label1 || j === req.body.label2) {
          // console.log("data is-->", i);

          filterdata.add(i);
        }
      }
    }
  }
  // console.log("filter arr", filterdata);
  let issueRleToPro = await issue.find({ projectRef: req.body.projectId });
  let uniqueArr = [];
  for (i of issueRleToPro) {
    for (j of i.labels) {
      uniqueArr.push(j);
    }
  }
  let uniset = [...new Set(uniqueArr)];
  // console.log("sada", uniset);

  return res.render("projectDEtailPage", {
    filterdata: filterdata,
    labelsonCurr: uniset,
    showProjectDet: false,
    project: projectData,
    issue: [],
  });
};

// search by title and description
module.exports.searchTeiNDesc = async function (req, res) {
  console.log("search=-=-", req.body);
  let searchData = req.body.serchBtTitNDesc;
  let issusDatas = await projectDet
    .findById(req.body.projectId)
    .populate("issue");
  // console.log("adas++", issusDatas.issue);
  filterarr = issusDatas.issue.filter(function (ci, index, arr) {
    // console.log("ci", ci.description.match(searchData));
    return ci.description.match(searchData);
  });
  searchauthor = issusDatas.issue.filter(function (ci, index, arr) {
    // console.log("ci", ci.description.match(searchData));
    return ci.author.match(searchData);
  });
  descAndAuthDet = [...filterarr, ...searchauthor];
  // console.log("final data", descAndAuthDet);
  //issue.find({'':{$regex:'.*'+}})
  if (req.xhr) {
    // console.log("success");
    return res.status(200).json({
      descAndAuthDet: descAndAuthDet,
      message: "success",
    });
  }
};
