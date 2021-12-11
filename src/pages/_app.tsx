import type { AppProps } from "next/app";
import Head from "next/head";

import { Header, Footer } from "containers";
import { Whatsapp } from "components";

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eng.Seg - Assessoria e Treinamentos</title>
        <link rel="canonical" href="https://www.engseg.art.br/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gabriel Oczust" />
        <meta
          name="keywords"
          content="segurança, segurança do trabalho, nr-33, nr-35, nr-10, EPI, EP, SPDA, CIPA, poste dobravel, bombeiros para empresas, laudos tecnicos"
        ></meta>
        <meta
          name="description"
          content="Atuamos no segmento de treinamento e assessoria em segurança, meio ambiente e saúde industrial, com foco em aplicação de soluções para a empresa"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:title"
          content="Eng.Seg - Assessoria e Treinamentos"
        />
        <meta
          property="og:site_name"
          content="Eng.Seg - Assessoria e Treinamentos"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Atuamos no segmento de treinamento e assessoria em segurança, meio ambiente e saúde industrial, com foco em aplicação de soluções para a empresa"
        />
        <meta
          property="og:image"
          content="https://www.engseg.art.br/og_image.jpg"
        ></meta>
        <meta property="og:url" content="https://www.engseg.art.br/" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default MyApp;
