PORT = 5000;
const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  // creating a new id, a dynamic id for every new account
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      //swapping the reciever with sender so that the sender id is actually the one sending the message
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("recieve-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});

httpServer.listen(5000, () => {
  console.log("Server is running....");
});
