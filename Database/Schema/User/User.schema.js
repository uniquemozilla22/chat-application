import { Mongoose } from "mongoose";

const UserSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  SocialID: {
    type: String,
    required: true,
  },
});

const modalUser = mongoose.modal("users", UserSchema);

export default modalUser;
