import mongoose from "mongoose";


const Chatroom = new mongoose.Schema({
    users:[{
        type:mongoose.Types.ObjectId,
        ref:"users"
    }],
})


const ChatroomSchema  =  mongoose.model("chatrooms",Chatroom)

export default ChatroomSchema