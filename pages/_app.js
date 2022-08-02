import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SessionProvider,
  getSession,
  signIn,
  useSession
} from "next-auth/react";
import App from "next/app";
import Head from "next/head";
import React, { useState } from "react";

import { createEmotionCache, theme } from "../utils";

const clientSideEmotionCacheInstance = createEmotionCache(
  typeof document === "undefined"
    ? null
    : document.querySelector('[property="csp-nonce"]').content
);

const AuthGatekeeper = ({ children }) => {
  const session = useSession();

  if (session.status === "loading") return null;

  if (session.status === "unauthenticated") {
    signIn("auth0");
    return null;
  }

  return <>{children}</>;
};

const MyApp = ({ session, Component, emotionCache, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [clientSideEmotionCache] = useState(
    emotionCache || clientSideEmotionCacheInstance
  );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
      </Head>
      <SessionProvider
        session={session}
        refetchInterval={5 * 60}
        refetchOnWindowFocus={true}
      >
        <AuthGatekeeper>
          <CacheProvider value={emotionCache || clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <CssBaseline />
                <Component {...pageProps} />
              </QueryClientProvider>
            </ThemeProvider>
          </CacheProvider>
        </AuthGatekeeper>
      </SessionProvider>
    </>
  );
};

// Turn off static site generation (SSG)
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const session = await getSession(appContext);

  return {
    ...appProps,
    props: {
      ...appProps.props,
      session
    }
  };
};

export default MyApp;
