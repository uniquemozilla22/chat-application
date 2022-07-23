import Express from "express";
const ChatroomRouter = Express.Router();

ChatroomRouter.get("/",(req,res)=>{
    console.log(req.body)
    res.send("Ola")
})





export default ChatroomRouter
