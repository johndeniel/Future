import { Html, Head, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';


const Document = () => {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body> 
   
        <SkipNavLink styled />
        <Main />
        <NextScript />
      </body>
    </Html> 
  );
};

export default Document;
