import axios from "axios";
import { baseRoute } from "./store/Actions/routes.constant";

const axiosBase = () =>
  axios.create({
    baseURL: baseRoute,
  });

export default axiosBase;
