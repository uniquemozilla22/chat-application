import mongoose from "mongoose";


const Messages = new mongoose.Schema({
    text:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required:true,
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    chatroom:{
        type:mongoose.Types.ObjectId,
        ref:"chatrooms"
    }
})


const MessageSchema  = mongoose.model("messages",Messages)


export default MessageSchema