import type { NextPage } from "next";
import { Header, WhoWeAre, Footer } from "containers";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <WhoWeAre />
      <Footer />
    </>
  );
};

export default Home;
