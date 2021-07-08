const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    res.send("<h1> Thankyou for filling up this feedback form. Go back to the previous page  =) </h1>");
})

app.listen(3000, function() {
    console.log("Server started running on port 3000");
})