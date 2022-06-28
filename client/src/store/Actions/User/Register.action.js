import { REGISTER_USER } from "../Types";

export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: {
      token: user.token,
      email: user.email,
      name: user.name,
      image: user.image,
    },
  };
};
