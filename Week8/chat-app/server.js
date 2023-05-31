// const express = require("express");
// const app = express();
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

// app.use(express.static("public"));

// app.get("/", (req, res) => {
// 	res.sendFile(__dirname + "/index.html");
// });

// const users = new Map();

// io.on("connection", (socket) => {
// 	socket.on("setUsername", (username) => {
// 		socket.username = username;
// 		users.set(socket.id, username);
// 		io.emit("userList", Array.from(users.values()));
// 	});

// 	socket.on("sendMessage", (data) => {
// 		const { recipient, message } = data;
// 		const sender = socket.username;
// 		const recipientSocket = Array.from(users.entries()).find(
// 			([id, name]) => name === recipient
// 		)[0];
// 		io.to(recipientSocket).emit("newMessage", { sender, message });
// 	});

// 	socket.on("disconnect", () => {
// 		users.delete(socket.id);
// 		io.emit("userList", Array.from(users.values()));
// 	});

// });

// http.listen(3000, () => {
// 	console.log("Server listening on http://localhost:3000");
// });


const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const users = new Map();
const chatHistory = {};

io.on("connection", (socket) => {
  socket.on("setUsername", (username) => {
    socket.username = username;
    users.set(socket.id, username);
    io.emit("userList", Array.from(users.values()));

    // Load chat history for the previously selected user (if any)
    if (socket.selectedUser) {
      loadChatHistory(socket, socket.selectedUser);
    }
  });

  socket.on("sendMessage", (data) => {
    const { recipient, message } = data;
    const sender = socket.username;

    // Store the message in chat history
    if (!chatHistory[sender]) {
      chatHistory[sender] = {};
    }
    if (!chatHistory[recipient]) {
      chatHistory[recipient] = {};
    }
    chatHistory[sender][recipient] = chatHistory[sender][recipient] || [];
    chatHistory[recipient][sender] = chatHistory[recipient][sender] || [];
    chatHistory[sender][recipient].push({ sender, message });
    chatHistory[recipient][sender].push({ sender, message });

    const recipientSocket = Array.from(users.entries()).find(
      ([id, name]) => name === recipient
    )[0];
    io.to(recipientSocket).emit("newMessage", { sender, message });
  });

  socket.on("disconnect", () => {
    users.delete(socket.id);
    io.emit("userList", Array.from(users.values()));
  });
});

http.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});

function loadChatHistory(socket, selectedUser) {
  const messages = chatHistory[socket.username][selectedUser];

  if (messages) {
    messages.forEach(({ sender, message }) => {
      socket.emit("newMessage", { sender, message });
    });
  }
}
