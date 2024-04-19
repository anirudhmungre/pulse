import WebSocket from "ws";

const PORT = 8080;

const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(message)
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send("Hello, client!");
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
