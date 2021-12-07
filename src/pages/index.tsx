import type { NextPage } from "next";
import {
  Header,
  WhoWeAre,
  Services,
  Trainings,
  Consultancy,
  Customers,
  Contact,
  Footer,
} from "containers";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <WhoWeAre />
      <Trainings />
      <Services />
      <Consultancy />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
