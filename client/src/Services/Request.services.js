import axiosBase from "../axiosBase";
import ErrorHandle from "../store/Actions/ErrorHandle/ErrorHandle.action";
import { showSuccessMessage } from "../store/Actions/Message/Message.action";
import { HIDE_LOADER, SHOW_LOADER } from "../store/Actions/Types";

class Request {
  constructor(link, dispatch) {
    this.link = link;
    this.dispatch = dispatch;
    dispatch({ type: SHOW_LOADER });
  }
  async post(data) {
    try {
      const response = await axiosBase.post(this.link, { ...data });
      this.dispatch({ type: HIDE_LOADER });
      this.dispatch(showSuccessMessage(response.data.message));
      return response.data;
    } catch (error) {
      this.dispatch({ type: HIDE_LOADER });
      this.dispatch(ErrorHandle(error));
    }
  }

  async get() {
    try {
      const response = await axiosBase.get(this.link);
      this.dispatch({ type: HIDE_LOADER });
      return response.data;
    } catch (error) {
      this.dispatch({ type: HIDE_LOADER });
      this.dispatch(ErrorHandle(error));
    }
  }
}

export default Request;
