"use server";

import {
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getSVGFaviconUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { getStyles } from "./styles/styles";
interface RootProps extends KindePageEvent {
  children: React.ReactNode;
}

export const Root = ({
  children,
  context,
  request,
}: RootProps): React.JSX.Element => {
  return (
    <html dir={request.locale.isRtl ? "rtl" : "ltr"} lang={request.locale.lang}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="noindex" name="robots" />
        <meta content={getKindeCSRF()} name="csrf-token" />
        <meta content="light" name="color-scheme" />
        <meta content="nopagereadaloud" name="google" />
        <title>{context.widget.content.page_title}</title>

        <link href={getSVGFaviconUrl()} rel="icon" type="image/svg+xml" />
        <link 
          rel="preload" 
          href="https://umhc.org.uk/fonts/OpenSans-Regular.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="https://umhc.org.uk/fonts/OpenSans-SemiBold.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="https://umhc.org.uk/fonts/OpenSans-Bold.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        {getKindeRequiredCSS()}
        <style>{getStyles()}</style>
        {getKindeRequiredJS()}
      </head>

      <body>
        <div data-kinde-root="true">{children}</div>
      </body>
    </html>
  );
};
