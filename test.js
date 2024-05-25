const express = require("express")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/test.html`)
})

app.get("/a", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data/sets.json", "utf8"))
  const id = Object.keys(data).length + 1
  let answers = []
  const ans = req.query.a.split("|")
  for(let i = 0; i < ans.length; i++){
    const answer = ans[i].toLowerCase()
    answers.push(btoa(answer))
  }
  data[id] = {
    question: btoa(req.query.q),
    answers
  }
  fs.writeFileSync("data/sets.json", JSON.stringify(data), "utf8")
  res.send(JSON.stringify({"done": "Added"}))
})

app.listen(3000, () => {
  console.log("Done")
})
