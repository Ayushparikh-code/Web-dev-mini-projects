const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", (req, res) => {
    res.send("<h1> Thankyou for filling up this feedback form</h1>");
})

app.listen(3000, function() {
    console.log("Server started running on port 3000");
})