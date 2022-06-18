import React from "react";
import UserProfile from "./UserProfile.comp";

const SidebarComponent = () => {
  return (
    <aside>
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
