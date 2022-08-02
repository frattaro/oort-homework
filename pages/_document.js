import createEmotionServer from "@emotion/server/create-instance";
import crypto from "crypto";
import nextSafe from "next-safe";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { createEmotionCache } from "../utils";

const isDev = process.env.NODE_ENV !== "production";

const getCsp = (nonce) => {
  const csp = {
    isDev,
    contentSecurityPolicy: {
      "base-uri": "'none'",
      "child-src": "'none'",
      "connect-src": "'self'",
      "default-src": "'none'",
      "font-src": "https://fonts.gstatic.com",
      "form-action": "'none'",
      "frame-ancestors": "'none'",
      "frame-src": "'none'",
      "img-src": "'self'",
      "manifest-src": "'self'",
      "object-src": "'none'",
      "prefetch-src": "'self'",
      "script-src": `'nonce-${nonce}' 'strict-dynamic'`,
      "style-src": `${
        isDev ? "" : `'nonce-${nonce}' 'strict-dynamic'`
      } https://fonts.googleapis.com/`,
      "worker-src": "'self'"
    }
  };

  if (isDev) {
    csp.permissionsPolicy = {
      "document-domain": "'self'"
    };
  }

  return csp;
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head nonce={this.props.nonce}>
          <meta name="description" content="Homework for Oort." />
          <meta property="csp-nonce" content={this.props.nonce} />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            nonce={this.props.nonce}
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {this.props.emotionStyleTags}
          <script
            nonce={this.props.nonce}
            dangerouslySetInnerHTML={{
              __html: `window.__webpack_nonce__ = "${this.props.nonce}"`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript nonce={this.props.nonce} />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const nonce = crypto.randomUUID().replace(/-/g, "");

  if (typeof ctx?.res?.setHeader === "function") {
    nextSafe(getCsp(nonce)).forEach((header) =>
      ctx.res.setHeader(header.key, header.value)
    );
  }

  const cache = createEmotionCache(nonce);
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        }
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      nonce={nonce}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
    nonce
  };
};
