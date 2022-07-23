import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import UserProfile from "./UserProfile.comp";
import { Login, Logout, SearchOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ShowLoginModal } from "../store/Actions/Modal/LoginModal.action";
import LogoutAction from "../store/Actions/Login/Logout.action";
import { ProfileMessageSkeleton } from "../UI/Skeletons";
import GetUsers from "../store/Actions/User/GetUsers.action";
import styled from "@emotion/styled";

const SidebarComponent = ({ modal, user, authenticated }) => {
  const dispatch = useDispatch();
  const showLoginModal = () => dispatch(ShowLoginModal());
  const [showSearch, setShowSearch] = useState(false);
  const [users, setUsers] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [chatroom, setChatroom] = useState(null);

  const searchUser = async (e) => {
    e.preventDefault();
    const data = await dispatch(GetUsers(searchValue));
    setUsers([...data]);
  };

  const onChangeSearchValue = useCallback(
    (e) => {
      setSearchValue(e.target.value);
      if (e.target.value.length === 0) {
        setShowSearch(false);
      }
      if (showSearch) return;
      setShowSearch(true);
    },
    [showSearch]
  );

  return (
    <aside className={modal ? "sidebar-modal" : null}>
      {authenticated ? (
        <div className={"users__profile"}>
          <div className={"user__profile__data"}>
            <Tooltip title={user.name}>
              {user &&
              <>{
                (user.image ? (
                  <Avatar src={user.image} loading="lazy" />
                ) : (
                  <Avatar>{user.name}</Avatar>
                ))}
                </>}
            </Tooltip>
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
      <Header>
        <Search onSubmit={searchUser}>
          <input
            type="text"
            placeholder="Email..."
            onChange={onChangeSearchValue}
          />
          {showSearch && (
            <Submit type="submit">
              <SearchOutlined />
            </Submit>
          )}
        </Search>
        <Dialog onClose={() => setUsers(null)} open={users ? true : false}>
          {users && users.length !== 0 && (
            <>
              {" "}
              <DialogTitle>
                {" "}
                {users.length > 0 ? `${users.length}` : `No`} users found
              </DialogTitle>
              <DialogContent>
                <Listcontainer>
                  {users?.map((u, index) => (
                    <UserProfile
                      key={index}
                      online
                      search
                      email={u.email}
                      image={u.image}
                      username={u.name}
                    />
                  ))}
                </Listcontainer>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Header>
      <ul>
        {chatroom ? (
          <>
            <UserProfile online />
            <UserProfile />
          </>
        ) : (
          <>
            <ProfileMessageSkeleton count={10} />
          </>
        )}
      </ul>
    </aside>
  );
};

const Header = styled.header({
  position: "relative",
});

const Search = styled.form({
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
});

const Listcontainer = styled.ul({
  backgroundColor: "#ffffff50",
  listStyle: "none",
  maxHeight: "100% !important",
  transform: "translateY(0)",
  transition: "all .3s ease-out",
  padding: "0",

  ":hover": {
    cursor: "pointer",
  },
  "@keyframes": {
    "0%": {
      opacity: "0",
      transform: "translateY(0%)",
    },
    "50%": {
      opacity: ".5",
      transform: "translateY(50%)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(100%)",
    },
  },
});

const Submit = styled.button({
  backgroundColor: "#5e616a",
  color: "#f8f8f8",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
});

export default SidebarComponent;
