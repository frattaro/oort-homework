import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";

import BackgroundGlow from "./BackgroundGlow";
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function AppPage({ children, title }) {
  const pageTitle = `${title} | Oort Homework`;
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <BackgroundGlow>
        <ResponsiveDrawer title={title}>{children}</ResponsiveDrawer>
      </BackgroundGlow>
    </Box>
  );
}
