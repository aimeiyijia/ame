const fs = require("fs"),
	path = require("path"),
	NodeSSH = require("node-ssh"),
	ssh = new NodeSSH();

ssh.connect({
	host: "121.196.41.45",
	username: "root",
	password: "abc123$%^",
	port: 22, //SSH连接默认在22端口
	// privateKey: "/modules/server.key",
})
	.then(function(e) {
		// Local, Remote
		ssh.getFile("C:\Users\liufe\Desktop", "/home/index.html").then(
			function(Contents) {
				console.log("The File's contents were successfully downloaded");
			},
			function(error) {
				console.log("Something's wrong");
				console.log(error);
			}
		);
	})
	.catch((err) => {
		console.log(err);
	});
