import styled from "@emotion/styled";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const MessageBoxComponent = ({ openModal , sendMessage , messages}) => {
  const [messageInput, setMessageInput ]= useState("")
  console.log(messages)
  const SocialID =  useSelector(state=> state.user.SocialID)
  return (
    <main>
      <header>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
          alt=""
          onClick={() => openModal()}
        />
        <div>
          <h2>Vincent Porter</h2>
          <h3>@vincent Porter's Email Address</h3>
        </div>
      </header>
      <ul id="chat">
        {messages.map(({message, by, time})=> by !== SocialID ?<li className="you">
          <div className="entete">
            <h2>{by}</h2>
            <div className="status-line">
              <span className="status green"></span>
              <h3>{time}</h3>
            </div>
          </div>

          <div className="message">
           {message}
          </div>
        </li>
        :<li className="me">
        <div className="entete">
          <h2>{by}</h2>
          <div className="status-line">
            <span className="status green"></span>
            <h3>{time}</h3>
          </div>
        </div>

        <div className="message">
          {message}
        </div>
      </li>
        )}
      </ul>
      <footer>
        <form onSubmit={(e)=>{e.preventDefault();sendMessage(messageInput)}}>
        <Input placeholder="Type your message" onChange={(e) => setMessageInput(e.target.value)}></Input>

        <div className="text-options">
          <div className="options">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
              alt=""
            />
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
              alt=""
            />
          </div>
          <input type="submit" value={"Send"}></input>
        </div>
        </form>
      </footer>
    </main>
  );
};


const Input =  styled.input({
  width:"100%",
  padding:"1rem"
})
export default MessageBoxComponent;
