import type { NextPage } from "next";
import { Header, WhoWeAre, Footer } from "containers";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main className="container">
        <WhoWeAre />
      </main>

      <Footer />
    </>
  );
};

export default Home;
