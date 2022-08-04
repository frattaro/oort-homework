import { css } from "@emotion/react";
import Filter2 from "@mui/icons-material/Filter2";
import Filter3 from "@mui/icons-material/Filter3";
import Storage from "@mui/icons-material/Storage";
import {
  AppBar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function DrawerContents() {
  const router = useRouter();

  const scrollingDiv = css`
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 15px;
      height: 2px;
    }
    &:hover::-webkit-scrollbar-thumb {
      max-height: 10px;
      background: #aaa;
    }
  `;

  return (
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          flex-grow: 1;
        `}
      >
        <AppBar
          enableColorOnDark
          color="inherit"
          position="sticky"
          sx={{
            backgroundColor: `rgba(255, 255, 255, 0.05)`,
            backdropFilter: "saturate(180%) blur(14px)",
            backgroundImage: "none",
            boxShadow: "none"
          }}
        >
          <Toolbar
            variant="dense"
            elevation={4}
            sx={css`
              padding-left: 10px !important;
              padding-right: 10px !important;
            `}
            className="DrawerContents__subnav-toolbar"
          >
            Oort Homework
          </Toolbar>
        </AppBar>
        <div
          css={[
            scrollingDiv,
            css`
              height: calc(100vh - 48px);
            `
          ]}
        >
          <List>
            {[
              { text: "EC2 Instances", Icon: Storage, href: "/" },
              { text: "Another Page", Icon: Filter2, href: "/page2" },
              { text: "Yet Another Page", Icon: Filter3, href: "/page3" }
            ].map(({ text, Icon, href }, index) => (
              <Link key={index} href={href} passHref>
                <ListItemButton selected={router.asPath === href}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default DrawerContents;
