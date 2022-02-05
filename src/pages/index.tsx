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
        src="https://www.googletagmanager.com/gtag/js?id=G-MJT5DX6MXZ"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MJT5DX6MXZ');
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
