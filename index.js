const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
	res.send("Sample")
})

app.listen(port, () => {
	console.log("Active")
})

module.exports = app
