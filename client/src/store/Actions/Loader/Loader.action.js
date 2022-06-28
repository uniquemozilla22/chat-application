import { HIDE_LOADER, SHOW_LOADER } from "../Types";

export const showLoading = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoading = () => {
  return {
    type: HIDE_LOADER,
  };
};
