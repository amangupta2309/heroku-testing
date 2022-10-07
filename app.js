const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Working");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
})