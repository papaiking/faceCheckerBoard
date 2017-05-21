/**
 * @name socket
 * @description: script to connect, send/receive socket message
 * @author Thuc-Vu Xuan Thuc [thuc@labsofthings.com]
 * @date: May 17, 2017
 */

 var socket = io.connect('http://192.168.1.110:3000', {reconnect: true});

// Whenever the server emits 'login', log the login message
socket.on('login', function (data) {
	connected = true;
	// Display the welcome message
	//var message = "Welcome to Socket.IO – ";
	console.log("Connected to server: " + data);
});

// Whenever the server emits 'new message', update the chat body
socket.on('new message', function (data) {
	console.log("Message content: " + data.message);
	face = JSON.parse(data.message);
	
	console.log("Face ID: " + face.faceid);
	var images_server = "http://192.168.1.112:3000/predictimg";
	var identiyImg_URL = "http://192.168.1.112:3000/identityimg/";
	var thumnailSource = images_server + '/thumbnail/' + face.format;


	var row = "<tr></tr>";
	
	// Update event information to interface
	$("#FaceCheckList tr:first").after(row);
});