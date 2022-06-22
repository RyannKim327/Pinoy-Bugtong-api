const express = require("express")
const app = express()

const data = ("../data/list.json")

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log("Connected")
})

app.get("/", (req, res) => {
	let bugtong = data[Math.floor(Math.random() * data.length)]
	res.send(bugtong)
})
