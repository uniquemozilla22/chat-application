import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import UserProfile from "./UserProfile.comp";
import { Login, Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ShowLoginModal } from "../store/Actions/Modal/LoginModal.action";
import { showLoading } from "../store/Actions/Loader/Loader.action";
import LogoutAction from "../store/Actions/Login/Logout.action";

const SidebarComponent = ({ modal, user, authenticated }) => {
  const dispatch = useDispatch();
  const showLoginModal = () => dispatch(ShowLoginModal());
  const show = () => dispatch(showLoading());
  return (
    <aside className={modal ? "sidebar-modal" : null}>
      {authenticated ? (
        <div className={"users__profile"}>
          <div className={"user__profile__data"} onClick={() => show()}>
            {user.image ? (
              <Tooltip title={user.name}>
                <Avatar src={user.image} />
              </Tooltip>
            ) : (
              <Tooltip title={user.name}>
                <Avatar>{user.name}</Avatar>
              </Tooltip>
            )}
          </div>
          <div className={"actions__buttons"}>
            <Tooltip title={"Logout User"}>
              <div
                className={"login__button"}
                onClick={() => dispatch(LogoutAction())}
              >
                <Logout />
              </div>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div className={"users__profile"}>
          <div className={"actions__buttons"}>
            <Tooltip title={"Logout"}>
              <div className={"login__button"} onClick={() => showLoginModal()}>
                <Login />
              </div>
            </Tooltip>
          </div>
        </div>
      )}
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
