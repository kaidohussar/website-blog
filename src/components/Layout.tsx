import Head from "next/head";
import Navigation from "./Navigation";
import { useState } from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [loading, setIsLoading] = useState(false);

  const { events } = useRouter();

  if (!events) {
    return null;
  }

  events.on("routeChangeStart", () => setIsLoading(true));
  events.on("routeChangeComplete", () => setIsLoading(false));

  return (
    <>
      <Head>
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
      </Head>
      <Navigation />
      {loading ? <p>loading</p> : children}
    </>
  );
};

export default Layout;
