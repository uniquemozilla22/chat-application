import { Avatar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import UserProfile from "./UserProfile.comp";
import { Login, Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ShowLoginModal } from "../store/Actions/Modal/LoginModal.action";
import LogoutAction from "../store/Actions/Login/Logout.action";
import { ProfileMessageSkeleton } from "../UI/Skeletons";
import GetUsers from "../store/Actions/User/GetUsers.action";
import styled from "@emotion/styled";

const SidebarComponent = ({ modal, user, authenticated }) => {
  const dispatch = useDispatch();
  const showLoginModal = () => dispatch(ShowLoginModal());

  const [users, setUsers] =  useState(null)


  const searchUser = async (e) => {
    console.log(e.target.value.length)
      const data = await  dispatch(GetUsers(e.target.value))
      console.log(data)
      setUsers([...data])
  }
  return (
    <aside className={modal ? "sidebar-modal" : null}>
      {authenticated ? (
        <div className={"users__profile"}>
          <div className={"user__profile__data"}>
              <Tooltip title={user.name}>
            { user.image ? <Avatar src={user.image} />:<Avatar>{user.name}</Avatar> }
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
        <input type="text" placeholder="search" onChange={searchUser}/>
        {users && <Listcontainer>
          {users.map((u,index)=><UserProfile key={index} online search email={u.email} image={u.image} username={u.name}/>)}
        </Listcontainer>}
      </Header>
      <ul>
       {user.name ?<>
       <UserProfile online />
        <UserProfile />
        </> :
        <>
        <ProfileMessageSkeleton count={10}/>
        </>}
      </ul>
    </aside>
  );
};


const Header = styled.header({
  position:"relative"
})


const Listcontainer  =  styled.ul({
  position:"absolute",
  left:0,
  right:0,
  backgroundColor:"#2b2b2b",
  listStyle:"none",
  maxHeight:'100% !important',
  ":hover":{
    cursor:"pointer"
  }
})


export default SidebarComponent;
