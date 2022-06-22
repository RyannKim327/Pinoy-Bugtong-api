const express = require("express")
const fs = require("fs")
const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log("Connected")
})

app.use("/", (req, res) => {
	let data = JSON.parse(fs.readFileSync("data/list.json", "utf8"))
	let bugtong = data[Math.floor(Math.random() * data.length)]
	res.send(bugtong)
})
