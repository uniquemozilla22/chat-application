import Express  from "express";
import UserSchema from "../../Database/Schema/User/User.schema.js";

const UserRouter =  Express.Router()


UserRouter.post('/find',async (req, res)=>{

    const {query} = req.body
    const users = await UserSchema.find({
         $or: [ {email: { $regex: '.*' + query + '.*' }}] 
        })
    res.status(200).send(users)
})

export default UserRouter