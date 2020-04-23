import { BrowserRouter, Route, NavLink } from "react-router-dom";
import React from "react";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import Chat from "./Components/Chat/Chat";
import Share from "./Components/Share/Share";
import Menu from "./Components/Menu/Menu";
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContactsIcon from "@material-ui/icons/Contacts";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from '@material-ui/icons/Share';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="content">
          <Route exact path="/" component={Contacts} />
          <Route path="/chat" component={Chat} />
          <Route path="/share" component={Share} />
          <Route path="/menu" component={Menu} />
        </div>
        <BottomNavigation
          className="navigation"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={NavLink}
            label="Contacts"
            to="/"
            icon={<ContactsIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            label="Chat"
            to="/chat"
            icon={<ChatIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            label="Share"
            to="/share"
            icon={<ShareIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            label="Menu"
            to="/menu"
            icon={<MenuIcon />}
          />
        </BottomNavigation>
      </div>
    </BrowserRouter>
  );
}
