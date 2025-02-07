const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Corrected to use uppercase 'PORT'
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

let socketsConnected = new Set();

io.on('connection', onConnected);

function onConnected(socket) {
    socketsConnected.add(socket.id);
    io.emit("clients-total", socketsConnected.size);

    console.log(`Socket connected: ${socket.id}`); // Log when a socket connects

    socket.on('disconnect', () => {
        console.log("Socket disconnected: " + socket.id);
        socketsConnected.delete(socket.id);
        io.emit("clients-total", socketsConnected.size);
    });

    socket.on('message', (data) => {
        console.log("Message received:", data); // Log received messages
        socket.broadcast.emit('chat-message', data);
    });

    socket.on('feedback', (data) => {
        console.log("Feedback received:", data); // Log feedback
        socket.broadcast.emit('feedback', data);
    });
}
