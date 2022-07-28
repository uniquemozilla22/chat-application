import Express from "express";
import UserSchema from "../../Database/Schema/User/User.schema.js";
import AppError from "../../services/AppError.js";
import GoogleSchemaFormatter from "../../services/GoogleSchemaFormatter.js";
const authenticate = Express.Router();

authenticate.get("/", (req, res) =>
  res.send({ success: true, message: "Working Just Fine" })
);

authenticate.post("/login", async (req, res) => {
  try {
    const loggedIn = await loginUser(req.body);
    res.status(200).send({ ...loggedIn });
  } catch (err) {
    res.status(500).send({ ...err });
  }
});



authenticate.post

const loginUser = async (data) => {
  try {
    const { email, sub } = data;
    const user = await UserSchema.findOne({ email, SocialID: sub });

    if (user) {
      return { user, message: "Successfully! Logged In" };
    } else {
      return registerUser(data);
    }
  } catch (err) {
    throw new AppError(err.name ? err.name : "Login Error !", err.stack);
  }
};

const registerUser = (data) => {
  try {
    const { social } = data;

    if (social === "google") {
      const user = new UserSchema(GoogleSchemaFormatter(data));
      user.save();
      return { user, message: "Successfully Registered" };
    }
  } catch (err) {
    throw new AppError("Registration Error !", err.stack);
  }
};

export default authenticate;
