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
		},
		{
			"b": atob("SXNhbmcgYmFsb25nIG1hbGFsaW0sIHB1bm8gbmcgcGF0YWxpbQ=="),
			"s": atob("YmliaWc=") // 9
		},
		{
			"b": atob("QXJhdy1hcmF3IG5hbWFtYXRheSwgdGF1bi10YW9uZyBuYWJ1YnVoYXk="),
			"s": atob("a2FsZW5kYXJ5bw==") // 10
		},
		{
			"b": atob("QWJvdCBuYSBhYm90IG5nIHRpbmdpbiwgaGluZGkgbW8gbmFtYW4gbWFyYXRpbmc="),
			"s": atob("bGFuZ2l0") // 11
		},
		{
			"b": atob("TmFyaXRvIG5hIHNpIEthdG90bywgZGFsYS1kYWxhIGFuZyBrYW5peWFuZyBrdWJv"),
			"s": atob("cGFnb25n") // 12
		},
		{
			"b": atob("RGFsYXdhbmcga2F0YXdhbiwgdGFndXNhbiBhbmcgdGFkeWFuZw=="),
			"s": atob("aGFnZGFu") // 13
		},
		{
			"b": atob("TmFuZyBoYXRha2luIGtvIGFuZyBiYWdpbmcsIG5hZ2thZ3VsbyBhbmcgbWdhIG1hdHNpbmc="),
			"s": atob("a2FtcGFuYQ==") // 14
		},
		{
			"b": atob("TGltYW5nIHB1bm8gbmcgbml5b2csIGFuZyBpc2EneSBtYXRheW9n"),
			"s": atob("ZGFsaXJp") // 15
		},
		{
			"b": atob("QW5nIGJpbnRhbmEgYXkgdGF0bG8sIG5haXNhc2FyYSBsYW5nIGF5IHRhdGxv"),
			"s": atob("bXVraGE=") // 16
		},
		{
			"b": atob("THVtdWx1aGEgd2FsYW5nIG1hdGEsIGx1bWFsYWthZCB3YWxhbmcgcGFh"),
			"s": atob("cGFudWxhdA==") // 17
		},
		{
			"b": atob("S3VuZyBrYWlsYW4gcGluYXRheSwgc2FrYSBodW1hYmEgYW5nIGJ1aGF5"),
			"s": atob("a2FuZGlsYQ==") // 18
		},
		{
			"b": atob("QWtvIGF5IG1heSBrYWliaWdhbiwga2FzYW1hIGtvIGthaGl0IHNhYW4="),
			"s": atob("YW5pbm8=") // 19
		},
		{
			"b": atob("U2EgdW1hZ2EgYXkgYnVuZ2JvbmcsIHNhIGdhYmkgYXkgZGFob24="),
			"s": atob("YmFuaWc=") // 20
		},
		{
			"b": atob("S3VuZyBnYWJpIGF5IGhpbm9nLCBzYSBhcmF3IGF5IGhpbGF3"),
			"s": atob("YnVtYmlseWE=") // 21
		},
		{
			"b": atob("QXBhdCBuYSB0YW8sIGlpc2EgYW5nIHN1bWJyZXJv"),
			"s": atob("YmFoYXk=") // 22
		},
		{
			"b": atob("SXNhbmcgYml5YXMgbmEga2F3YXlhbiwgcHVubyBuZyBrYXlhbWFuYW4="),
			"s": atob("YWxrYW5zeWE=") // 23
		},
		{
			"b": atob("S2FwaXJhc29uZyB0ZWxhbmcgdGFncGktdGFncGksIGlnaW5hZ2FsYW5nIG5nIGF0aW5nIGxhaGk="),
			"s": atob("d2F0YXdhdA==") // 24
		}
	]
	res.send(JSON.stringify(a[Math.floor(Math.random() * a.length)]))
})

app.listen(port, () => {
	console.log("Active")
})

module.exports = app
