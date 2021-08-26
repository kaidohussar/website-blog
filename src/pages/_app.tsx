import "normalize.css";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Frame } from "kaidohussar-ui";
import { useRouter } from "next/router";

import "../styles/main.css";

const StylesProvider = dynamic(
  () => import("kaidohussar-ui").then((mod) => mod.StylesProvider),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  const commonOverWrites = { fontFamily: "Poppins, 'sans-serif'" };

  const { isReady } = useRouter();

  return (
    // @ts-ignore
    <StylesProvider customThemes={[commonOverWrites, commonOverWrites]}>
      <Frame backgroundColor="backgroundColor" maxWidth="large">
        <Component {...pageProps} />
      </Frame>
    </StylesProvider>
  );
}
