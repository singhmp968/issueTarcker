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
    issue: [
      {
        type: mongoose.Schema.Types.ObjectId, // here we are refering to object id
        ref: "issueSchema",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const ProjectList = mongoose.model("ProjectList", projectSchema);
module.exports = ProjectList;
