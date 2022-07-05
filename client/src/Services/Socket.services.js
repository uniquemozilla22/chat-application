
import { io } from "socket.io-client";


class Socket {
    socket = io("http://localhost:8000");

    sendMessage(message){
        this.socket.emit("chat_message",message)
    }

    getMessage () {
        const GotMessage = []
        this.socket.on("chat_message",(message)=>GotMessage.push(message))
        return GotMessage
    }

}


export default Socket