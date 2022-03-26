const mongoose = require("mongoose");
const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    labels: [],
  },
  {
    timestamps: true,
  }
);
const IssueSchema = mongoose.model("issueSchema", issueSchema);
module.exports = IssueSchema;
