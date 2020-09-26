import React from "react";
import "./secondside.css";

//materail ui imports
import { Avatar } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import MoodIcon from "@material-ui/icons/Mood";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ImageIcon from "@material-ui/icons/Image";

//materail ui imports

//seconside components
function ChatHeader() {
  return (
    <div className="chatheader">
      <Avatar />
      <div className="headerinfo">
        <div>
          <h3> Store name</h3>
          <p>last seen ....</p>
        </div>
        <div>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

function ChatBody() {
  return (
    <div className="chatbody">
      <p className="chat_message">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className=" chat_message chat_reciver">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
      <p className="chat_message">
        <span className="chat_name">Gurpreet</span>
        this is message
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
      </p>
    </div>
  );
}

function ChatFooter() {
  return (
    <div className="chat_footer">
      <MoodIcon />
      <form>
        <input value="hello" placeholder="type an message" type="text" />
        <button type="submit">Send An message</button>
      </form>
      <div className="footer_icons">
        <IconButton>
          <MicIcon />
        </IconButton>
        <IconButton>
          <ImageIcon />
        </IconButton>
        <IconButton>
          <VideoCallIcon />
        </IconButton>
      </div>
    </div>
  );
}

//seconside components

function Secondside() {
  return (
    <div className="secondside">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

export default Secondside;
