import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import UserProfile from "./UserProfile.comp";
import { Login } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ShowLoginModal } from "../store/Actions/Modal/LoginModal.action";
import { showLoading } from "../store/Actions/Loader/Loader.action";

const SidebarComponent = ({ modal, image, name }) => {
  const dispatch = useDispatch();

  const showLoginModal = () => dispatch(ShowLoginModal());

  const show = () => dispatch(showLoading());
  return (
    <aside className={modal ? "sidebar-modal" : null}>
      <div className={"users__profile"}>
        <div className={"user__profile__data"} onClick={() => show()}>
          {image ? <Avatar src={image} /> : <Avatar>{name}</Avatar>}
        </div>
        <div className={"actions__buttons"}>
          <Tooltip title={"Login"}>
            <div className={"login__button"} onClick={() => showLoginModal()}>
              <Login />
            </div>
          </Tooltip>
        </div>
      </div>
      <header>
        <input type="text" placeholder="search" />
      </header>
      <ul>
        <UserProfile online />
        <UserProfile />
      </ul>
    </aside>
  );
};

export default SidebarComponent;
