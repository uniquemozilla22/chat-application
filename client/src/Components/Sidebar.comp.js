import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import UserProfile from "./UserProfile.comp";
import { Login } from "@mui/icons-material";

const SidebarComponent = ({ modal, image, name }) => {
  return (
    <aside className={modal ? "sidebar-modal" : null}>
      <div className={"users__profile"}>
        <div className={"user__profile__data"}>
          {image ? <Avatar src={image} /> : <Avatar>{name}</Avatar>}
        </div>
        <div className={"actions__buttons"}>
          <Tooltip title={"Login"}>
            <div className={"login__button"}>
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
