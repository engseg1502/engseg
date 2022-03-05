import type { NextPage } from "next";
import Script from "next/script";

import {
  Banners,
  WhoWeAre,
  Services,
  Trainings,
  Consultancy,
  Customers,
} from "containers";

const Home: NextPage = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-215294634-1"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-215294634-1');
        `}
      </Script>

      <Banners />
      <WhoWeAre />
      <Trainings />
      <Services />
      <Consultancy />
      <Customers />
    </>
  );
};

export default Home;
