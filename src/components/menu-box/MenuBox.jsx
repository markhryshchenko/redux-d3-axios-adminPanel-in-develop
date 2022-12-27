import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import HomeIcon from "@mui/icons-material/Home";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";

function MenuBox() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="menu-box">
      <a href="/">
        <Stack
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <LocalShippingIcon fontSize="large" />
          <h1 className="menu-box__title">Lorem Delivery</h1>
        </Stack>
      </a>
      <div className="greeting-box">
        <Avatar
          alt="John Doe"
          src="avatar-1.jpg/"
          sx={{ width: 56, height: 56 }}
          className="greeting-box__avatar"
        />
        <div className="greeting-text">
          <p>Welcome,</p>
          <p className="greeting-text__name">John Doe</p>
        </div>
      </div>
      <div className="nav-menu">
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon >
              <HomeIcon sx={{ color: '#fdfdfd' }}/>
            </ListItemIcon>
            <ListItemText primary="Home" />
            <ExpandMore />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <LocalAtmIcon sx={{ color: '#fdfdfd' }} />
            </ListItemIcon>
            <ListItemText primary="Salary" />
            <ExpandMore />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <GroupIcon sx={{ color: '#fdfdfd' }}/>
            </ListItemIcon>
            <ListItemText primary="Users" />
            <ExpandMore />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon sx={{ color: '#fdfdfd' }}/>
            </ListItemIcon>
            <ListItemText primary="Data presentation" />
            <ExpandMore />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon sx={{ color: '#fdfdfd' }}/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder sx={{ color: '#fdfdfd' }} />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}

export default MenuBox;
