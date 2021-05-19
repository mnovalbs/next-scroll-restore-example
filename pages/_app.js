import "../styles/globals.css";
import { RouterScrollProvider } from "@moxy/next-router-scroll";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RouterScrollProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </RouterScrollProvider>
  );
}

export default MyApp;
