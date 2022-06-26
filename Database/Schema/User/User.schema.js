import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  SocialID: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const UserSchema = mongoose.model("user", schema);

export default UserSchema;
