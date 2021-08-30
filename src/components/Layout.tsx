import Head from "next/head";
import Navigation from "./Navigation";
import { Loading } from "kaidohussar-ui";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

type Props = {
  children: React.ReactNode;
};

const googleTrackingId = "G-9DDQJQ0KZ1";

const Layout = ({ children }: Props) => {
  const [loading, setIsLoading] = useState(false);

  const { events } = useRouter();

  const handleLoading = () => {
    setIsLoading((currentLoadingState) => !currentLoadingState);
  };

  useEffect(() => {
    events.on("routeChangeStart", handleLoading);
    events.on("routeChangeComplete", handleLoading);

    return () => {
      events.off("routeChangeStart", handleLoading);
      events.off("routeChangeComplete", handleLoading);
    };
  }, [events]);

  return (
    <>
      <Head>
        <meta lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <link
          rel="preload"
          href="/fonts/Poppins-Medium.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Light.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        />

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${googleTrackingId}');
            `,
          }}
        />
      </Head>
      <Navigation />
      {loading ? <Loading size="fill-content" /> : children}
    </>
  );
};

export default Layout;
