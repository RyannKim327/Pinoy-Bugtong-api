const express = require("express")
const fs = require("fs")
const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
	//res.send("Kindly visit < a href=\"https://github.com/RyannKim327/Pinoy-Bugtong-Api\">API DOCUMENTATION</a>")
	res.sendFile(__dirname + "/docs.html")
})

app.get("/question", (req, res) => {		
	const data = JSON.parse(fs.readFileSync("data/sets.json"))
	const key = Object.keys(data)
	const n = Math.floor(Math.random() * key.length)
	const quest = atob(data[key[n]]['question'])
	res.json({
		"id": key[n],
		"question": quest
	})
})

app.get("/answer", (req, res) => {
	const id = req.query.id
	const answer = btoa(req.query.answer.toLowerCase())
	const data = JSON.parse(fs.readFileSync("data/sets.json", "utf8"))
	const correct = data[id]['answers'].includes(answer)
	res.json({
		"correct": correct,
		"message": correct ? "Congrats" : "Better luck next time"
	})
})

app.listen(port, () => {
	console.log("Active")
})

module.exports = app
