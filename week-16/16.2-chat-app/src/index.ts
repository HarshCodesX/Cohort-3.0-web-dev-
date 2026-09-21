import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080});

interface User {
    socket: WebSocket;
    room: string;
}

let userCount = 0;
let allSockets: User[] = [];

wss.on("connection", (socket) => {

    userCount = userCount + 1; 
    console.log("user connected # " + userCount);

    socket.on("message", (message)=>{
        
    });

    socket.on("disconnect", () => {
        // allSockets = allSockets.filter((s) => s !== socket);
    });
})