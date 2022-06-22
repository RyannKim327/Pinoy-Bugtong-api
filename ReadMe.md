### Pinoy Bugtong Api
##### By: MPOP Reverse II
---
> Since I can't find a Filipino Riddles, I try to create my own with the help of [nkilm's api](https://github.com/nkilm/riddles-api/), I try to create my own version.
---
###### NodeJS (Axios) Code
``` NodeJS
const axios = require("axios")

async function riddle(){
	let output = await axios.get("url").then((result) => {
		return result.data
	}).catch((error) => {
		console.error("Error [Api Riddle]: " + error)
		return null
	})
	return output
}

module.exports = async () => {
	let data = await riddle()
	console.log(data)
}
```

###### Output:
``` JSON
{
	"bugtong": "Sample Riddle",
	"sagot": "Sample Answer"
}
```

Credits
1. Lester Navarra
2. Earl Shine Sawir
3. Nkilm
4. John Jeremy Antiguo
5. John Roy Lapida Calimlim
6. Jerson Carin
7. John Paul Caigas
8. Mark Kevin Manalo
9. And to all facebook bot developers
