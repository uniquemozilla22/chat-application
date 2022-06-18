import React from "react";

const MessageBoxComponent = ({ openModal }) => {
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
        <li className="you">
          <div className="entete">
            <h2>Vincent</h2>
            <div className="status-line">
              <span className="status green"></span>
              <h3>10:12AM, Today</h3>
            </div>
          </div>

          <div className="message">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </div>
        </li>
        <li className="me">
          <div className="entete">
            <h2>Vincent</h2>
            <div className="status-line">
              <span className="status green"></span>
              <h3>10:12AM, Today</h3>
            </div>
          </div>

          <div className="message">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </div>
        </li>
        <li className="me">
          <div className="entete">
            <h2>Vincent</h2>
            <div className="status-line">
              <span className="status green"></span>
              <h3>10:12AM, Today</h3>
            </div>
          </div>

          <div className="message">OK</div>
        </li>
        <li className="you">
          <div className="entete">
            <h2>Vincent</h2>
            <div className="status-line">
              <span className="status green"></span>
              <h3>10:12AM, Today</h3>
            </div>
          </div>

          <div className="message">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </div>
        </li>
        <li className="me">
          <div className="entete">
            <h2>Vincent</h2>
            <div className="status-line">
              <span className="status green"></span>
              <h3>10:12AM, Today</h3>
            </div>
          </div>

          <div className="message">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </div>
        </li>
        <li className="me">
          <div className="entete">
            <h2>Vincent</h2>
            <div className="status-line">
              <span className="status green"></span>
              <h3>10:12AM, Today</h3>
            </div>
          </div>

          <div className="message">OK</div>
        </li>
      </ul>
      <footer>
        <textarea placeholder="Type your message"></textarea>
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
      </footer>
    </main>
  );
};

export default MessageBoxComponent;
