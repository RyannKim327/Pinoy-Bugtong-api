const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
	const a = [
		{
			"b": atob("QmFib3kga28gc2EgcHVsbywgYmFsYWhpYm8neSBwYWtv"),
			"s": atob("bGFuZ2th") // 1
		},
		{
			"b": atob("QnV0byd0IGJhbGF0LCBsdW1pbGlwYWQ="),
			"s": atob("c2FyYW5nZ29sYQ==") // 2
		},
		{
			"b": atob("QXlhbiBuYSwgYXlhbiBuYSwgaGluZGkgbW8gcGEgbWFraXRh"),
			"s": atob("aGFuZ2lu") // 3
		},
		{
			"b": atob("SGluZGkgaGFyaSwgaGluZGkgcGFyaSwgbmd1bml0IGFuZyBzdW90IGF5IHNhcmktc2FyaQ=="),
			"s": atob("c2FtcGF5YW4=") // 4
		},
		{
			"b": atob("RGluaWRpbGFhbiBtbyBtdW5hLCBiYWdvIGlwYXNvaw=="),
			"s": atob("c2ludWxpZA==") // 5
		},
		{
			"b": atob("TWFiYWJhIGthcGFnIG5ha2EtdGF5bywgbWF0YWFzIGthcGFnIG5ha2F1cG8="),
			"s": atob("YXNv") // 6
		},
		{
			"b": atob("SXNkYSBrbyBzYSBNYXJpdmVsZXMsIG5hc2EgbG9vYiBhbmcga2FsaXNraXM="),
			"s": atob("c2lsaQ==") // 7
		},
		{
			"b": atob("U2EgdW1hZ2EneSBtYXkgYXBhdCBuYSBwYWEsIHNhIHRhbmdoYWxpJ3kgZGFsYXdhIG5hLCBhdCBzYSBwYWdzYXBpdCBuZyBoYXBvbiBheSB0YXRsbyBuYS4="),
			"s": atob("dGFv") // 8
		}
	]
	res.send(a[Math.floor(Math.random() * a.length)])
})

app.listen(port, () => {
	console.log("Active")
})

module.exports = app
