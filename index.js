const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.get("/documentation", (req, res) => {
	//res.send("Kindly visit <a href=\"https://github.com/RyannKim327/Pinoy-Bugtong-Api\">API DOCUMENTATION</a>")
	res.sendFile(__dirname + "/docs.html")
})

app.get("/", (req, res) => {
	const a = [
		{
			"b": atob("QmFib3kga28gc2EgcHVsbywgYmFsYWhpYm8neSBwYWtvLg=="),
			"s": [
				atob("bGFuZ2th")
			] // 1
		},
		{
			"b": atob("QnV0byd0IGJhbGF0LCBsdW1pbGlwYWQ="),
			"s": [
				atob("c2FyYW5nZ29sYQ==")
			] // 2
		},
		{
			"b": atob("QXlhbiBuYSwgYXlhbiBuYSwgaGluZGkgbW8gcGEgbWFraXRhLg=="),
			"s": [
				atob("aGFuZ2lu")
			] // 3
		},
		{
			"b": atob("SGluZGkgaGFyaSwgaGluZGkgcGFyaSwgbmd1bml0IGFuZyBzdW90IGF5IHNhcmktc2FyaS4="),
			"s": [
				atob("c2FtcGF5YW4="),
				atob("dW5hbg==")
			] // 4
		},
		{
			"b": atob("RGluaWxhYW4gbXVuYSwgYmFnbyBwYXNvay4="),
			"s": [
				atob("c2ludWxpZA==")
			] // 5
		},
		{
			"b": atob("TWF0YW5na2FkIGthcGFnIG5ha2F1cG8sIG1hYmFiYSBrYXBhZyBuYWthdGF5bw=="),
			"s": [
				atob("YXNv")
			] // 6
		},
		{
			"b": atob("SXNkYSBrbyBzYSBNYXJpdmVsZXMsIG5hc2EgbG9vYiBhbmcga2FsaXNraXMu"),
			"s": [
				atob("c2lsaQ==")
			] // 7
		},
		{
			"b": atob("U2EgdW1hZ2EneSBtYXkgdGF0bG9uZyBwYWEsIHNhIHRhbmdoYWxpIGF5IGRhbGF3YW5nIHBhYSwgYXQgc2EgcGFnc2FwaXQgbmcgZ2FiaSBheSBtYXkgdGF0bG9uZyBwYWEu"),
			"s": [
				atob("dGFv")
			] // 8
		},
		{
			"b": atob("SXNhbmcgYmFsb25nIG1hbGFsaW0sIHB1bm9uZyBwdW5vIG5nIHBhdGFsaW0u"),
			"s": [
				atob("YmliaWc="),
				atob("YnVuZ2FuZ2E=")
			] // 9
		},
		{
			"b": atob("QXJhdy1hcmF3IG5hbWFtYXRheSwgdGFvbi10YW9uZyBuYWJ1YnVoYXku"),
			"s": [
				atob("a2FsZW5kYXJ5bw==")
			] // 10
		},
		{
			"b": atob("QWJvdCBuZyB0aW5naW4sIGhpbmRpIG5hbWFuIG1hcmF0aW5nLg=="),
			"s": [
				atob("bGFuZ2l0"),
				atob("a2FsYW5naXRhbg==")
			] // 11
		},
		{
			"b": atob("TmFyaXlhbiBuYSBzaSBLYXRvdG8sIGJpdGJpdCBhbmcga2FueWFuZyBrdWJvLg=="),
			"s": [
				atob("cGFnb25n")
			] // 12
		},
		{
			"b": atob("RGFsYXdhbmcga2F0YXdhbiwgdGFndXNhbiBhbmcgdGFkeWFuZy4="),
			"s": [
				atob("aGFnZGFu")
			] // 13
		},
		{
			"b": atob("SGluaWxhIGtvIGFuZyBiYWdpbmcsIG5hZ2thZ3VsbyBhbmcgbWdhIG1hdHNpbmc="),
			"s": [
				atob("a2FtcGFuYQ==")
			] // 14
		},
		{
			"b": atob("TGltYW5nIHB1bm8gbmcgbml5b2csIGlpc2EgYW5nIG1hdGF5b2cu"),
			"s": [
				atob("ZGFsaXJp")
			] // 15
		},
		{
			"b": atob("UGl0b25nIGJpbnRhbmEsIHRhdGxvIGFuZyBuYWlzYXNhcmEu"),
			"s": [
				atob("bXVraGE=")
			] // 16
		},
		{
			"b": atob("THVtdWx1aGEgd2FsYW5nIG1hdGEsIGx1bWFsYWthZCB3YWxhbmcgcGFhLg=="),
			"s": [
				atob("cGFudWxhdA=="),
				atob("YmFsbHBlbg=="),
				atob("bGFwaXM="),
				atob("cGx1bWE=")
			] // 17
		},
		{
			"b": atob("S3VuZyBrYWlsYW4gcGluYXRheSwgc2FrYSBodW1hYmEgYW5nIGJ1aGF5Lg=="),
			"s": [
				atob("a2FuZGlsYQ==")
			] // 18
		},
		{
			"b": atob("SXNhIGtvbmcga2FpYmlnYW4sIGthc2FtYSBrbyBrYWhpdCBzYWFuLg=="),
			"s": [
				atob("YW5pbm8=")
			] // 19
		},
		{
			"b": atob("U2EgdW1hZ2EneSBidW1ib25nLCBzYSBnYWJpIGF5IGRhaG9uLg=="),
			"s": [
				atob("YmFuaWc=")
			] // 20
		},
		{
			"b": atob("U2EgZ2FiaSd5IGhpbm9nLCBzYSB1bWFnYSd5IGhpbGF3Lg=="),
			"s": [
				atob("YnVtYmlseWE="),
				atob("aWxhdw==")
			] // 21
		},
		{
			"b": atob("QXBhdCBuYSBrYXRhbywgaWlzYSBhbmcgc3VtYnJlcm8="),
			"s": [
				atob("YmFoYXk=")
			] // 22
		},
		{
			"b": atob("SXNhbmcgYml5YXMgbmEga2F3YXlhbiwgcHVubyBuZyBrYXlhbWFuYW4u"),
			"s": [
				atob("YWxrYW5zeWE="),
				atob("YWxrYW5zaXlh")
			] // 23
		},
		{
			"b": atob("S2FwaXJhc29uZyB0ZWxhbmcgdGFncGktdGFncGksIGlnaW5hZ2FsYW5nIG5nIGF0aW5nIGxhaGku"),
			"s": [
				atob("d2F0YXdhdA=="),
				atob("YmFuZGlsYQ==")
			] // 24
		},
		{
			"b": atob("S2FwaXJhc29uZyBwYXRwYXQsIHR1bWF3aWQgbmcgZGFnYXQsIHVtYWt5YXQgbmcgYnVuZG9rLCBuYWd0YWJveSBuZyBoYXlvcC4="),
			"s": [
				atob("c3V5b2Q=")
			] // 25
		},
		{
			"b": atob("TXVudGluZyBwcmluc2VzYSwgbmFrYXVwbyBzYSB0YXNh"),
			"s": [
				atob("a2FzdXk=")
			] // 26
		},
		{
			"b": atob("QmluaWxpIGtvJ3kgaXRpbSwgZ2luYW1pdCBrbyd5IHB1bGEsIHRpbmFwaW4ga28neSBwdXRpLg=="),
			"s": [
				atob("dWxpbmc=")
			] // 27
		},
		{
			"b": atob("QmF0YSBwYSBsYW5nIHNpIE5lbmEsIG1hYWxhbSBuYW5nIG1hbmFoaS4="),
			"s": [
				atob("Z2FnYW1iYQ==")
			] // 28
		}
	]
	res.send(JSON.stringify(a[Math.floor(Math.random() * a.length)]))
})

app.listen(port, () => {
	console.log("Active")
})

module.exports = app
