import type { AppProps } from "next/app";
import { Header, Footer } from "containers";
import { Whatsapp } from "components";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default MyApp;
