import { Avatar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import UserProfile from "./UserProfile.comp";
import { Login, Logout, SearchOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ShowLoginModal } from "../store/Actions/Modal/LoginModal.action";
import LogoutAction from "../store/Actions/Login/Logout.action";
import { ProfileMessageSkeleton } from "../UI/Skeletons";
import GetUsers from "../store/Actions/User/GetUsers.action";
import styled from "@emotion/styled";
import { borderRadius } from "@mui/system";

const SidebarComponent = ({ modal, user, authenticated }) => {
  const dispatch = useDispatch();
  const showLoginModal = () => dispatch(ShowLoginModal());
  const [showSearch, setShowSearch] = useState(false)
  const [Loading, setLoading]= useState(false)
  const [users, setUsers] =  useState(null)

  const [chatroom, setChatroom] = useState(null)

  const searchUser = async (e) => {
    setLoading(true)
    e.preventDefault()
      const data = await  dispatch(GetUsers(e.target.value))
      console.log(data)
      setUsers([...data])
      setLoading(false)
  }


  const showSearchSubmit  = (e) =>{
    if(showSearch) return;
    if(e.target.length===0){
      setShowSearch(false)
    }
    console.log(e.target.value.length)
    setShowSearch(true)
  }

  return (
    <aside className={modal ? "sidebar-modal" : null}>
      {authenticated ? (
        <div className={"users__profile"}>
          <div className={"user__profile__data"}>
              <Tooltip title={user.name}>
            { user?.image ? <Avatar src={user?.image} />:<Avatar>{user?.name}</Avatar> }
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
          <input type="text" placeholder="Email Address" onChange={showSearchSubmit}/>
          {showSearch && <Submit type="submit"><SearchOutlined/></Submit>}
        </Search>
        {users && <Listcontainer>
          {users.map((u,index)=><UserProfile key={index} online search email={u.email} image={u.image} username={u.name}/>)}
        </Listcontainer>}
      </Header>
      <ul>
       {chatroom ?<>
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


const Search = styled.form({
  display:"flex",
  justifyContent:"space-between",
  gap:"1rem",
})

const Listcontainer  =  styled.ul({
  position:"absolute",
  left:0,
  right:0,
  backgroundColor:"#ffffff50",
  listStyle:"none",
  maxHeight:'100% !important',
  transform: "translateY(0)",
    transition: "all .3s ease-out",
   
  ":hover":{
    cursor:"pointer"
  },
  "@keyframes":{
    "0%":{
      opacity: "0",
    transform: "translateY(0%)",
    },
    "50%":{
      opacity: ".5",
    transform: "translateY(50%)",
    },
    "100%":{
      opacity: "1",
    transform: "translateY(100%)",
    }
  }
})


const Loader = styled.ul({
  display:''
})
const Submit = styled.button({
  backgroundColor: '#5e616a',
  color:"#f8f8f8",
  border:"none",
  padding:"0.5rem 1rem",
  borderRadius:"5px"
})


export default SidebarComponent;
