// routes/api/dynamic_projects.js
const express = require("express");
const multer = require("multer");
const { v4: uuid4 } = require("uuid");
const router = express.Router();
const DynamicProject = require("../../models/dynamic_projects");
const path = require("path");

const MAX_IMG_COUNT = 5;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Preparing to save a file...");
    cb(null, "../app/public/images/"); // Ensure this folder exists and is writable
  },
  filename: (req, file, cb) => {
    const newFilename = uuid4() + "-" + Date.now() + path.extname(file.originalname.toLowerCase().split(" ").join("-"));
    console.log(`Saving file as: ${newFilename}`);
    cb(null, newFilename);
  },
});

const filefilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpg", "image/jpeg", "image/png"];
  console.log(`Checking file type: ${file.mimetype}`);
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    console.log("File type not allowed:", file.mimetype);
    cb(new Error("Only .png, .jpg and .jpeg format allowed!"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

router.post("/add", upload.array("images", MAX_IMG_COUNT), (req, res) => {
  console.log("Received files:", req.files);
  console.log("Request Body:", req.body);

  const paragraphs = req.body.paragraphs;
  if (!paragraphs || !Array.isArray(paragraphs)) {
    console.log("Error: Invalid or missing paragraphs", paragraphs);
    return res.status(400).json({ error: "Missing or invalid paragraphs" });
  }


  let newProjectData = {
    paragraphs: paragraphs,
  };

  let imgs_arr = [];
  req.files.forEach((file) => {
    imgs_arr.push({
      path_url: "/public/images/" + file.filename,
      alt: "Dynamic Image",
    });
  });

  newProjectData.imgs = imgs_arr;

  const newDynamicProject = new DynamicProject(newProjectData);
  newDynamicProject.save()
    .then((project) => res.json(project))
    .catch((err) => {
      console.error("Database save error:", err);
      res.status(500).json({ error: "Failed to save project" });
    });
});

// @route GET api/dynamic_projects/getall/:num
// @desc get project
// @access Public
router.get("/getall/:num", (req, res) => {
  console.log("API GET api/dynamic_projects/getall/:num is reached");
  const num = parseInt(req.params.num);

  if (num < 0) {
    DynamicProject.find()
      .sort({ date: -1 })
      .exec((err, doc) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(doc);
        }
      });
  } else {
    DynamicProject.find()
      .sort({ date: -1 })
      .limit(num)
      .exec((err, doc) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(doc);
        }
      });
  }
});

// @route GET api/projects/get/:id
// @desc get project
// @access Public
router.get("/get/:id", (req, res) => {
  console.log("API GET api/dynamic_projects/get/:id is reached");
  const prjID = req.params.id;

  DynamicProject.find({ _id: prjID })
    .sort({ date: -1 })
    .exec((err, doc) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    });
});

module.exports = router;
