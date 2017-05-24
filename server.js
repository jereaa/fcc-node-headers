var express = require("express");
var app = express();

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send('<a href="./api/whoami"><h1>Click here to test API!</h1></a>');
});

app.get("/api/whoami/", (req, res) => {
	let reqIP = req.ip;
	let reqLang = req.get("Accept-Language").slice(0, 5);
	let userAgent = req.get("User-Agent");

	res.status(200).json({
		ip: reqIP,
		language: reqLang,
		os: userAgent
	});
});

app.listen(port, () => {
	console.log("App listening in port: " + port);
});