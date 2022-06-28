import { HIDE_MESSAGE_MODAL, SHOW_MESSAGE_MODAL } from "../Types";

export const showSuccessMessage = (message) => {
  return {
    type: SHOW_MESSAGE_MODAL,
    payload: {
      data: { type: "success", message },
    },
  };
};

export const showInformationMessage = (message) => {
  return {
    type: SHOW_MESSAGE_MODAL,
    payload: {
      data: { type: "info", message },
    },
  };
};

export const showWarningMessage = (message) => {
  return {
    type: SHOW_MESSAGE_MODAL,
    payload: {
      data: { type: "warning", message },
    },
  };
};

export const showErrorMessage = (message, title) => {
  if (title) {
    return {
      type: SHOW_MESSAGE_MODAL,
      payload: {
        data: { type: "error", title, message },
      },
    };
  } else {
    return {
      type: SHOW_MESSAGE_MODAL,
      payload: {
        data: { type: "error", message },
      },
    };
  }
};

export const hideMessage = (index) => {
  return {
    type: HIDE_MESSAGE_MODAL,
  };
};
