import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="canonical" href="https://kaidohussar.dev" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          />
          <link
            rel="stylesheet"
            media="print"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            // @ts-ignore
            onLoad="this.media='all'"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
