import { css } from "@emotion/react";
import Menu from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import React, { useState } from "react";

import DrawerContents from "./DrawerContents";

const drawerWidth = 312;

function ResponsiveDrawer({ children, title }) {
  const screen600 = useMediaQuery("(min-width:600px)");

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        enableColorOnDark
        color="inherit"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: `rgba(255, 255, 255, 0.05)`,
          backdropFilter: "saturate(180%) blur(14px)",
          backgroundImage: "none",
          boxShadow: "none"
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            css={css`
              margin-right: 8px;
              ${screen600 ? "display: none;" : ""}
            `}
          >
            <Menu />
          </IconButton>
          <Typography
            noWrap
            component="div"
            sx={css`
              flex-grow: 1;
            `}
            className="ResponsiveDrawer__title"
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sub-navigation"
      >
        {!screen600 && (
          <SwipeableDrawer
            open={mobileOpen}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            swipeAreaWidth={24}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={css`
              & .MuiDrawer-paper {
                box-sizing: border-box;
                width: ${drawerWidth}px;
              }
            `}
          >
            <DrawerContents />
          </SwipeableDrawer>
        )}
        {screen600 && (
          <Drawer
            variant="permanent"
            sx={css`
              & .MuiDrawer-paper {
                box-sizing: border-box;
                width: ${drawerWidth}px;
              }
            `}
            open
          >
            <DrawerContents />
          </Drawer>
        )}
      </Box>
      <Box
        component="main"
        sx={css`
          flex-grow: 1;
          padding: 60px 16px 0;
          @media (min-width: 600px) {
            & {
              width: calc(100% - ${drawerWidth}px);
            }
          }
        `}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
