const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Good old days");
})

app.listen(3000, () => {
    console.log("Server Has Started!");
})
