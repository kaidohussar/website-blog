import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import { createGlobalStyle } from "styled-components";
import dynamic from "next/dynamic";

const StylesProvider = dynamic(
  () => import("kaidohussar-ui").then((mod) => mod.StylesProvider),
  { ssr: false }
);

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </StylesProvider>
  );
}
