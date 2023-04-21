import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {AppBar, Toolbar, Typography, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`

color: #757575;
font-size: 25px;
margin-left:20px

`


// const drawerWidth = 240;

const Headerbar = ({ open, handleDrawer }) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  return (
    <>
      <Header position="fixed" open={open}>
        <Toolbar>
          <IconButton

            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />

          </IconButton>
          <img src={logo} alt="logo" style={{width:30}} />
          <Heading > keep </Heading>
        </Toolbar>
      </Header>
    </>
  );
};

export default Headerbar;
