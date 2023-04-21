import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import { Link } from "react-router-dom";

const Navlist = ({ open }) => {
  const navList = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, route:'/' },
    { id: 2, name: "Archive", icon: <ArchiveOutlinedIcon />, route:'/archive' },
    { id: 3, name: "Trash", icon: <RestoreFromTrashOutlinedIcon />, route:'/delete' },
  ];
  return (
    <div>
      <List>
        {navList.map((text) => (
          <ListItem key={text.id}>

            <Link to={text.route}  style={{textDecoration:'none', color:'inherit'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Navlist;
