import { Html, Head, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';
import {font1, font2} from './_app';
import {cn } from "../lib/utils"

const Document = () => {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font1.fontHeading.variable,
          font2.fontSans.variable
        )}
      > 
        <SkipNavLink styled />
        <Main />
        <NextScript />
      </body>
    </Html> 
  );
};

export default Document;
