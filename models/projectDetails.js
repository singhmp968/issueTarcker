const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    projectname: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const ProjectList = mongoose.model("ProjectList", projectSchema);
module.exports = ProjectList;
