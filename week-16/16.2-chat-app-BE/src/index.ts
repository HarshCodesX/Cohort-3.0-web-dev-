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
        //@ts-ignore
        const parsedMessage = JSON.parse(message);
        if(parsedMessage.type === "join"){
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }

        if(parsedMessage.type === "chat"){
            //@ts-ignore
            // const obj = allSockets.find((x) => x.socket == socket)?.room;
            let currentUserRoom = null;
            for(let i = 0; i < allSockets.length; i++){
                //@ts-ignore
                if(allSockets[i].socket === socket){
                    //@ts-ignore
                    currentUserRoom = allSockets[i].room;
                    break;
                }
            }

            for(const user of allSockets){
                if(user.room === currentUserRoom){
                    user.socket.send(JSON.stringify(parsedMessage.payload.message));
                }
            }
        }
    });
});