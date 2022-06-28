const express = require("express")
const app = express()

const port = 5000

app.get("/", (req, res) => {
	res.send("Sample")
})

app.listen(port, () => {
	console.log("Active")
})

module.exports = app
