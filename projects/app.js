const express = require("express");
const app = express();

// api aka route
app.get("/names", (req, res) => {
	res.send("Blessing");
});

app.listen(5000, () => {
	console.log("server is running on port 5000");
});
