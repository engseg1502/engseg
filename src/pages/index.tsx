import type { NextPage } from "next";
import {
  Banner,
  WhoWeAre,
  Services,
  Trainings,
  Consultancy,
  Customers,
  Contact,
} from "containers";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <Trainings />
      <Services />
      <Consultancy />
      <Customers />
      <Contact />
    </>
  );
};

export default Home;
