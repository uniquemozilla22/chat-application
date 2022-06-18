import React from "react";
import UserProfile from "./UserProfile.comp";

const SidebarComponent = ({ modal }) => {
  return (
    <aside className={modal ? "sidebar-modal" : null}>
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
