import React, { useContext } from "react";
import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'

const Chat = () => {
  const { data } = useContext(ChatContext);

  const maxScreen = () => {
    
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <FontAwesomeIcon icon={faMaximize} className="maximize" onClick={maxScreen} />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;