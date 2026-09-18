import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080});

let userCount = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
    allSockets.push(socket);
    userCount = userCount + 1; 
    console.log("user connected # " + userCount);

    socket.on("message", (message)=>{
        setTimeout(() => {
            // console.log("message received from client: " + message.toString());
            allSockets.forEach((socket) => socket.send(message.toString() + " : sent from the server"));
        }, 1500);
    });

    socket.on("disconnect", () => {
        allSockets = allSockets.filter((s) => s !== socket);
    });
})