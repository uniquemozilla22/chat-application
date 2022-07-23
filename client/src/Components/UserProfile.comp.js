import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import React from "react";

const UserProfile = ({ online, image, username, email }) => {
  return online ? (
    <Listing>
      <Avatar
        srcSet={image || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg"}
        alt={email || ""}
      />
      <div>
        <Name>{username||"Prénom Nom"}</Name>
        <Headingthree>
          {email||online}
        </Headingthree>
      </div>
    </Listing>
  ) : (
    <Listing>
      <Avatar
        src={image||"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"}
        alt={email||""}
      />
      <div>
        <Name>{username|| "Prénom Nom"}</Name>
        <Headingthree>
          {email||online}
        </Headingthree>
      </div>
    </Listing>
  );
};


const Listing= styled.li({
  display:"flex",
  gap:"1rem",
  margin:"1rem",
  opacity:"0.8",
  transition:"opacity 0.2s ease-in",
  ":hover":{
   opacity:"1"
  }
})

const Name = styled.h2({
  fontSize:"1rem",
  fontWeight:"900"
})

const Headingthree = styled.h3({
  display:"flex",
  gap:"0.5rem",
  fontSize:"1rem",
  fontWeight:"300"
})

export default UserProfile;
