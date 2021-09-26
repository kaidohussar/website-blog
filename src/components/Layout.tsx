import Head from "next/head";
import Navigation from "./Navigation";
import { Loading } from "kaidohussar-ui";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const googleTrackingId = "G-9DDQJQ0KZ1";

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const { events } = useRouter();

  useEffect(() => {
    const handleSetLoading = (url) => {
      url !== router.asPath && setIsLoading(true);
    };
    const handleEndLoading = (url) => {
      url === router.asPath && setIsLoading(false);
    };

    events.on("routeChangeStart", handleSetLoading);
    events.on("routeChangeComplete", handleEndLoading);

    return () => {
      events.off("routeChangeStart", handleSetLoading);
      events.off("routeChangeComplete", handleEndLoading);
    };
  }, [events, router.asPath]);

  return (
    <>
      <Head>
        <meta lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />

        {process.env.NODE_ENV === "production" &&
          window.location.hostname === "www.kaidohussar.dev" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${googleTrackingId}');
                `,
                }}
              />
            </>
          )}
      </Head>
      <Navigation />
      {loading ? <Loading size="fill-content" /> : children}
    </>
  );
};

export default Layout;
