import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";

export default function AppPage({ children, title }) {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Head>
          <title>{title}</title>
        </Head>
        {children}
      </Box>
    </>
  );
}
