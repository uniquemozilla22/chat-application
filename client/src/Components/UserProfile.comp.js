import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import React from "react";

const UserProfile = ({ online, image, username,search, email }) => {
  return online ? (
    <Listing>
      <Avatar
        srcSet={image || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg"}
        alt={email || ""}
      />
      <div>
        <h2>{username||"Prénom Nom"}</h2>
        <Headingthree>
          <span className="status green"></span>
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
        <h2>{username|| "Prénom Nom"}</h2>
        <Headingthree>
          <span className="status orange"></span>
          {email||online}
        </Headingthree>
      </div>
    </Listing>
  );
};


const Listing= styled.li({
  display:"flex",
  gap:"1rem",
  margin:"1rem"
})

const Headingthree = styled.h3({
  display:"flex",
  gap:"0.5rem"
})

export default UserProfile;
