import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8080});

// event handler
// wss.on("connection", function(socket){
//     console.log("user connected");
//     setInterval(() => {
//         socket.send("Current price of solana is " + Math.random());
//     }, 1000);

//     socket.on("message", (e) => {
//         console.log(e.toString());
//     });
// });



wss.on("connection", function(socket){
    console.log("user connected");

    socket.on("message", (e) => {
        console.log(e.toString());
        
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
});