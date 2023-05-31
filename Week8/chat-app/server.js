const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const { faker } = require("@faker-js/faker");

const port = 3000;

const connectedUsers = {};

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	const username = faker.person.firstName();
	connectedUsers[socket.id] = username;
	socket.emit("username", username);
	io.emit("userList", Object.values(connectedUsers));
	socket.on("chat", ({ to, message }) => {
		const from = connectedUsers[socket.id];

		// Check if the sender and recipient are the same user
		if (from === to) {
			socket.emit("errorMessage", "You cannot chat with yourself.");
			return;
		}

		const recipientSocketId = Object.keys(connectedUsers).find(
			(socketId) => connectedUsers[socketId] === to
		);

		if (recipientSocketId) {
			io.to(recipientSocketId).emit("privateMsg", {
				from,
				message,
			});
		}
	});

	// Event handler when a user disconnects
	socket.on("disconnect", () => {
		delete connectedUsers[socket.id];
		io.emit("userList", Object.values(connectedUsers));
	});
});

http.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
