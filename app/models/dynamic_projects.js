// models/DynamicProject.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DynamicProjectSchema = new Schema({
  paragraphs: { type: [String], required: true }, // Array of paragraphs
  imgs: [
    {
      path_url: { type: String, required: true }, // URL of the image
      alt: { type: String, default: "Dynamic Image" }, // Alt text for the image
    },
  ],
  date: { type: Date, default: Date.now }, // Optional: Keep track of creation date
});

module.exports = DynamicProject = mongoose.model("dynamic_projects", DynamicProjectSchema);
