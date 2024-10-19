// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Arrays to store list items
const items = [];
const workItems = [];

// Home route handler
app.get("/", (req, res) => {
  const day = date.getDate();

  // Render the list template with the current day and items
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

// Handle form submission
app.post("/", (req, res) => {
  const item = req.body.newItem;
  const listType = req.body.list;

  // Add items to the appropriate list and redirect
  if (listType === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// Work list route handler
app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

// About route handler
app.get("/about", (req, res) => {
  res.render("about");
});

// Handle non-existing routes
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
