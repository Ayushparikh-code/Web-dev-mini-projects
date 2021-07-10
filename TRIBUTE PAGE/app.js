const express = require("express");

const app = express();

app.use(express.static("Public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
