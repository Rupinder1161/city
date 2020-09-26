import React from "react";
import "./firstside.css";

//materil ui imports
import Avatar from "@material-ui/core/Avatar";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Button, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";

//firstsidecomponents
function Header() {
  return (
    <div className="header">
      <div className="header_right">
        <IconButton>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          />
        </IconButton>{" "}
      </div>
      <div className="header_left">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="search">
      <div className="searchcontainer">
        <SearchIcon />
        <input placeholder=" start the search here" type="text" />
      </div>
    </div>
  );
}

function SideChat() {
  return (
    <div className="sidechat">
      <div className="sidechatleft">
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        />
      </div>
      <div className="sidechatright">
           <h3>Gurpreet Singh</h3>
           <p> This is realtime</p>
      </div>
    </div>
  );
}
function ChatComponent() {
  return (
    <div className="chatmain">
        <Button>Add New Store</Button>
      <div className="sidechats">
        <SideChat />
        <SideChat />
        <SideChat />
      </div>
    </div>
  );
}

//firstsidecomponents

function Firstside() {
  return (
    <div className="firstside">
      <Header />
      <Search />
      <ChatComponent />
    </div>
  );
}

export default Firstside;
